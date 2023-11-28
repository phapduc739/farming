import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import SellerDashboardLayout from "../../SellerDashboardLayout";
import Seedling from "../../../../assets/images/seedling.png";

function ManageProduct() {
  const [products, setProducts] = useState([]);
  const [databaseChange, setDatabaseChange] = useState(false);

  const { user, userId, email, role, accessToken } = useSelector(
    (state) => state.user
  );

  const navigate = useNavigate();

  useEffect(() => {
    // Kiểm tra nếu không có accessToken hoặc userId, chuyển hướng đến trang đăng nhập
    if (!accessToken || !userId) {
      navigate("/login/seller");
    } else if (role !== "Seller") {
      navigate("/404"); // Chuyển hướng đến trang 404 nếu role không phải là admin
    } else {
      fetchData(); // Gọi hàm fetchData khi accessToken và userId có sẵn
    }
  }, [user, userId, email, role, accessToken, databaseChange]);

  const fetchData = () => {
    axios
      .get(`http://localhost:4000/list/products/${userId}`)
      .then((response) => {
        setProducts(response.data);
        setDatabaseChange(!databaseChange);
      })
      .catch((error) => {
        console.error("Lỗi khi lấy danh sách danh mục:", error);
      });
  };

  const navigateToAddProduct = () => {
    navigate("/seller/manage-product/add-prroduct");
  };

  const navigateToEditProduct = (productId) => {
    navigate(`/seller/manage-product/edit-product/${productId}`);
  };

  const navigateToDeleteProduct = (productId) => {
    navigate(`/seller/manage-product/delete-product/${productId}`);
  };

  // Utility function to format price as Vietnamese đồng
  const formatPrice = (price) => {
    const formattedPrice = Number(price).toLocaleString("vi-VN", {
      style: "currency",
      currency: "VND",
    });

    return formattedPrice;
  };

  return (
    <>
      <SellerDashboardLayout>
        <div className="overflow-y-auto bg-backgroundLightGray p-[35px] flex flex-col gap-5 w-full h-[calc(100vh-40px)] rounded-[10px]">
          <div className="">
            <div className="title list user flex justify-between items-center">
              <h1 className="text-[18px] font-[600]">Danh sách sản phẩm</h1>
              <div className="relative btn-add flex gap-2">
                <button
                  className="bg-primaryGreen flex justify-center items-center gap-2 rounded-[4px] py-[8px] px-[14px] text-white text-[14px] hover:bg-[#08886e] transition"
                  onClick={navigateToAddProduct}
                >
                  <i className="fa-solid fa-user-plus"></i>
                  Thêm sản phẩm
                </button>
              </div>
            </div>
            <div className="flex justify-start items-center gap-1">
              <div className="w-[74px] h-[3px] bg-primaryGreen"></div>
              <img src={Seedling} alt="" />
              <div className="w-[74px] h-[3px] bg-primaryGreen"></div>
            </div>
          </div>
          <div className="btn function flex justify-between"></div>
          <div className="table ">
            <table className="min-w-full divide-y divide-gray-200 bg-white ">
              <thead className="bg-gray-50">
                <tr className="text-left text-[12px] text-textBlack">
                  <th className="p-2 uppercase">Hình ảnh</th>
                  <th className="p-2 uppercase">Tên sản phẩm</th>
                  <th className="p-2 uppercase">Giá</th>
                  <th className="p-2 uppercase">Số lượng</th>
                  <th className="p-2 uppercase">Đơn vị tính</th>
                  <th className="p-2 uppercase">Trạng thái</th>
                  <th className="p-2 uppercase">Yêu cầu</th>
                  <th className="p-2 uppercase">Hành động</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {products
                  .sort((a, b) => b.id - a.id) // Sắp xếp theo id tăng dần
                  .map((row) => (
                    <tr key={row.id} className="text-[14px] text-textBlack">
                      <td className="p-2 flex justify-start items-center gap-2">
                        <div className="w-[50px] h-[50px]">
                          <img
                            className="object-cover rounded-[50%]"
                            src={`http://localhost:4000/${row.images[0]}`}
                            alt=""
                          />
                        </div>
                      </td>
                      <td className="p-2">{row.name}</td>
                      <td className="p-2">{formatPrice(row.price)}</td>
                      <td className="p-2">{row.quantity}</td>
                      <td className="p-2">{row.unit}</td>
                      <td
                        className={`p-2 ${
                          row.status === "Còn hàng"
                            ? "text-green-500 font-semibold"
                            : "text-red-500 font-semibold"
                        }`}
                      >
                        {row.status}
                      </td>
                      <td
                        className={`p-2 ${
                          row.request === "Đang xét duyệt"
                            ? "text-yellow font-semibold"
                            : row.request === "Đã duyệt"
                            ? "text-green-500 font-semibold"
                            : "text-red-500 font-semibold"
                        }`}
                      >
                        {row.request}
                      </td>

                      <td className="p-2">
                        <button
                          className="mr-2"
                          onClick={() => navigateToEditProduct(row.id)}
                        >
                          <i className="fa-regular fa-pen-to-square"></i>
                        </button>

                        <button onClick={() => navigateToDeleteProduct(row.id)}>
                          <i className="fa-regular fa-trash-can"></i>
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </SellerDashboardLayout>
    </>
  );
}

export default ManageProduct;
