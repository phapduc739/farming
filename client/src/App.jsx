import { Routes, Route } from "react-router-dom";
import CreateProduct from "./pages/CreateProduct";
import ProductList from "./pages/ProductList";
import EditProduct from "./pages/EditProduct";
import DeleteProduct from "./pages/DeleteProduct";
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

function App() {
  return (
    <Routes>
      {/* tuyến đường admin */}
      <Route path="/login/admin" element={<LoginAdmin />} />
      <Route path="/admin/dashboard" element={<AdminDashboardLayout />} />
      <Route path="/manage/users" element={<ManageUser />} />
      <Route path="/manage/users/add-user" element={<AddUser />} />

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
      <Route path="/manage/products" element={<ManageProduct />} />
      <Route path="/manage/orders" element={<ManageOrder />} />

      {/* tuyến đường user */}
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
