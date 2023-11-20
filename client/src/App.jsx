import { Routes, Route } from "react-router-dom";
import CreateProduct from "./pages/CreateProduct";
import ProductList from "./pages/ProductList";
import EditProduct from "./pages/admin/EditProduct";
import DeleteProduct from "./pages/admin/DeleteProduct";
import CreateCategory from "./pages/CreateCategory";
import Login from "./components/Login";
import UserInfo from "./components/UserInfo";
import Register from "./components/Register";
import LoginAdmin from "./pages/admin/LoginAdmin";
import ManageUser from "./pages/admin/ManageUser";
import ManageCategory from "./pages/admin/ManageCategory";
import ManageProduct from "./pages/admin/ManageProduct";
import ManageOrder from "./pages/admin/ManageOrder";
import AdminDashboardLayout from "./pages/admin/AdminDashboardLayout";
import AddCategory from "./pages/admin/AddCategory";
import EditCategory from "./pages/admin/EditCategory";
import DeleteCategory from "./pages/admin/DeleteCategory";
import AddUser from "./pages/admin/AddUser";
import EditUser from "./pages/admin/EditUser";
import DeleteUser from "./pages/admin/DeleteUser";
import AddProduct from "./pages/admin/AddProduct";

function App() {
  return (
    <Routes>
      {/* tuyến đường phía Admin */}
      <Route path="/login/admin" element={<LoginAdmin />} />
      <Route path="/admin/dashboard" element={<AdminDashboardLayout />} />

      {/* Tuyến đường quản lý người dùng */}
      <Route path="/manage/users" element={<ManageUser />} />
      <Route path="/manage/users/add-user" element={<AddUser />} />
      <Route path="/manage/users/edit-user/:userId" element={<EditUser />} />
      <Route
        path="/manage/users/delete-user/:userId"
        element={<DeleteUser />}
      />

      {/* Tuyến đường quản lý danh mục */}
      <Route path="/manage/categories" element={<ManageCategory />} />
      <Route path="/manage/categories/add-category" element={<AddCategory />} />
      <Route
        path="/manage/categories/edit-category/:categoryId"
        element={<EditCategory />}
      />
      <Route
        path="/manage/categories/delete-category/:categoryId"
        element={<DeleteCategory />}
      />

      {/* Tuyến đường quản lý sản phẩm */}
      <Route path="/manage/products" element={<ManageProduct />} />
      <Route path="/manage/products/add-product" element={<AddProduct />} />
      <Route
        path="/manage/products/edit-product/:productId"
        element={<EditProduct />}
      />
      <Route
        path="/manage/products/delete-product/:productId"
        element={<DeleteProduct />}
      />

      {/* Tuyến đường quản lý đơn hàng */}
      <Route path="/manage/orders" element={<ManageOrder />} />

      {/* tuyến đường phía User */}
      <Route path="/register/user" element={<Register />} />
      <Route path="/login/user" element={<Login />} />
      <Route path="/user/info" element={<UserInfo />} />

      <Route path="/create/category" element={<CreateCategory />} />
      <Route path="/edit/category/:categoryId" element={<EditCategory />} />

      <Route path="/create/product" element={<CreateProduct />} />
      <Route path="/edit/product/:productId" element={<EditProduct />} />
      <Route path="/delete/product/:id" element={<DeleteProduct />} />
      <Route path="/list/product" element={<ProductList />} />
      <Route path="/" element={<ProductList />} />
    </Routes>
  );
}

export default App;
