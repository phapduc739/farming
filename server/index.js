require("dotenv").config();
const http = require("http");

const express = require("express");
const app = express();
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

const mysql = require("mysql2/promise");
const bcrypt = require("bcryptjs");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const fs = require("fs").promises;
const util = require("util");
const unlink = util.promisify(fs.unlink);
const bodyParser = require("body-parser");
const WebSocket = require("ws");
const wss = new WebSocket.Server({ server });

wss.on("connection", (ws) => {
  // Gửi sự kiện 'quantity-update' với dữ liệu mới đến tất cả client
  ws.send(
    JSON.stringify({
      type: "quantity-update",
      payload: {
        id: productId,
        newQuantity: updatedQuantity,
      },
    })
  );
});

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

io.on("connection", (socket) => {
  console.log("A client connected");

  // Gửi sự kiện cho client khi có sự thay đổi dữ liệu
  setInterval(() => {
    io.emit("server-event", { message: "Hello from server!" });
  }, 5000); // Gửi mỗi 5 giây, thay đổi theo nhu cầu của bạn
});

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
  const { name, email, password } = req.body;

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

  const imagePath = "";

  const currentDate = new Date().toISOString().split("T")[0];

  // Tạo mật khẩu băm
  const hashedPassword = await bcrypt.hash(password, 10);

  // Thêm user mới
  const [user] = await db.execute(
    "INSERT INTO users (name, email, password, role, image, dateJoin, status) VALUES (?, ?, ?, ?, ?, ? ,?)",
    [
      name,
      email,
      hashedPassword, // Save the hashed password
      "User",
      imagePath,
      currentDate,
      "Enable",
    ]
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

  const role = user[0].role;

  const accessToken = generateAccessToken(user);
  const refreshToken = generateRefreshToken(user);

  res.json({
    message: "Đăng nhập thành công!",
    userId,
    email,
    role,
    accessToken,
    refreshToken,
  });

  console.log("User from database:", user);
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
      "INSERT INTO categories (name, description, image, quantity, createAt) VALUES (?, ?, ?, 0, NOW())",
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

    try {
      let imagePathOld = ""; // Đường dẫn của ảnh cũ

      // Lấy đường dẫn của ảnh cũ từ cơ sở dữ liệu
      const [category] = await db.execute(
        "SELECT image FROM categories WHERE id = ?",
        [categoryId]
      );
      if (category.length > 0) {
        imagePathOld = category[0].image;
      }

      // Nếu có tệp tin mới được tải lên
      if (req.file) {
        // Kiểm tra xem tệp tin cũ có tồn tại không và xóa nó
        if (imagePathOld) {
          try {
            // Sử dụng fs.promises.unlink để sử dụng promise
            await fs.promises.unlink(imagePathOld);
            console.log(`Đã xóa tệp tin cũ: ${imagePathOld}`);
          } catch (unlinkError) {
            console.error(`Lỗi khi xóa tệp tin cũ: ${unlinkError.message}`);
          }
        } else {
          console.log("Không có tệp tin cũ để xóa.");
        }

        // Cập nhật đường dẫn mới trong cơ sở dữ liệu
        const imagePathNew = req.file.path;
        await db.execute("UPDATE categories SET image = ? WHERE id = ?", [
          imagePathNew,
          categoryId,
        ]);
      }
      // Thực hiện truy vấn cập nhật thông tin người dùng
      await db.execute(
        "UPDATE categories SET name = ?, description = ? WHERE id = ?",
        [name, description, categoryId]
      );

      res.status(200).json({
        message: "Cập nhật danh mục thành công!",
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        error: "Cập nhật danh mục thất bại!",
      });
    }
  }
);

// Xóa người dùng dựa trên ID
app.delete("/delete/category/:categoryId", async (req, res) => {
  const categoryId = req.params.categoryId;

  try {
    // Lấy đường dẫn của ảnh trước khi xóa người dùng
    const [category] = await db.execute(
      "SELECT image FROM categories WHERE id = ?",
      [categoryId]
    );

    // Nếu người dùng tồn tại, xóa và trả về kết quả
    if (category.length > 0) {
      const imagePath = category[0].image;

      // Xóa người dùng từ cơ sở dữ liệu
      await db.execute("DELETE FROM categories WHERE id = ?", [categoryId]);

      // Nếu có đường dẫn ảnh, hãy xóa ảnh
      if (imagePath) {
        // Đảm bảo sử dụng thư viện fs để xóa file
        const fs = require("fs").promises;
        await fs.unlink(imagePath);
      }

      res.status(200).json({
        message: "Xóa người dùng thành công!",
      });
    } else {
      res.status(404).json({
        error: "Không tìm thấy người dùng!",
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Lỗi khi xóa người dùng!",
    });
  }
});

app.post("/update-quantity/:productId", (req, res) => {
  const { productId } = req.params;
  const newQuantityInCart = req.body.newQuantityInCart;

  // Thực hiện cập nhật số lượng trong database

  // Gửi thông báo đến tất cả các client rằng số lượng đã được cập nhật
  io.emit("quantity-update", { id: productId, newQuantityInCart });

  res.send("Quantity updated successfully");
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
    p.unit,
    p.quantity,
    p.status,
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
          unit: row.unit,
          status: row.status,
          quantity: row.quantity,
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

app.post("/create/product", upload.array("images", 12), async (req, res) => {
  try {
    const { name, description, price, unit, quantity, categoryID } = req.body;

    // Insert the product into the products table
    const [result] = await db.execute(
      "INSERT INTO products (name, description, price, unit, quantity, categoryID, status) VALUES (?, ?, ?, ?, ?, ?, ?)",
      [name, description, price, unit, quantity, categoryID, "Còn hàng"]
    );

    const productId = result.insertId;

    // Insert product images into the product_images table
    const files = req.files;
    if (files && files.length > 0) {
      for (const file of files) {
        const imagePath = file.path;
        await db.execute(
          "INSERT INTO product_images (product_id, image_url) VALUES (?, ?)",
          [productId, imagePath]
        );
      }
    }

    // Update the quantity in the categories table
    await db.execute(
      "UPDATE categories SET quantity = quantity + 1 WHERE id = ?",
      [categoryID]
    );

    res.status(201).json({ message: "Thêm sản phẩm thành công" });
  } catch (error) {
    console.error("Lỗi khi thêm sản phẩm:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/product/:productId", async (req, res) => {
  const productId = req.params.productId;
  try {
    const [productInfo] = await db.execute(
      "SELECT p.id, p.name, p.description, p.price, p.quantity, p.status, p.unit, pi.id AS image_id, pi.product_id, pi.image_url " +
        "FROM products p " +
        "LEFT JOIN product_images pi ON p.id = pi.product_id " +
        "WHERE p.id = ?",
      [productId]
    );

    if (productInfo.length === 0) {
      res.status(404).send("Sản phẩm không tồn tại");
    } else {
      // Lấy dữ liệu sản phẩm (tên, mô tả, giá) từ dòng đầu tiên
      const productData = {
        id: productInfo[0].id,
        name: productInfo[0].name,
        description: productInfo[0].description,
        price: productInfo[0].price,
        quantity: productInfo[0].quantity,
        status: productInfo[0].status,
        unit: productInfo[0].unit,

        images: productInfo.map((row) => ({
          id: row.image_id,
          product_id: row.product_id,
          image_url: row.image_url,
        })),
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

app.put(
  "/edit/product/:productId",
  upload.array("images", 4),
  async (req, res) => {
    const productId = req.params.productId;
    const updatedProductData = req.body;
    const images = req.files;

    try {
      await db.execute(
        "UPDATE products SET name = ?, description = ?, price = ?, quantity = ?, status = ?, unit = ? WHERE id = ?",
        [
          updatedProductData.name,
          updatedProductData.description,
          updatedProductData.price,
          updatedProductData.quantity,
          updatedProductData.status,
          updatedProductData.unit,
          productId,
        ]
      );

      await db.execute("DELETE FROM product_images WHERE product_id = ?", [
        productId,
      ]);

      for (let i = 0; i < images.length; i++) {
        const imageUrl = `uploads/${images[i].filename}`;
        await db.execute(
          "INSERT INTO product_images (product_id, image_url) VALUES (?, ?)",
          [productId, imageUrl]
        );
      }

      res.json({ message: "Thông tin sản phẩm đã được cập nhật thành công" });
    } catch (error) {
      console.error(error);
      res.status(500).send("Lỗi khi cập nhật thông tin sản phẩm");
    }
  }
);

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

app.delete("/delete/product/:productId", async (req, res) => {
  const productId = req.params.productId;

  try {
    // Fetch the product details including image paths
    const [product] = await db.execute(
      "SELECT id, name, description, price, unit, quantity, status, categoryID FROM products WHERE id = ?",
      [productId]
    );

    // If the product exists, proceed with deletion
    if (product.length > 0) {
      const { name, description, price, unit, quantity, status, categoryID } =
        product[0];

      // Fetch the image paths associated with the product
      const [images] = await db.execute(
        "SELECT id, image_url FROM product_images WHERE product_id = ?",
        [productId]
      );

      // Delete the corresponding image files from the uploads directory
      const imagePaths = images.map((row) => row.image_url).filter(Boolean);
      await Promise.all(
        imagePaths.map(async (imagePath) => {
          try {
            await fs.unlink(imagePath);
          } catch (err) {
            console.error(`Error deleting file: ${imagePath}`, err);
          }
        })
      );

      // Delete images from the product_images table
      await db.execute("DELETE FROM product_images WHERE product_id = ?", [
        productId,
      ]);

      await db.execute(
        "UPDATE categories SET quantity = GREATEST(quantity - 1, 0) WHERE id = ?",
        [categoryID]
      );
      // Delete the product from the products table
      await db.execute("DELETE FROM products WHERE id = ?", [productId]);

      res.status(200).json({
        message: "Product deleted successfully!",
        deletedProduct: {
          id: productId,
          name,
          description,
          price,
          unit,
          quantity,
          status,
          categoryID,
          images: imagePaths,
        },
      });
    } else {
      // If the product does not exist
      res.status(404).json({
        error: "Product not found!",
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Error deleting product!",
    });
  }
});

// SEARCH PRODUCT
app.get("/api/search", async (req, res) => {
  const term = req.query.term;

  try {
    const [results, fields] = await db.execute(
      "SELECT p.id, p.name, p.description, p.price, p.quantity, p.status, p.unit, MIN(pi.id) as min_image_id, pi.image_url " +
        "FROM products p " +
        "LEFT JOIN product_images pi ON p.id = pi.product_id " +
        "WHERE p.name LIKE ? " +
        "GROUP BY p.id " +
        "LIMIT 5",
      [`%${term}%`]
    );

    res.json(results);
  } catch (error) {
    console.error("Error executing query:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/list/users", async (req, res) => {
  try {
    const [rows] = await db.execute("SELECT * FROM users");
    res.status(200).json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Lấy danh sách người dùng thất bại!" });
  }
});

app.get("/user/:userId", async (req, res) => {
  const userId = req.params.userId;

  try {
    // Thực hiện truy vấn SQL để lấy thông tin danh mục dựa trên categoryId
    const [rows] = await db.execute("SELECT * FROM users WHERE id = ?", [
      userId,
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

    const currentDate = new Date().toISOString().split("T")[0];

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    const result = await db.execute(
      "INSERT INTO users (name, email, password, role, image, dateJoin, status) VALUES (?, ?, ?, ?, ?, ?, ?)",
      [
        name || null,
        email || null,
        hashedPassword || null, // Save the hashed password
        role || null,
        imagePath || null,
        currentDate || null,
        "Enable",
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

app.put("/edit/user/:userId", upload.single("image"), async (req, res) => {
  const userId = req.params.userId;
  const { name, email, role, status } = req.body;

  try {
    let imagePathOld = ""; // Đường dẫn của ảnh cũ

    // Lấy đường dẫn của ảnh cũ từ cơ sở dữ liệu
    const [user] = await db.execute("SELECT image FROM users WHERE id = ?", [
      userId,
    ]);
    if (user.length > 0) {
      imagePathOld = user[0].image;
    }

    // Nếu có tệp tin mới được tải lên
    if (req.file) {
      // Kiểm tra xem tệp tin cũ có tồn tại không và xóa nó
      if (imagePathOld) {
        try {
          // Sử dụng fs.promises.unlink để sử dụng promise
          await fs.promises.unlink(imagePathOld);
          console.log(`Đã xóa tệp tin cũ: ${imagePathOld}`);
        } catch (unlinkError) {
          console.error(`Lỗi khi xóa tệp tin cũ: ${unlinkError.message}`);
        }
      } else {
        console.log("Không có tệp tin cũ để xóa.");
      }

      // Cập nhật đường dẫn mới trong cơ sở dữ liệu
      const imagePathNew = req.file.path;
      await db.execute("UPDATE users SET image = ? WHERE id = ?", [
        imagePathNew,
        userId,
      ]);
    }
    // Thực hiện truy vấn cập nhật thông tin người dùng
    await db.execute(
      "UPDATE users SET name = ?, email = ?, role = ?, status = ? WHERE id = ?",
      [name, email, role, status, userId]
    );

    res.status(200).json({
      message: "Cập nhật người dùng thành công!",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Cập nhật người dùng thất bại!",
    });
  }
});

// Xóa người dùng dựa trên ID
app.delete("/delete/user/:userId", async (req, res) => {
  const userId = req.params.userId;

  try {
    // Lấy đường dẫn của ảnh trước khi xóa người dùng
    const [user] = await db.execute("SELECT image FROM users WHERE id = ?", [
      userId,
    ]);

    // Nếu người dùng tồn tại, xóa và trả về kết quả
    if (user.length > 0) {
      const imagePath = user[0].image;

      // Xóa người dùng từ cơ sở dữ liệu
      await db.execute("DELETE FROM users WHERE id = ?", [userId]);

      // Nếu có đường dẫn ảnh, hãy xóa ảnh
      if (imagePath) {
        // Đảm bảo sử dụng thư viện fs để xóa file
        const fs = require("fs").promises;
        await fs.unlink(imagePath);
      }

      res.status(200).json({
        message: "Xóa người dùng thành công!",
      });
    } else {
      res.status(404).json({
        error: "Không tìm thấy người dùng!",
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Lỗi khi xóa người dùng!",
    });
  }
});

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
