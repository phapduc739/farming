import { useState, useEffect } from "react";
import FilterUser from "./FilterUser";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import AdminDashboardLayout from "./AdminDashboardLayout";

function ManageProduct() {
  const [selectAll, setSelectAll] = useState(false);
  const [checkboxStates, setCheckboxStates] = useState({});
  const [products, setProducts] = useState([]);
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

  // const handleLogout = () => {
  //   // Xóa accessToken, userId và refreshToken khỏi localStorage
  //   localStorage.removeItem("accessToken");
  //   localStorage.removeItem("adminId");
  //   localStorage.removeItem("email");
  //   localStorage.removeItem("refreshToken");

  //   // Dispatch action đăng xuất
  //   dispatch(logout());

  //   // Chuyển hướng đến trang đăng nhập
  //   navigate("/login/admin");
  // };

  const handleFilterChange = (filters) => {
    setProducts([]);
    fetchData(filters);
  };

  const fetchData = () => {
    axios
      .get("http://localhost:4000/list/products")
      .then((response) => {
        setProducts(response.data);
        setDatabaseChange(!databaseChange);
        console.log(response.data);
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
    for (const row of products) {
      newCheckboxStates[row.id] = checked;
    }
    setCheckboxStates(newCheckboxStates);
  };

  const isAllChecked = Object.values(checkboxStates).every(Boolean);

  const navigateToAddUser = () => {
    navigate("/manage/products/add-product");
  };

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
            <h1 className="text-[18px] font-[600]">Danh sách sản phẩm</h1>
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
              <FilterUser onFilterChange={handleFilterChange} />{" "}
              <button
                className="bg-primaryGreen flex justify-center items-center gap-2 rounded-[4px] py-[8px] px-[14px] text-white text-[14px] hover:bg-[#08886e] transition"
                onClick={navigateToAddUser}
              >
                <i className="fa-solid fa-user-plus"></i>
                Thêm sản phẩm
              </button>
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
                  <th className="p-2 uppercase">Sản phẩm</th>
                  <th className="p-2 uppercase">Mã sản phẩm</th>
                  <th className="p-2 uppercase">Giá</th>
                  <th className="p-2 uppercase">Số lượng</th>
                  <th className="p-2 uppercase">Đơn vị tính</th>
                  <th className="p-2 uppercase">Trạng thái</th>
                  <th className="p-2 uppercase">Hành động</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {products.map((row) => (
                  <tr key={row.id} className="text-[14px] text-textBlack">
                    <td className="p-2">
                      <input
                        type="checkbox"
                        checked={checkboxStates[row.id] || false}
                        onChange={(event) =>
                          handleCheckboxChange(event, row.id)
                        }
                      />
                    </td>
                    <td className="p-2 flex justify-start items-center gap-2">
                      <div className="w-[50px] h-[50px]">
                        <img
                          className="object-cover rounded-[50%]"
                          src={`http://localhost:4000/${row.images[0]}`}
                          alt=""
                        />
                      </div>
                      <div className="flex flex-col gap-[5px]">
                        <h3 className="font-[600]">{row.name}</h3>
                      </div>
                    </td>
                    <td className="p-2">{row.id}</td>
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
                    <td className="p-2">
                      <button
                        className="mr-2"
                        onClick={() => navigateToEditUser(row.id)}
                      >
                        <i className="fa-regular fa-pen-to-square"></i>
                      </button>

                      <button onClick={() => navigateToDeleteUser(row.id)}>
                        <i className="fa-regular fa-trash-can"></i>
                      </button>
                    </td>
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

export default ManageProduct;
