import { Routes, Route } from "react-router-dom";
import AdminDashboardLayout from "./AdminDashboardLayout";
import ManageUser from "./ManageUser";
import ManageCategory from "./ManageCategory";
import ManageProduct from "./ManageProduct";
import ManageOrder from "./ManageOrder";

function AdminDashboard() {
  return (
    <AdminDashboardLayout>
      <Routes>
        <Route index element={<p>Dashboard Content</p>} />
        <Route path="/users" element={<ManageUser />} />
        <Route path="categories" element={<ManageCategory />} />
        <Route path="products" element={<ManageProduct />} />
        <Route path="orders" element={<ManageOrder />} />
      </Routes>
    </AdminDashboardLayout>
  );
}

export default AdminDashboard;
