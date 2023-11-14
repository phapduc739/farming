import { Routes, Route } from "react-router-dom";
import CreateProduct from "./pages/CreateProduct";
import ProductList from "./pages/ProductList";
import EditProduct from "./pages/EditProduct";
import DeleteProduct from "./pages/DeleteProduct";
import CreateCategory from "./pages/CreateCategory";
import EditCategory from "./pages/EditCategory";
import Login from "./components/Login";
import UserInfo from "./components/UserInfo";
import Register from "./components/Register";
import LoginAdmin from "./pages/admin/LoginAdmin";
import AdminDashboard from "./pages/admin/AdminDashboard";
import ManageUser from "./pages/admin/ManageCategory";
import ManageCategory from "./pages/admin/ManageCategory";
import ManageProduct from "./pages/admin/ManageProduct";
import ManageOrder from "./pages/admin/ManageOrder";

function App() {
  return (
    <Routes>
      <Route path="/login/admin" element={<LoginAdmin />} />
      <Route path="/admin/dashboard" element={<AdminDashboard />} />
      <Route path="/manage/users" element={<ManageUser />} />
      <Route path="/manage/categories" element={<ManageCategory />} />
      <Route path="/manage/products" element={<ManageProduct />} />
      <Route path="/manage/orders" element={<ManageOrder />} />

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
