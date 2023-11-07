import { Routes, Route } from "react-router-dom";
import CreateProduct from "./pages/CreateProduct";
import ProductList from "./pages/ProductList";
import EditProduct from "./pages/EditProduct";
import DeleteProduct from "./pages/DeleteProduct";
import CreateCategory from "./pages/CreateCategory";
import EditCategory from "./pages/EditCategory";
import Login from "./components/Login";
import UserInfo from "./components/UserInfo";

function App() {
  return (
    <Routes>
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
