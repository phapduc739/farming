import { Routes, Route } from "react-router-dom";
import EditProduct from "./pages/admin/EditProduct";
import DeleteProduct from "./pages/admin/DeleteProduct";
import Login from "./pages/user/Login";
import UserInfo from "./pages/user/ProfileUser";
import Register from "./pages/user/Register";
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
import Home from "./pages/user/Home";
// import CartItem from "./pages/user/components/CartItem";
import ShoppingCart from "./pages/user/ShoppingCart";
import Page404 from "./pages/user/Page404";
import Checkout from "./pages/user/Checkout";
import OrderSuccess from "./pages/user/OrderSuccess";
import SellerDashboard from "./pages/seller/SellerDashboard";
import Faq from "./pages/seller/Faq";
import Intro from "./pages/seller/Intro";
import Contact from "./pages/seller/Contact";
import SellerDetail from "./pages/seller/SellerDetail";
import ProductDetail from "./pages/seller/ProductDetail";
import Product from "./pages/seller/components/SellerDetail/Product";
import LoginSeller from "./pages/seller/LoginSeller";
import RegisterSeller from "./pages/seller/RegisterSeller";
import SellerDashboardLayout from "./pages/seller/SellerDashboardLayout";
import SellerManageProduct from "./pages/seller/components/CRUD Product/ManageProduct";
import SellerAddProduct from "./pages/seller/components/CRUD Product/AddProduct";
import SellerEditProduct from "./pages/seller/components/CRUD Product/EditProduct";
import SellerDeleteProduct from "./pages/seller/components/CRUD Product/DeleteProduct";
import SellerProfile from "./pages/seller/ProfileSeller";
import SellerEditProfile from "./pages/seller/EditProfileSeller";
import SellerManageOrder from "./pages/seller/components/CRUD Order/ManageOrder";
import SellerEditOrder from "./pages/seller/components/CRUD Order/EditOrder";
import BankTransfer from "./pages/user/BankTransfer";

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

      {/*  */}
      {/* Tuyến đường của người bán */}
      <Route path="/register/seller" element={<RegisterSeller />} />
      <Route path="/login/seller" element={<LoginSeller />} />
      <Route path="/seller-dashboard" element={<SellerDashboardLayout />} />
      <Route path="/seller/profile" element={<SellerProfile />} />
      <Route
        path="/seller/edit-profile/:userId"
        element={<SellerEditProfile />}
      />
      <Route path="/seller/manage-product" element={<SellerManageProduct />} />
      <Route
        path="/seller/manage-product/add-prroduct"
        element={<SellerAddProduct />}
      />
      <Route
        path="/seller/manage-product/edit-product/:productId"
        element={<SellerEditProduct />}
      />
      <Route
        path="/seller/manage-product/delete-product/:productId"
        element={<SellerDeleteProduct />}
      />
      <Route path="/seller/manage-order" element={<SellerManageOrder />} />
      <Route
        path="/seller/manage-order/edit-order/:orderId"
        element={<SellerEditOrder />}
      />

      <Route path="/product/:id" element={<Product />} />
      {/* <Route path="/seller-dashboard" element={<SellerDashboard />} /> */}
      <Route path="/filter-product/:id" element={<SellerDetail />} />
      <Route path="/product-detail/:id" element={<ProductDetail />} />
      <Route path="/manage/orders" element={<ManageOrder />} />

      {/* Tuyến đường phía User */}
      <Route path="/register/user" element={<Register />} />
      <Route path="/login/user" element={<Login />} />
      <Route path="/profile/user/:userId" element={<UserInfo />} />
      <Route path="/cart" element={<ShoppingCart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/order-success/:orderId" element={<OrderSuccess />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="/intro" element={<Intro />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/bankTransfer" element={<BankTransfer />} />
      {/* Tuyến đường mặc định cho trang không tìm thấy */}
      <Route path="/404" element={<Page404 />} />

      {/* Tuyến đường mặc định khi không tìm thấy */}
      {/* <Route path="*" element={<Navigate to="/404" />} /> */}

      {/*  */}
      <Route path="/edit/category/:categoryId" element={<EditCategory />} />
      <Route path="/edit/product/:productId" element={<EditProduct />} />
      <Route path="/delete/product/:id" element={<DeleteProduct />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
