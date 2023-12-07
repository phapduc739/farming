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
// app.post("/register", async (req, res) => {
//   const { name, email, password } = req.body;

//   // Kiểm tra username đã tồn tại chưa
//   const [existingUser] = await db.execute(
//     "SELECT * FROM users WHERE email = ?",
//     [email]
//   );

//   if (existingUser.length > 0) {
//     return res.status(400).json({
//       message: "Email đã được sử dụng!",
//     });
//   }

//   const imagePath = "";

//   const currentDate = new Date().toISOString().split("T")[0];

//   // Tạo mật khẩu băm
//   const hashedPassword = await bcrypt.hash(password, 10);

//   // Thêm user mới
//   const [user] = await db.execute(
//     "INSERT INTO users (name, email, password, role, image, dateJoin, status) VALUES (?, ?, ?, ?, ?, ? ,?)",
//     [
//       name,
//       email,
//       hashedPassword, // Save the hashed password
//       "User",
//       imagePath,
//       currentDate,
//       "Enable",
//     ]
//   );

//   // Tạo token
//   const token = jwt.sign({ id: user.insertId }, "secretkey");

//   res.json({
//     message: "Đăng ký thành công!",
//     token,
//     email,
//   });
// });

// // Hàm generate access token
// function generateAccessToken(user) {
//   return jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
//     expiresIn: "15m",
//   });
// }

// // Hàm generate refresh token
// function generateRefreshToken(user) {
//   return jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
//     expiresIn: "7d",
//   });
// }

// // Api đăng nhập
// app.post("/login", async (req, res) => {
//   const { email, password } = req.body;

//   // Lấy thông tin user
//   const [user] = await db.execute("SELECT * FROM users WHERE email = ?", [
//     email,
//   ]);

//   if (user.length === 0) {
//     return res.status(400).json({
//       error: "Email không tồn tại!",
//     });
//   }

//   // Kiểm tra password
//   const validPassword = await bcrypt.compare(password, user[0].password);
//   if (!validPassword) {
//     return res.status(400).json({
//       error: "Sai mật khẩu!",
//     });
//   }

//   // Thời hạn token là 1 ngày
//   const expiresIn = 60 * 60 * 24;

//   const token = jwt.sign({ id: user[0].id }, "secretkey", {
//     expiresIn,
//   });

//   const userId = user[0].id;

//   const role = user[0].role;

//   const accessToken = generateAccessToken(user);
//   const refreshToken = generateRefreshToken(user);

//   res.json({
//     message: "Đăng nhập thành công!",
//     userId,
//     email,
//     role,
//     accessToken,
//     refreshToken,
//   });

//   console.log("User from database:", user);
// });

// app.get("/token", (req, res) => {
//   // Lấy và xác thực refresh token
//   const refreshToken = req.header("x-refresh-token");

//   // Verify và lấy userId
//   const userId = verifyRefreshToken(refreshToken);

//   // Tạo access token mới dựa trên userId
//   const accessToken = generateAccessToken(userId);

//   // Trả về access token mới
//   res.json({ accessToken });
// });

// Hàm xác minh refresh token
function verifyRefreshToken(refreshToken) {
  try {
    const decoded = jwt.verify(refreshToken, process.env.JWT_SECRET);
    return decoded.id;
  } catch (error) {
    throw new Error("Invalid refresh token");
  }
}

// Middleware kiểm tra xác thực
function authenticateToken(req, res, next) {
  const token = req.header("Authorization");

  if (!token) {
    return res.status(401).json({ error: "Access token is required" });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ error: "Invalid access token" });
    }
    req.user = user;
    next();
  });
}

// Api đăng ký User
app.post("/register/user", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Kiểm tra email đã tồn tại chưa
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

    // Thêm user mới vào cơ sở dữ liệu
    const [user] = await db.execute(
      "INSERT INTO users (name, email, password, role, dateJoin, status) VALUES (?, ?, ?, ?, ?, ?)",
      [
        name,
        email,
        hashedPassword,
        "User",
        new Date().toISOString().split("T")[0],
        "Enable",
      ]
    );

    // Tạo token
    const token = jwt.sign({ id: user.insertId }, process.env.JWT_SECRET);

    res.json({
      message: "Đăng ký thành công!",
      token,
      email,
    });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Api đăng ký Seller
app.post("/register/seller", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Kiểm tra email đã tồn tại chưa
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

    // Thêm user mới vào cơ sở dữ liệu
    const [user] = await db.execute(
      "INSERT INTO users (name, email, password, role, dateJoin, status) VALUES (?, ?, ?, ?, ?, ?)",
      [
        name,
        email,
        hashedPassword,
        "Seller",
        new Date().toISOString().split("T")[0],
        "Enable",
      ]
    );

    // Tạo token
    const token = jwt.sign({ id: user.insertId }, process.env.JWT_SECRET);

    res.json({
      message: "Đăng ký thành công!",
      token,
      email,
    });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Api đăng nhập
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Lấy thông tin user từ cơ sở dữ liệu
    const [user] = await db.execute("SELECT * FROM users WHERE email = ?", [
      email,
    ]);

    if (user.length === 0) {
      return res.status(400).json({
        error: "Email không tồn tại!",
      });
    }

    // Kiểm tra mật khẩu
    const validPassword = await bcrypt.compare(password, user[0].password);
    if (!validPassword) {
      return res.status(400).json({
        error: "Sai mật khẩu!",
      });
    }

    // Thời hạn token là 1 ngày
    const expiresIn = 60 * 60 * 24;

    // Tạo access token và refresh token
    const accessToken = jwt.sign({ id: user[0].id }, process.env.JWT_SECRET, {
      expiresIn,
    });
    const refreshToken = jwt.sign({ id: user[0].id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.json({
      message: "Đăng nhập thành công!",
      userId: user[0].id,
      email,
      role: user[0].role,
      accessToken,
      refreshToken,
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Api làm mới access token bằng refresh token
app.get("/token", (req, res) => {
  const refreshToken = req.header("x-refresh-token");

  try {
    // Xác thực refresh token và lấy userId
    const userId = verifyRefreshToken(refreshToken);

    // Tạo access token mới dựa trên userId
    const accessToken = jwt.sign({ id: userId }, process.env.JWT_SECRET, {
      expiresIn: "15m",
    });

    // Trả về access token mới
    res.json({ accessToken });
  } catch (error) {
    console.error("Token refresh error:", error.message);
    res.status(401).json({ error: "Invalid refresh token" });
  }
});

// Api yêu cầu xác thực
app.get("/protected", authenticateToken, (req, res) => {
  // Các hành động chỉ có thể thực hiện khi đã xác thực thành công
  res.json({ message: "Protected endpoint", user: req.user });
});

// Api danh sách người dùng
app.get("/list/users", async (req, res) => {
  try {
    const [rows] = await db.execute(`SELECT * FROM users`);
    res.json(rows);
  } catch (error) {
    res.status(500).json({
      error: "Lấy danh sách người dùng thất bại!",
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
      "INSERT INTO categories (name, description, image, quantity, create_at) VALUES (?, ?, ?, 0, NOW())",
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

// Xóa danh mục dựa trên ID
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
// app.get("/list/products", async (req, res) => {
//   try {
//     const [rows] = await db.execute(`
//     SELECT
//     p.id AS product_id,
//     p.id,
//     p.name,
//     p.description,
//     p.price,
//     p.unit,
//     p.quantity,
//     p.status,
//     p.request,
//     p.categoryID,
//     pi.image_url,
//     c.name AS category_name
//   FROM products p
//   LEFT JOIN product_images pi ON p.id = pi.product_id
//   LEFT JOIN categories c ON p.categoryID = c.id
//     `);

//     // Chuyển dữ liệu kết quả thành một danh sách sản phẩm với các hình ảnh tương ứng
//     const products = {};

//     rows.forEach((row) => {
//       const productId = row.product_id;
//       if (!products[productId]) {
//         // Tạo một mục sản phẩm mới nếu chưa tồn tại
//         products[productId] = {
//           id: row.id,
//           name: row.name,
//           description: row.description,
//           price: row.price,
//           unit: row.unit,
//           status: row.status,
//           request: row.request,
//           quantity: row.quantity,
//           categoryID: row.categoryID,
//           category_name: row.category_name,
//           images: [],
//         };
//       }

//       if (row.image_url) {
//         // Thêm hình ảnh vào mục sản phẩm tương ứng
//         products[productId].images.push(row.image_url);
//       }
//     });

//     res.json(Object.values(products)); // Chuyển đổi danh sách sản phẩm thành mảng
//   } catch (error) {
//     console.error(error);
//     res.status(500).send("Lỗi lấy danh sách sản phẩm");
//   }
// });

// Api danh sach san pham cho admin
app.get("/list/manage-products", async (req, res) => {
  try {
    const [rows] = await db.execute(`
      SELECT
        p.id AS product_id,
        p.name AS product_name,
        p.description,
        p.price,
        p.unit,
        p.quantity,
        p.status,
        p.request,
        p.categoryID,
        pi.image_url,
        c.name AS category_name,
        u.name AS name,
        u.role AS role,
        u.id AS user_id
      FROM products p
      LEFT JOIN product_images pi ON p.id = pi.product_id
      LEFT JOIN categories c ON p.categoryID = c.id
      LEFT JOIN users u ON p.user_id = u.id
      WHERE p.status = "Còn hàng"
    `);

    // Chuyển dữ liệu kết quả thành một danh sách sản phẩm với các hình ảnh tương ứng
    const products = {};

    rows.forEach((row) => {
      const productId = row.product_id;
      if (!products[productId]) {
        // Tạo một mục sản phẩm mới nếu chưa tồn tại
        products[productId] = {
          id: row.product_id,
          name: row.product_name,
          description: row.description,
          price: row.price,
          unit: row.unit,
          status: row.status,
          request: row.request,
          quantity: row.quantity,
          categoryID: row.categoryID,
          category_name: row.category_name,
          user: {
            id: row.user_id,
            name: row.name,
            role: row.role,
          },
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

// Api danh sach san pham cho trang chu
app.get("/list/products", async (req, res) => {
  try {
    const [rows] = await db.execute(`
      SELECT
        p.id AS product_id,
        p.name AS product_name,
        p.description,
        p.price,
        p.unit,
        p.quantity,
        p.status,
        p.request,
        p.categoryID,
        pi.image_url,
        c.name AS category_name,
        u.name AS name,
        u.role AS role,
        u.id AS user_id
      FROM products p
      LEFT JOIN product_images pi ON p.id = pi.product_id
      LEFT JOIN categories c ON p.categoryID = c.id
      LEFT JOIN users u ON p.user_id = u.id
      WHERE p.status = "Còn hàng" AND p.request = "Đã duyệt"
    `);

    // Chuyển dữ liệu kết quả thành một danh sách sản phẩm với các hình ảnh tương ứng
    const products = {};

    rows.forEach((row) => {
      const productId = row.product_id;
      if (!products[productId]) {
        // Tạo một mục sản phẩm mới nếu chưa tồn tại
        products[productId] = {
          id: row.product_id,
          name: row.product_name,
          description: row.description,
          price: row.price,
          unit: row.unit,
          status: row.status,
          request: row.request,
          quantity: row.quantity,
          categoryID: row.categoryID,
          category_name: row.category_name,
          user: {
            id: row.user_id,
            name: row.name,
            role: row.role,
          },
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

// api lấy sản phẩm của seller
app.get("/list/products/:userId", async (req, res) => {
  const userId = req.params.userId;

  try {
    const [rows] = await db.execute(
      `
      SELECT
        p.id AS product_id,
        p.name AS product_name,
        p.description,
        p.price,
        p.unit,
        p.quantity,
        p.status,
        p.request,
        p.categoryID,
        pi.image_url,
        c.name AS category_name,
        u.name AS user_name,
        u.role AS user_role,
        u.id AS user_id
      FROM products p
      LEFT JOIN product_images pi ON p.id = pi.product_id
      LEFT JOIN categories c ON p.categoryID = c.id
      LEFT JOIN users u ON p.user_id = u.id
      WHERE u.id = ?
    `,
      [userId]
    );

    // Chuyển dữ liệu kết quả thành một danh sách sản phẩm với các hình ảnh tương ứng
    const products = {};

    rows.forEach((row) => {
      const productId = row.product_id;
      if (!products[productId]) {
        // Tạo một mục sản phẩm mới nếu chưa tồn tại
        products[productId] = {
          id: row.product_id,
          name: row.product_name,
          description: row.description,
          price: row.price,
          unit: row.unit,
          status: row.status,
          request: row.request,
          quantity: row.quantity,
          categoryID: row.categoryID,
          category_name: row.category_name,
          user: {
            name: row.user_name,
            role: row.user_role,
          },
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
    res.status(500).send("Lỗi lấy danh sách sản phẩm theo userId");
  }
});

// API tạo mới sản phẩm
app.post("/create/product", upload.array("images", 12), async (req, res) => {
  try {
    const { name, description, price, unit, quantity, categoryID, userId } =
      req.body;

    // Insert the product into the products table
    const [result] = await db.execute(
      "INSERT INTO products (name, description, price, unit, quantity, categoryID, status, request, user_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
      [
        name,
        description,
        price,
        unit,
        quantity,
        categoryID,
        "Còn hàng",
        "Đang xét duyệt",
        userId,
      ]
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

// API lấy thông tin chi tiết sản phẩm theo productId
app.get("/product/:productId", async (req, res) => {
  const productId = req.params.productId;
  try {
    const [productInfo] = await db.execute(
      "SELECT p.id, p.name, p.description, p.price, p.quantity, p.status, p.request, p.unit, pi.id AS image_id, pi.product_id, pi.image_url " +
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
        request: productInfo[0].request,
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
// app.delete("/delete/image/:productId/:imageId", async (req, res) => {
//   const productId = req.params.productId;
//   const imageId = req.params.imageId;

//   try {
//     // Lấy danh sách hình ảnh của sản phẩm dựa trên productId
//     const [productImages] = await db.execute(
//       "SELECT * FROM product_images WHERE product_id = ?",
//       [productId]
//     );

//     // Kiểm tra xem imageId có tồn tại trong danh sách hình ảnh của sản phẩm không
//     const imageToDelete = productImages.find((image) => image.id == imageId);

//     if (imageToDelete) {
//       // Xóa hình ảnh từ cơ sở dữ liệu
//       await db.execute("DELETE FROM product_images WHERE id = ?", [imageId]);

//       // Ở đây, bạn có thể viết logic để xóa tệp hình ảnh từ máy chủ thực tế
//       // Nếu bạn lưu đường dẫn tệp hình ảnh trong cơ sở dữ liệu

//       res.json({ message: "Hình ảnh đã được xóa thành công" });
//     } else {
//       res.status(404).send("Hình ảnh không tồn tại cho sản phẩm này.");
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).send("Lỗi khi xóa hình ảnh");
//   }
// });

// API chỉnh sửa thông tin sản phẩm
app.put(
  "/edit/product/:productId",
  upload.array("images", 4),
  async (req, res) => {
    const productId = req.params.productId;
    const updatedProductData = req.body;
    const images = req.files;

    try {
      await db.execute(
        "UPDATE products SET name = ?, description = ?, price = ?, quantity = ?, status = ?, request = ?, unit = ? WHERE id = ?",
        [
          updatedProductData.name,
          updatedProductData.description,
          updatedProductData.price,
          updatedProductData.quantity,
          updatedProductData.status,
          updatedProductData.request,
          updatedProductData.unit,
          productId,
        ]
      );

      // Check if there are new images, if not, do not delete and reinsert
      if (images.length > 0) {
        // Delete existing product images
        await db.execute("DELETE FROM product_images WHERE product_id = ?", [
          productId,
        ]);

        // Insert new product images
        for (let i = 0; i < images.length; i++) {
          const imageUrl = `uploads/${images[i].filename}`;
          await db.execute(
            "INSERT INTO product_images (product_id, image_url) VALUES (?, ?)",
            [productId, imageUrl]
          );
        }
      }

      res.json({ message: "Thông tin sản phẩm đã được cập nhật thành công" });
    } catch (error) {
      console.error(error);
      res.status(500).send("Lỗi khi cập nhật thông tin sản phẩm");
    }
  }
);

// API để thêm ảnh mới cho sản phẩm
// app.post(
//   "/product/:productId/image",
//   upload.single("newImage"),
//   async (req, res) => {
//     const productId = req.params.productId;
//     const newImage = req.file.path;

//     try {
//       // Thực hiện một số kiểm tra để đảm bảo rằng sản phẩm với productId tồn tại trong cơ sở dữ liệu
//       // Thêm đường dẫn của ảnh mới vào bảng product_images với productId tương ứng
//       const [result] = await db.execute(
//         "INSERT INTO product_images (product_id, image_url) VALUES (?, ?)",
//         [productId, newImage]
//       );

//       if (result.affectedRows === 1) {
//         const newImageInfo = { id: result.insertId, url: newImage };
//         res.json(newImageInfo);
//       } else {
//         res.status(500).send("Lỗi khi thêm ảnh mới");
//       }
//     } catch (error) {
//       console.error(error);
//       res.status(500).send("Lỗi khi thêm ảnh mới");
//     }
//   }
// );

// API xóa sản phẩm theo productId
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

// API tìm kiếm sản phẩm theo tên
app.get("/api/search", async (req, res) => {
  const term = req.query.term;

  try {
    const [results, fields] = await db.execute(
      "SELECT p.id, p.name, p.description, p.price, p.quantity, p.status, p.unit, MIN(pi.id) as min_image_id, pi.image_url " +
        "FROM products p " +
        "LEFT JOIN product_images pi ON p.id = pi.product_id " +
        "WHERE p.name LIKE ? AND p.status = 'Còn hàng' AND p.request = 'Đã duyệt' " +
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

// API lấy danh sách người dùng
app.get("/list/users", async (req, res) => {
  try {
    const [rows] = await db.execute("SELECT * FROM users");
    res.status(200).json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Lấy danh sách người dùng thất bại!" });
  }
});

// API lấy thông tin chi tiết người dùng
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

// API tạo mới người dùng
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
      "INSERT INTO users (name, email, password, role, image, dateJoin, status, payment_method) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
      [
        name || null,
        email || null,
        hashedPassword || null, // Save the hashed password
        role || null,
        imagePath || null,
        currentDate || null,
        "Enable",
        "Thanh toán khi nhận hàng",
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

// API chỉnh sửa người dùng theo userId
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

// API chỉnh sửa thông tin seller
app.put("/edit/seller/:userId", upload.single("image"), async (req, res) => {
  const userId = req.params.userId;
  const { name, email, address, phone, coordinates } = req.body;

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
      "UPDATE users SET name = ?, email = ?, shipping_address = ?, phone = ?, coordinates = ? WHERE id = ?",
      [name, email, address, phone, coordinates, userId]
    );

    res.status(200).json({
      message: "Cập nhật hồ sơ người bán hàng thành công!",
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

// API thêm địa chỉ giao hàng
app.post("/update-shipping-address", (req, res) => {
  const { userId, address } = req.body;
  const { province, district, ward, street, phoneNumber, coordinates } =
    address;

  const shippingAddress = `${street}, ${ward}, ${district}, ${province}.`;

  const query =
    "UPDATE users SET payment_method = ?, shipping_address = ?, phone = ?, coordinates = ? WHERE id = ?";
  const values = [
    "Thanh toán khi nhận hàng",
    shippingAddress,
    phoneNumber,
    JSON.stringify(coordinates),
    userId,
  ];

  db.execute(query, values, (error, results) => {
    if (error) {
      console.error("Error updating shipping address:", error);
      res.status(500).send("Internal Server Error");
    } else {
      console.log("Shipping address updated successfully");
      res.status(200).send("Shipping address updated successfully");
    }
  });
});

// API endpoint để xóa dữ liệu cột shipping_address
// app.post("/api/users/delete-shipping-address", async (req, res) => {
//   const userId = req.body.userId;

//   try {
//     // Thực hiện câu lệnh SQL để đặt giá trị shipping_address thành NULL
//     const [rows, fields] = await db.execute(
//       "UPDATE users SET shipping_address = NULL WHERE id = ?",
//       [userId]
//     );

//     // Gửi phản hồi về client
//     res.json({ success: true, message: "Đã xóa địa chỉ thành công" });
//   } catch (error) {
//     // Xử lý lỗi nếu có
//     console.error("Lỗi khi xóa địa chỉ:", error);
//     res.status(500).json({ success: false, message: "Lỗi khi xóa địa chỉ" });
//   }
// });

// API đặt hàng
app.post("/orders", async (req, res) => {
  try {
    const {
      userId,
      customerName,
      shippingAddress,
      paymentMethod,
      totalPrice,
      status,
      orderCode,
      items,
    } = req.body;

    // Thêm dữ liệu vào bảng orders
    const [orderResult] = await db.execute(
      "INSERT INTO orders (user_id, customer_name, shipping_address, payment_method, total_price, status, order_code) VALUES (?, ?, ?, ?, ?, ?, ?)",
      [
        userId,
        customerName,
        shippingAddress,
        paymentMethod,
        totalPrice,
        status,
        orderCode,
      ]
    );

    const orderId = orderResult.insertId;

    // Chuẩn bị dữ liệu cho bảng order_items
    const orderItemsValues = items.map((item) => [
      orderId,
      item.productId,
      item.userIdSellers,
      item.nameItem,
      item.quantity,
      item.price,
      item.unit,
    ]);

    console.log(orderItemsValues);

    // Sử dụng phương thức execute nhiều lần để thêm nhiều hàng
    for (const orderItem of orderItemsValues) {
      await db.execute(
        "INSERT INTO order_items (order_id, product_id, user_id_seller, name, quantity, price, unit) VALUES (?, ?, ?, ?, ?, ?, ?)",
        orderItem
      );

      // Giảm số lượng sản phẩm trong bảng products
      await db.execute(
        "UPDATE products SET quantity = quantity - ? WHERE id = ?",
        [orderItem[4], orderItem[1]]
      );

      // Kiểm tra nếu quantity của sản phẩm xuống 0, đặt status là 'Hết hàng'
      await db.execute(
        "UPDATE products SET status = 'Hết hàng' WHERE id = ? AND quantity = 0",
        [orderItem[1]]
      );
    }

    res.status(200).json({ success: true, orderId });
  } catch (error) {
    console.error("Error placing order:", error);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
});

// API lấy thông tin chi tiết đơn hàng
app.get("/order/:orderId/user/:userId", async (req, res) => {
  const { userId, orderId } = req.params;

  try {
    // Lấy thông tin chi tiết của đơn hàng từ bảng orders và order_items
    const [orderDetails] = await db.execute(
      "SELECT o.*, MIN(oi.id) as order_item_id, oi.product_id, p.name, oi.quantity, oi.price, oi.unit, pi.image_url AS product_image_url " +
        "FROM orders o " +
        "JOIN order_items oi ON o.id = oi.order_id " +
        "JOIN products p ON oi.product_id = p.id " +
        "JOIN product_images pi ON p.id = pi.product_id " +
        "WHERE o.id = ? AND o.user_id = ? " +
        "GROUP BY oi.product_id",
      [orderId, userId]
    );

    // Nếu không có dữ liệu trả về, đơn hàng không tồn tại hoặc không thuộc về người dùng
    if (!orderDetails.length) {
      return res.status(404).json({ error: "Order not found" });
    }

    // Tạo đối tượng chứa thông tin đơn hàng, order_items, và image_url của products
    const orderInfo = {
      order: {
        id: orderDetails[0].id,
        user_id: orderDetails[0].user_id,
        customer_name: orderDetails[0].customer_name,
        shipping_address: orderDetails[0].shipping_address,
        total_price: orderDetails[0].total_price,
        unit: orderDetails[0].unit,
        order_code: orderDetails[0].order_code,
      },
      orderItems: orderDetails.map((item) => ({
        id: item.id,
        order_id: item.order_id,
        product_id: item.product_id,
        name: item.name,
        quantity: item.quantity,
        price: item.price,
        unit: item.unit,
        product_image_url: item.product_image_url, // Thêm thông tin hình ảnh vào mỗi order item
      })),
    };

    res.status(200).json(orderInfo);
  } catch (error) {
    console.error("Error fetching order details:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// API lấy lịch sử đơn hàng
// app.get("/user/:userId/orders", async (req, res) => {
//   const { userId } = req.params;

//   try {
//     // Lấy thông tin chi tiết của đơn hàng từ bảng orders và order_items
//     const [orderDetails] = await db.execute(
//       "SELECT o.*, MIN(oi.id) as order_item_id, oi.product_id, p.name, oi.quantity, oi.price, oi.unit, pi.image_url AS product_image_url " +
//         "FROM orders o " +
//         "JOIN order_items oi ON o.id = oi.order_id " +
//         "JOIN products p ON oi.product_id = p.id " +
//         "JOIN product_images pi ON p.id = pi.product_id " +
//         "WHERE o.id = ? AND o.user_id = ? " +
//         "GROUP BY oi.product_id",
//       [userId]
//     );

//     // Nếu không có dữ liệu trả về, đơn hàng không tồn tại hoặc không thuộc về người dùng
//     if (!orderDetails.length) {
//       return res.status(404).json({ error: "Order not found" });
//     }

//     // Tạo đối tượng chứa thông tin đơn hàng, order_items, và image_url của products
//     const orderInfo = {
//       order: {
//         id: orderDetails[0].id,
//         user_id: orderDetails[0].user_id,
//         customer_name: orderDetails[0].customer_name,
//         shipping_address: orderDetails[0].shipping_address,
//         total_price: orderDetails[0].total_price,
//         unit: orderDetails[0].unit,
//         order_code: orderDetails[0].order_code,
//       },
//       orderItems: orderDetails.map((item) => ({
//         id: item.id,
//         order_id: item.order_id,
//         product_id: item.product_id,
//         name: item.name,
//         quantity: item.quantity,
//         price: item.price,
//         unit: item.unit,
//         product_image_url: item.product_image_url, // Thêm thông tin hình ảnh vào mỗi order item
//       })),
//     };

//     res.status(200).json(orderInfo);
//   } catch (error) {
//     console.error("Error fetching order details:", error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

// API lấy tất cả đơn hàng trong hệ thống
app.get("/list/orders", async (req, res) => {
  try {
    // Lấy thông tin chi tiết của đơn hàng từ bảng orders, order_items và users (để lấy tên seller)
    const [allOrders] = await db.execute(
      "SELECT o.*, u.name as seller_name, oi.product_id, p.name, oi.quantity, oi.price, oi.unit, pi.image_url AS product_image_url " +
        "FROM orders o " +
        "JOIN order_items oi ON o.id = oi.order_id " +
        "JOIN products p ON oi.product_id = p.id " +
        "JOIN product_images pi ON p.id = pi.product_id " +
        "JOIN users u ON oi.user_id_seller = u.id " +
        "GROUP BY o.id, oi.product_id " +
        "ORDER BY o.id DESC, oi.product_id ASC"
    );

    // Nếu không có dữ liệu trả về, không có đơn hàng
    if (!allOrders.length) {
      return res
        .status(404)
        .json({ message: "Không tìm thấy đơn hàng nào trong hệ thống" });
    }

    // Tạo một mảng chứa thông tin các đơn hàng
    const allOrdersInfo = [];

    for (const item of allOrders) {
      // Tìm xem đơn hàng đã được thêm vào mảng chưa
      const existingOrder = allOrdersInfo.find((order) => order.id === item.id);

      if (!existingOrder) {
        // Nếu đơn hàng chưa được thêm vào mảng, thêm vào
        allOrdersInfo.push({
          id: item.id,
          user_id: item.user_id,
          customer_name: item.customer_name,
          shipping_address: item.shipping_address,
          total_price: item.total_price,
          status: item.status,
          unit: item.unit,
          order_code: item.order_code,
          seller_name: item.seller_name, // Tên của người bán
          orderItems: [
            {
              id: item.order_item_id,
              product_id: item.product_id,
              name: item.name,
              quantity: item.quantity, // Sử dụng tổng số lượng
              price: item.price,
              unit: item.unit,
              product_image_url: item.product_image_url,
            },
          ],
        });
      } else {
        // Nếu đơn hàng đã được thêm vào mảng, thêm thông tin sản phẩm vào đơn hàng đó
        existingOrder.orderItems.push({
          id: item.order_item_id,
          product_id: item.product_id,
          name: item.name,
          quantity: item.quantity, // Sử dụng tổng số lượng
          price: item.price,
          unit: item.unit,
          product_image_url: item.product_image_url,
        });
      }
    }

    res.status(200).json(allOrdersInfo);
  } catch (error) {
    console.error("Lỗi khi lấy tất cả đơn hàng:", error);
    res.status(500).json({ error: "Lỗi Nội bộ của Server" });
  }
});

// API lấy danh sách đơn hàng User
app.get("/user/:userId/orders", async (req, res) => {
  const { userId } = req.params;

  try {
    // Lấy thông tin chi tiết của đơn hàng từ bảng orders và order_items
    const [userOrders] = await db.execute(
      "SELECT o.*, MIN(oi.id) as order_item_id, oi.product_id, p.name, oi.quantity, oi.price, oi.unit, pi.image_url AS product_image_url " +
        "FROM orders o " +
        "JOIN order_items oi ON o.id = oi.order_id " +
        "JOIN products p ON oi.product_id = p.id " +
        "JOIN product_images pi ON p.id = pi.product_id " +
        "WHERE o.user_id = ? " +
        "GROUP BY o.id, oi.product_id " + // Group by order ID and product ID to get distinct products in each order
        "ORDER BY o.id DESC",
      [userId]
    );

    // Nếu không có dữ liệu trả về, không có lịch sử đơn hàng
    if (!userOrders.length) {
      return res
        .status(404)
        .json({ message: "Không tìm thấy lịch sử đơn hàng cho người dùng" });
    }

    // Tạo một mảng chứa thông tin các đơn hàng
    const ordersInfo = userOrders.map((order) => ({
      id: order.id,
      user_id: order.user_id,
      customer_name: order.customer_name,
      shipping_address: order.shipping_address,
      total_price: order.total_price,
      unit: order.unit,
      order_code: order.order_code,
      orderItems: userOrders
        .filter((item) => item.id === order.id)
        .map((item) => ({
          id: item.order_item_id,
          order_id: item.id,
          product_id: item.product_id,
          name: item.name,
          quantity: item.quantity,
          price: item.price,
          unit: item.unit,
          product_image_url: item.product_image_url,
        })),
    }));

    res.status(200).json(ordersInfo);
  } catch (error) {
    console.error("Lỗi khi lấy lịch sử đơn hàng:", error);
    res.status(500).json({ error: "Lỗi Nội bộ của Server" });
  }
});

// API lấy danh sách đơn hàng Seller
app.get("/seller/:userId/orders", async (req, res) => {
  const { userId } = req.params;

  try {
    // Lấy thông tin chi tiết của đơn hàng từ bảng orders, order_items và users (để lấy tên seller)
    const [userOrders] = await db.execute(
      "SELECT o.*, u.name as seller_name, oi.product_id, p.name, oi.quantity, oi.price, oi.unit, pi.image_url AS product_image_url " +
        "FROM orders o " +
        "JOIN order_items oi ON o.id = oi.order_id " +
        "JOIN products p ON oi.product_id = p.id " +
        "JOIN product_images pi ON p.id = pi.product_id " +
        "JOIN users u ON oi.user_id_seller = u.id " +
        "WHERE oi.user_id_seller = ? " +
        "GROUP BY o.id, oi.product_id " +
        "ORDER BY o.id DESC, oi.product_id ASC",
      [userId]
    );

    // Nếu không có dữ liệu trả về, không có lịch sử đơn hàng
    if (!userOrders.length) {
      return res
        .status(404)
        .json({ message: "Không tìm thấy lịch sử đơn hàng cho người bán" });
    }

    // Tạo một mảng chứa thông tin các đơn hàng
    const ordersInfo = [];

    for (const item of userOrders) {
      // Tìm xem đơn hàng đã được thêm vào mảng chưa
      const existingOrder = ordersInfo.find((order) => order.id === item.id);

      if (!existingOrder) {
        // Nếu đơn hàng chưa được thêm vào mảng, thêm vào
        ordersInfo.push({
          id: item.id,
          user_id: item.user_id,
          customer_name: item.customer_name,
          shipping_address: item.shipping_address,
          total_price: item.total_price,
          status: item.status,
          unit: item.unit,
          order_code: item.order_code,
          seller_name: item.seller_name, // Tên của người bán
          orderItems: [
            {
              id: item.order_item_id,
              product_id: item.product_id,
              name: item.name,
              quantity: item.quantity, // Sử dụng tổng số lượng
              price: item.price,
              unit: item.unit,
              product_image_url: item.product_image_url,
            },
          ],
        });
      } else {
        // Nếu đơn hàng đã được thêm vào mảng, thêm thông tin sản phẩm vào đơn hàng đó
        existingOrder.orderItems.push({
          id: item.order_item_id,
          product_id: item.product_id,
          name: item.name,
          quantity: item.quantity, // Sử dụng tổng số lượng
          price: item.price,
          unit: item.unit,
          product_image_url: item.product_image_url,
        });
      }
    }

    res.status(200).json(ordersInfo);
  } catch (error) {
    console.error("Lỗi khi lấy lịch sử đơn hàng:", error);
    res.status(500).json({ error: "Lỗi Nội bộ của Server" });
  }
});

// API lấy chi tiết đơn hàng Seller
app.get("/seller/order/:orderId", async (req, res) => {
  const { orderId } = req.params;

  try {
    // Lấy thông tin chi tiết của đơn hàng từ bảng orders, order_items và users
    const [orderDetails] = await db.execute(
      "SELECT o.*, u.name as seller_name, oi.product_id, p.name, MIN(oi.quantity) as quantity, MIN(oi.price) as price, oi.unit, pi.image_url AS product_image_url " +
        "FROM orders o " +
        "JOIN order_items oi ON o.id = oi.order_id " +
        "JOIN products p ON oi.product_id = p.id " +
        "JOIN product_images pi ON p.id = pi.product_id " +
        "JOIN users u ON oi.user_id_seller = u.id " +
        "WHERE o.id = ? " +
        "GROUP BY oi.product_id " + // Use GROUP BY to get unique product_id entries
        "ORDER BY oi.product_id ASC",
      [orderId]
    );

    // Nếu không có dữ liệu trả về, không có đơn hàng
    if (!orderDetails.length) {
      return res.status(404).json({ message: "Không tìm thấy đơn hàng" });
    }

    // Tạo một đối tượng chứa thông tin của đơn hàng
    const orderInfo = {
      id: orderDetails[0].id,
      user_id: orderDetails[0].user_id,
      customer_name: orderDetails[0].customer_name,
      shipping_address: orderDetails[0].shipping_address,
      total_price: orderDetails[0].total_price,
      status: orderDetails[0].status,
      unit: orderDetails[0].unit,
      order_code: orderDetails[0].order_code,
      seller_name: orderDetails[0].seller_name, // Tên của người bán
      orderItems: orderDetails.map((item) => ({
        id: item.order_item_id,
        product_id: item.product_id,
        name: item.name,
        quantity: item.quantity,
        price: item.price,
        unit: item.unit,
        product_image_url: item.product_image_url,
      })),
    };

    res.status(200).json(orderInfo);
  } catch (error) {
    console.error("Lỗi khi lấy chi tiết đơn hàng:", error);
    res.status(500).json({ error: "Lỗi Nội bộ của Server" });
  }
});

// API chỉnh sửa trạng thái đơn hàng
app.put("/edit/order/:orderId", async (req, res) => {
  const { orderId } = req.params;
  const { status } = req.body;

  try {
    // Update the status in the orders table
    const [result] = await db.execute(
      "UPDATE orders SET status = ? WHERE id = ?",
      [status, orderId]
    );

    res
      .status(200)
      .json({ message: "Cập nhật trạng thái đơn hàng thành công!" });
  } catch (error) {
    console.error("Lỗi khi cập nhật trạng thái!:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// API để lấy tất cả sản phẩm trong danh mục theo categoryId
app.get("/all/product/category/:categoryId", async (req, res) => {
  const categoryId = req.params.categoryId;

  try {
    const [categoryDetails] = await db.execute(`
    SELECT p.id AS product_id, p.name AS product_name, p.price AS product_price, p.quantity AS product_quantity, p.status AS product_status, p.unit AS product_unit, 
           pi.image_url AS product_image_url
    FROM products p
    JOIN product_images pi ON p.id = pi.product_id
    WHERE p.categoryID = ${categoryId}
  `);

    res.status(200).json(categoryDetails);
  } catch (error) {
    console.log("Lỗi khi lấy chi tiết danh mục", error);
    res.status(500).json({ error: "Lỗi server" });
  }
});

//
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
