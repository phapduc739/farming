require("dotenv").config();

const express = require("express");
const app = express();
const mysql = require("mysql2/promise");
const bcrypt = require("bcryptjs");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const util = require("util");
const unlink = util.promisify(fs.unlink);
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());
app.use(cors());
app.use("/uploads", express.static("uploads"));

const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

const port = 4000;

// Khởi tạo kho lưu trữ hình ảnh
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "-" + Date.now() + ".png");
  },
});

const upload = multer({ storage: storage });

app.get("/", (req, res) => {
  res.send({
    message: "Hello Backend",
  });
});

// Api đăng ký
app.post("/register", async (req, res) => {
  const { fullname, email, password } = req.body;

  // Kiểm tra username đã tồn tại chưa
  const [existingUser] = await db.execute(
    "SELECT * FROM users WHERE email = ?",
    [email]
  );

  if (existingUser.length > 0) {
    return res.status(400).json({
      message: "Email đã được sử dụng!",
    });
  }

  // Tạo mật khẩu băm
  const hashedPassword = await bcrypt.hash(password, 10);

  // Thêm user mới
  const [user] = await db.execute(
    "INSERT INTO users (fullName, email, password) VALUES (?, ?, ?)",
    [fullname, email, hashedPassword]
  );

  // Tạo token
  const token = jwt.sign({ id: user.insertId }, "secretkey");

  res.json({
    message: "Đăng ký thành công!",
    token,
    email,
  });
});

// Hàm generate access token
function generateAccessToken(user) {
  return jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
    expiresIn: "15m",
  });
}

// Hàm generate refresh token
function generateRefreshToken(user) {
  return jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
}

// Api đăng nhập
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  // Lấy thông tin user
  const [user] = await db.execute("SELECT * FROM users WHERE email = ?", [
    email,
  ]);

  if (user.length === 0) {
    return res.status(400).json({
      error: "Email không tồn tại!",
    });
  }

  // Kiểm tra password
  const validPassword = await bcrypt.compare(password, user[0].password);
  if (!validPassword) {
    return res.status(400).json({
      error: "Sai mật khẩu!",
    });
  }

  // Thời hạn token là 1 ngày
  const expiresIn = 60 * 60 * 24;

  const token = jwt.sign({ id: user[0].id }, "secretkey", {
    expiresIn,
  });

  const userId = user[0].id;

  const accessToken = generateAccessToken(user);
  const refreshToken = generateRefreshToken(user);

  res.json({
    message: "Đăng nhập thành công!",
    userId,
    email,
    accessToken,
    refreshToken,
  });
});

app.get("/token", (req, res) => {
  // Lấy và xác thực refresh token
  const refreshToken = req.header("x-refresh-token");

  // Verify và lấy userId
  const userId = verifyRefreshToken(refreshToken);

  // Tạo access token mới dựa trên userId
  const accessToken = generateAccessToken(userId);

  // Trả về access token mới
  res.json({ accessToken });
});

// Api đăng nhập
app.post("/login/admin", async (req, res) => {
  const { email, password } = req.body;

  // Lấy thông tin user
  const [admin] = await db.execute("SELECT * FROM admin WHERE email = ?", [
    email,
  ]);

  if (admin.length === 0) {
    return res.status(400).json({
      error: "Email không tồn tại!",
    });
  }

  // Kiểm tra password
  const validPassword = await bcrypt.compare(password, admin[0].password);
  if (!validPassword) {
    return res.status(400).json({
      error: "Sai mật khẩu!",
    });
  }

  // Thời hạn token là 1 ngày
  const expiresIn = 60 * 60 * 24;

  const token = jwt.sign({ id: admin[0].id }, "secretkey", {
    expiresIn,
  });

  const adminId = admin[0].id;

  const accessToken = generateAccessToken(admin);
  const refreshToken = generateRefreshToken(admin);

  res.json({
    message: "Đăng nhập thành công!",
    adminId,
    email,
    accessToken,
    refreshToken,
  });
});

app.get("/token/admin", (req, res) => {
  // Lấy và xác thực refresh token
  const refreshToken = req.header("x-refresh-token");

  // Verify và lấy userId
  const userId = verifyRefreshToken(refreshToken);

  // Tạo access token mới dựa trên userId
  const accessToken = generateAccessToken(userId);

  // Trả về access token mới
  res.json({ accessToken });
});

// Api danh sách danh mục
app.get("/list/users", async (req, res) => {
  try {
    const [rows] = await db.execute(`SELECT * FROM users`);
    res.json(rows);
  } catch (error) {
    res.status(500).json({
      error: "Lấy danh sách danh mục thất bại!",
    });
  }
});

// Api danh sách danh mục
app.get("/list/categories", async (req, res) => {
  try {
    const [rows] = await db.execute(`SELECT * FROM categories`);
    res.json(rows);
  } catch (error) {
    res.status(500).json({
      error: "Lấy danh sách danh mục thất bại!",
    });
  }
});

app.get("/category/:categoryId", async (req, res) => {
  const categoryId = req.params.categoryId;

  try {
    // Thực hiện truy vấn SQL để lấy thông tin danh mục dựa trên categoryId
    const [rows] = await db.execute("SELECT * FROM categories WHERE id = ?", [
      categoryId,
    ]);

    if (rows.length === 0) {
      // Trả về lỗi 404 nếu không tìm thấy danh mục
      res.status(404).json({
        error: "Danh mục không tồn tại.",
      });
    } else {
      // Trả về thông tin danh mục nếu tìm thấy
      res.json(rows[0]);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Lỗi khi lấy thông tin danh mục.",
    });
  }
});

app.post("/create/category", upload.single("image"), async (req, res) => {
  const { name, description } = req.body;

  try {
    // Kiểm tra xem tệp hình ảnh đã được tải lên chưa
    if (!req.file) {
      return res.status(400).json({
        error: "Vui lòng tải lên hình ảnh danh mục.",
      });
    }

    const imagePath = req.file.path;

    const result = await db.execute(
      "INSERT INTO categories (name, description, image) VALUES (?, ?, ?)",
      [name, description, imagePath]
    );

    res.status(200).json({
      message: "Thêm danh mục thành công!",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Thêm danh mục thất bại!",
    });
  }
});

// API để tải lên tệp
app.post("/upload", upload.single("image"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "Không tìm thấy tệp hình ảnh" });
  }

  const imageFileName = req.file.filename;
  const imagePath = `uploads/${imageFileName}`;
  res.json({ imagePath });
});

// API để xóa tệp
app.delete("/deleteImage/:imagePath", (req, res) => {
  const imagePath = req.params.imagePath;
  const filePath = `./uploads/${imagePath}`;

  fs.unlink(filePath, (err) => {
    if (err) {
      console.error("Lỗi khi xóa tệp:", err);
      res.status(500).json({ error: "Lỗi khi xóa tệp" });
    } else {
      res.json({ message: "Tệp đã được xóa thành công" });
    }
  });
});

app.put(
  "/edit/category/:categoryId",
  upload.single("image"),
  async (req, res) => {
    const categoryId = req.params.categoryId;
    const { name, description } = req.body;

    // Kiểm tra xem req.file tồn tại và lấy đường dẫn ảnh mới
    const newImage = req.file ? `uploads/${req.file.filename}` : req.body.image;

    try {
      // Cập nhật cơ sở dữ liệu với đường dẫn ảnh mới (newImage)
      const result = await db.execute(
        "UPDATE categories SET name=?, description=?, image=? WHERE id = ?",
        [name, description, newImage, categoryId]
      );

      res.status(200).json({
        message: "Chỉnh sửa danh mục thành công!",
      });
    } catch (error) {
      res.status(500).json({
        error: "Chỉnh sửa danh mục thất bại!",
      });
    }
  }
);

app.delete("/delete/category/:categoryId", async (req, res) => {
  const categoryId = req.params.categoryId;

  try {
    // Thực hiện xóa dữ liệu từ cơ sở dữ liệu
    const result = await db.execute("DELETE FROM categories WHERE id = ?", [
      categoryId,
    ]);

    if (result.affectedRows > 0) {
      // Xóa thành công, trả về phản hồi 200 OK
      res.status(200).json({
        success: true,
        message: "Danh mục đã được xóa",
      });
    } else {
      // Không tìm thấy bản ghi để xóa
      res.status(404).json({
        success: false,
        message: "Không tìm thấy danh mục để xóa",
      });
    }
  } catch (error) {
    // Xảy ra lỗi trong quá trình xóa
    console.error("Lỗi khi xóa danh mục từ MySQL:", error);
    res.status(500).json({
      success: false,
      message: "Lỗi nội bộ server",
    });
  }
});

// Api danh sách sản phẩm
app.get("/list/products", async (req, res) => {
  try {
    const [rows] = await db.execute(`
    SELECT
    p.id AS product_id,
    p.id,
    p.name,
    p.description,
    p.price,
    p.categoryID,
    pi.image_url,
    c.name AS category_name
  FROM products p
  LEFT JOIN product_images pi ON p.id = pi.product_id
  LEFT JOIN categories c ON p.categoryID = c.id
    `);

    // Chuyển dữ liệu kết quả thành một danh sách sản phẩm với các hình ảnh tương ứng
    const products = {};

    rows.forEach((row) => {
      const productId = row.product_id;
      if (!products[productId]) {
        // Tạo một mục sản phẩm mới nếu chưa tồn tại
        products[productId] = {
          id: row.id,
          name: row.name,
          description: row.description,
          price: row.price,
          categoryID: row.categoryID,
          category_name: row.category_name,
          images: [],
        };
      }

      if (row.image_url) {
        // Thêm hình ảnh vào mục sản phẩm tương ứng
        products[productId].images.push(row.image_url);
      }
    });

    res.json(Object.values(products)); // Chuyển đổi danh sách sản phẩm thành mảng
  } catch (error) {
    console.error(error);
    res.status(500).send("Lỗi lấy danh sách sản phẩm");
  }
});

// Api thêm sản phẩm
app.post("/create/product", upload.array("images", 12), async (req, res) => {
  const { name, description, price, categoryID } = req.body;

  const [result] = await db.execute(
    "INSERT INTO products (name, description, price, categoryID) VALUES (?, ?, ?, ?)",
    [name, description, price, categoryID]
  );

  const productId = result.insertId;

  const files = req.files;

  if (files && files.length > 0) {
    files.forEach(async (file) => {
      const imagePath = file.path;
      await db.execute(
        "INSERT INTO product_images (product_id, image_url) VALUES (?, ?)",
        [productId, imagePath]
      );
    });
  }

  res.send("Thêm sản phẩm thành công");
});

// Api thông tin chi tiết sản phẩm theo productId
app.get("/product/:productId", async (req, res) => {
  const productId = req.params.productId;
  try {
    const [productInfo] = await db.execute(
      "SELECT p.id, p.name, p.description, p.price, pi.id AS image_id, pi.product_id, pi.image_url " +
        "FROM products p " +
        "LEFT JOIN product_images pi ON p.id = pi.product_id " +
        "WHERE p.id = ?",
      [productId]
    );

    if (productInfo.length === 0) {
      res.status(404).send("Sản phẩm không tồn tại");
    } else {
      // Xử lý dữ liệu để nhóm các hình ảnh vào một mảng
      const productImages = productInfo.map((row) => ({
        id: row.image_id,
        product_id: row.product_id,
        image_url: row.image_url,
      }));

      // Lấy dữ liệu sản phẩm (tên, mô tả, giá) từ dòng đầu tiên
      const productData = {
        id: productInfo[0].id,
        name: productInfo[0].name,
        description: productInfo[0].description,
        price: productInfo[0].price,
        images: productImages,
      };

      res.json(productData);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Lỗi khi lấy thông tin sản phẩm");
  }
});

// API xóa hình ảnh theo imageId của sản phẩm
app.delete("/delete/image/:productId/:imageId", async (req, res) => {
  const productId = req.params.productId;
  const imageId = req.params.imageId;

  try {
    // Lấy danh sách hình ảnh của sản phẩm dựa trên productId
    const [productImages] = await db.execute(
      "SELECT * FROM product_images WHERE product_id = ?",
      [productId]
    );

    // Kiểm tra xem imageId có tồn tại trong danh sách hình ảnh của sản phẩm không
    const imageToDelete = productImages.find((image) => image.id == imageId);

    if (imageToDelete) {
      // Xóa hình ảnh từ cơ sở dữ liệu
      await db.execute("DELETE FROM product_images WHERE id = ?", [imageId]);

      // Ở đây, bạn có thể viết logic để xóa tệp hình ảnh từ máy chủ thực tế
      // Nếu bạn lưu đường dẫn tệp hình ảnh trong cơ sở dữ liệu

      res.json({ message: "Hình ảnh đã được xóa thành công" });
    } else {
      res.status(404).send("Hình ảnh không tồn tại cho sản phẩm này.");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Lỗi khi xóa hình ảnh");
  }
});

// API để cập nhật thông tin sản phẩm sau khi chỉnh sửa
app.put("/edit/product/:productId", async (req, res) => {
  const productId = req.params.productId;
  const updatedProductData = req.body;
  try {
    await db.execute(
      "UPDATE products SET name = ?, description = ?, price = ? WHERE id = ?",
      [
        updatedProductData.name,
        updatedProductData.description,
        updatedProductData.price,
        productId,
      ]
    );
    res.json({ message: "Thông tin sản phẩm đã được cập nhật thành công" });
  } catch (error) {
    console.error(error);
    res.status(500).send("Lỗi khi cập nhật thông tin sản phẩm");
  }
});

// API để thêm ảnh mới cho sản phẩm
app.post(
  "/product/:productId/image",
  upload.single("newImage"),
  async (req, res) => {
    const productId = req.params.productId;
    const newImage = req.file.path;

    try {
      // Thực hiện một số kiểm tra để đảm bảo rằng sản phẩm với productId tồn tại trong cơ sở dữ liệu
      // Thêm đường dẫn của ảnh mới vào bảng product_images với productId tương ứng
      const [result] = await db.execute(
        "INSERT INTO product_images (product_id, image_url) VALUES (?, ?)",
        [productId, newImage]
      );

      if (result.affectedRows === 1) {
        const newImageInfo = { id: result.insertId, url: newImage };
        res.json(newImageInfo);
      } else {
        res.status(500).send("Lỗi khi thêm ảnh mới");
      }
    } catch (error) {
      console.error(error);
      res.status(500).send("Lỗi khi thêm ảnh mới");
    }
  }
);

app.post("/create/user", upload.single("image"), async (req, res) => {
  const { name, email, password, role } = req.body;

  try {
    // Kiểm tra xem tệp hình ảnh đã được tải lên chưa
    if (!req.file) {
      return res.status(400).json({
        error: "Vui lòng tải lên hình ảnh danh mục.",
      });
    }

    const imagePath = req.file.path;

    const result = await db.execute(
      "INSERT INTO users (fullName, email, password, role, image) VALUES (?, ?, ?, ?, ?)",
      [
        name || null,
        email || null,
        password || null,
        role || null,
        imagePath || null,
      ]
    );

    res.status(200).json({
      message: "Thêm người dùng thành công!",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Thêm người dùng thất bại!",
    });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
