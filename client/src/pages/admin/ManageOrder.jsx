import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import AdminDashboardLayout from "./AdminDashboardLayout";

function ManageOrder() {
  const [selectAll, setSelectAll] = useState(false);
  const [checkboxStates, setCheckboxStates] = useState({});
  const [orders, setOrders] = useState([]);
  const [databaseChange, setDatabaseChange] = useState(false);

  const { user, userId, email, role, accessToken } = useSelector(
    (state) => state.user
  );

  const navigate = useNavigate();

  useEffect(() => {
    // Kiểm tra nếu không có accessToken hoặc userId, chuyển hướng đến trang đăng nhập
    if (!accessToken || !userId) {
      navigate("/login/admin");
    } else if (role !== "Admin") {
      navigate("/404"); // Chuyển hướng đến trang 404 nếu role không phải là admin
    } else {
      fetchData(); // Gọi hàm fetchData khi accessToken và userId có sẵn
    }
  }, [user, userId, email, role, accessToken, databaseChange]);

  const fetchData = () => {
    axios
      .get("http://localhost:4000/list/orders")
      .then((response) => {
        setOrders(response.data);
        setDatabaseChange(!databaseChange);
      })
      .catch((error) => {
        console.error("Lỗi khi lấy danh sách danh mục:", error);
      });
  };

  const handleCheckboxChange = (event, userId) => {
    const { checked } = event.target;
    setCheckboxStates((prevState) => ({
      ...prevState,
      [userId]: checked,
    }));
  };

  const handleSelectAllChange = (event) => {
    const { checked } = event.target;
    setSelectAll(checked);
    const newCheckboxStates = {};
    for (const row of orders) {
      newCheckboxStates[row.id] = checked;
    }
    setCheckboxStates(newCheckboxStates);
  };

  const isAllChecked = Object.values(checkboxStates).every(Boolean);

  // const navigateToAddUser = () => {
  //   navigate("/manage/products/add-product");
  // };

  const navigateToEditUser = (productId) => {
    navigate(`/manage/products/edit-product/${productId}`);
  };

  const navigateToDeleteUser = (productId) => {
    navigate(`/manage/products/delete-product/${productId}`);
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
      <AdminDashboardLayout>
        <div className="overflow-y-auto bg-white p-[20px] flex flex-col gap-5 w-full h-[calc(100vh-40px)]">
          <div className="title list user">
            <h1 className="text-[18px] font-[600]">Danh sách đơn hàng</h1>
          </div>
          <div className="btn function flex justify-between">
            <div className="search flex justify-start items-center gap-2 px-6 py-2 bg-[#f9f9f9] hover:bg-[#ededed] text-lightGray font-medium text-[12px] rounded-[4px]">
              <input
                className="bg-transparent outline-none"
                type="text"
                placeholder="Tìm kiếm..."
              />
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
            <div className="relative btn-add flex gap-2">
              {/* <button
                className="bg-primaryGreen flex justify-center items-center gap-2 rounded-[4px] py-[8px] px-[14px] text-white text-[14px] hover:bg-[#08886e] transition"
                onClick={navigateToAddUser}
              >
                <i className="fa-solid fa-user-plus"></i>
                Thêm sản phẩm
              </button> */}
            </div>
          </div>
          <div className="table ">
            <table className="min-w-full divide-y divide-gray-200 ">
              <thead className="bg-gray-50">
                <tr className="text-left text-[12px] text-textBlack">
                  <th className="p-2">
                    <input
                      type="checkbox"
                      checked={isAllChecked}
                      onChange={handleSelectAllChange}
                    />
                  </th>
                  <th className="p-2 uppercase">Người bán</th>
                  <th className="p-2 uppercase">Khách hàng</th>
                  <th className="p-2 uppercase">Mã đơn hàng</th>
                  <th className="p-2 uppercase">Sản phẩm</th>
                  <th className="p-2 uppercase">Tổng tiền</th>
                  <th className="p-2 uppercase">Trạng thái</th>
                  {/* <th className="p-2 uppercase">Hành động</th> */}
                </tr>
              </thead>
              <tbody className="bg-white  divide-y divide-gray-200">
                {orders
                  .sort((a, b) => b.id - a.id) // Sắp xếp theo id tăng dần
                  .map((order) => (
                    <tr
                      key={order.id}
                      className={`text-[14px] text-textBlack ${
                        order.status === "Đang xử lý" ? "bg-amber-100" : ""
                      } ${
                        order.status === "Đã giao cho shipper" ? "bg-white" : ""
                      } ${order.status === "Đã hủy" ? "bg-red-100" : ""}`}
                    >
                      <td className="p-2">
                        <input
                          type="checkbox"
                          checked={checkboxStates[order.id] || false}
                          onChange={(event) =>
                            handleCheckboxChange(event, order.id)
                          }
                        />
                      </td>
                      <td className="p-2">{order.seller_name}</td>
                      <td className="p-2">{order.customer_name}</td>
                      <td className="p-2">{order.order_code}</td>
                      <td className="p-2">
                        {order.orderItems.map((item) => (
                          <div
                            key={item.id}
                            className="flex items-center gap-2"
                          >
                            <div className="w-[50px] h-[50px]">
                              <img
                                className="object-cover rounded-[50%]"
                                src={`http://localhost:4000/${item.product_image_url}`}
                                alt=""
                              />
                            </div>
                            <span>
                              {item.name} x {item.quantity} {item.unit}
                            </span>
                          </div>
                        ))}
                      </td>{" "}
                      <td className="p-2">{formatPrice(order.total_price)}</td>
                      <td
                        className={`p-2 ${
                          order.status === "Đã giao cho shipper"
                            ? "text-green-500 font-semibold"
                            : order.status === "Đang xử lý"
                            ? "text-yellow font-semibold"
                            : "text-red-500 font-semibold"
                        }`}
                      >
                        {order.status}
                      </td>
                      {/* <td className="p-2">
                        <button
                          className="mr-2"
                          onClick={() => navigateToEditUser(order.id)}
                        >
                          <i className="fa-regular fa-pen-to-square"></i>
                        </button>

                        <button onClick={() => navigateToDeleteUser(order.id)}>
                          <i className="fa-regular fa-trash-can"></i>
                        </button>
                      </td> */}
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </AdminDashboardLayout>
    </>
  );
}

export default ManageOrder;
