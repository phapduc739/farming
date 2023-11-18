import { useState, useEffect } from "react";
import DeleteCategoryModal from "./DeleteUserModal";
import AddCategoryModal from "./AddCategoryModal";
import FilterUser from "./FilterUser";
import EditCategoryModal from "./EditCategoryModal";
import axios from "axios";

import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../actions/adminActions";
import { useNavigate, Link } from "react-router-dom";
import Logo from "../../assets/images/Logo.png";
import LogoAdmin from "../../assets/images/Logo-Admin.jpg";

function ManageCategory() {
  const [selectAll, setSelectAll] = useState(false);
  const [checkboxStates, setCheckboxStates] = useState({});
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const [databaseChange, setDatabaseChange] = useState(false);

  const { admin, email, accessToken, adminId } = useSelector(
    (state) => state.admin
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    // Kiểm tra nếu không có accessToken hoặc userId, chuyển hướng đến trang đăng nhập
    if (!accessToken || !adminId) {
      navigate("/login/admin");
    } else {
      fetchData();
    }
  }, [accessToken, adminId, email, navigate]);

  const handleLogout = () => {
    // Xóa accessToken, userId và refreshToken khỏi localStorage
    localStorage.removeItem("accessToken");
    localStorage.removeItem("adminId");
    localStorage.removeItem("email");
    localStorage.removeItem("refreshToken");

    // Dispatch action đăng xuất
    dispatch(logout());

    // Chuyển hướng đến trang đăng nhập
    navigate("/login/admin");
  };

  const fetchData = () => {
    axios
      .get("http://localhost:4000/list/categories")
      .then((response) => {
        setCategories(response.data);
        setDatabaseChange(!databaseChange);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Lỗi khi lấy danh sách danh mục:", error);
      });
  };

  const handleEditCategory = (categoryId) => {
    setSelectedCategoryId(categoryId);
    setDatabaseChange(!databaseChange);
  };

  const handleCloseModal = () => {
    setSelectedCategoryId(null);
    setDatabaseChange(!databaseChange);
  };

  const handleCheckboxChange = (event, name) => {
    const { checked } = event.target;
    setCheckboxStates((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };

  const handleSelectAllChange = (event) => {
    const { checked } = event.target;
    setSelectAll(checked);
    const newCheckboxStates = {};
    for (const row of categories) {
      newCheckboxStates[row.name] = checked;
    }
    setCheckboxStates(newCheckboxStates);
  };

  const handleDeleteUser = (categoryId) => {
    // Gọi API để xóa danh mục tương ứng với categoryId
    axios
      .delete(`http://localhost:4000/delete/categories/${categoryId}`)
      .then((response) => {
        console.log("Xóa danh mục thành công");
        setDeleteModalOpen(false);
        setDatabaseChange(!databaseChange);
      })
      .catch((error) => {
        console.error("Lỗi khi xóa danh mục:", error);
      });
  };

  const onDelete = (categoryId) => {
    setDeleteModalOpen(true);
    setSelectedCategoryId(categoryId);
  };

  const isAllChecked = Object.values(checkboxStates).every(Boolean);

  return (
    <>
      <div className="header fixed top-0 left-0 flex w-full h-[60px] border-b-[1px]">
        <div className="logo flex justify-between items-center w-[260px] px-[12px]">
          <div className="flex justify-start items-center gap-2">
            <img className="w-[30px] h-[30px]" src={Logo} alt="" />
            <h1 className="text-[18px] text-primaryGreen font-bold">
              Admin<span className="text-textBlack">Dashboard</span>
            </h1>
          </div>
          <i className="fa-solid fa-bars"></i>
        </div>
        <div className="links-icon flex flex-1 justify-end items-center px-3">
          <div className="flex justify-center items-center gap-8 text-lightGray">
            <div className="">
              <i className="fa-regular fa-bell"></i>
            </div>
            <div className="">
              <i className="fa-solid fa-sliders"></i>
            </div>
            <div className="flex justify-center items-center gap-2">
              <div className="w-[30px] h-[30px] object-cover rounded-[50%]">
                <img
                  className="w-[30px] h-[30px] rounded-[50%]"
                  src={LogoAdmin}
                  alt=""
                />
              </div>
              <p className="text-[12px] text-textBlack font-bold">Admin</p>
              <i className="fa-solid fa-angle-down"></i>
            </div>
          </div>
        </div>
      </div>

      <div className="main-body fixed top-[60px] flex w-full h-[calc(100vh-60px)] bg-lightGray">
        <div className="sidebar w-[260px] h-full bg-white px-3 py-3 border-r">
          <ul className="menu flex flex-col gap-2">
            <li className="item w-full bg-white rounded-r-[50px] text-[14px] text-textGray font-medium">
              <Link
                className="flex justify-start items-center gap-3 px-3 py-3"
                to="/admin/dashboard"
              >
                <i className="fa-solid fa-table-cells-large"></i>
                Dashboard
              </Link>
            </li>
            <li className="item w-full bg-white rounded-r-[50px] text-[14px] text-textGray font-medium">
              <Link
                className="py-3 flex justify-start items-center gap-3 px-3"
                to="/manage/users"
              >
                <i className="fa-regular fa-user"></i>
                Người dùng
              </Link>
            </li>
            <li className="item active w-full  bg-lightGreen rounded-r-[50px] text-[14px] text-primaryGreen font-bold">
              <Link
                className="py-3 flex justify-start items-center gap-3 px-3"
                to="/manage/categories"
              >
                <i className="fa-solid fa-list"></i>
                Danh mục
              </Link>
            </li>
            <li className="item w-full bg-white rounded-r-[50px] text-[14px] text-textGray font-medium">
              <Link
                className="py-3 flex justify-start items-center gap-3 px-3"
                to="/manage/products"
              >
                <i className="fa-solid fa-boxes-stacked"></i>Sản phẩm
              </Link>
            </li>
            <li className="item w-full bg-white rounded-r-[50px] text-[14px] text-textGray font-medium">
              <Link
                className="py-3 flex justify-start items-center gap-3 px-3"
                to="/manage/orders"
              >
                <i className="fa-solid fa-dolly"></i>
                Đơn hàng
              </Link>
            </li>
            <li className="item w-full bg-white rounded-r-[50px] text-[14px] text-textGray font-medium">
              <Link
                className="py-3 flex justify-start items-center gap-3 px-3"
                to="/statistics"
              >
                <i className="fa-solid fa-chart-line"></i>
                Thống kê
              </Link>
            </li>
            <button onClick={handleLogout}>Đăng xuất</button>
          </ul>
        </div>
        <div className="content w-full">
          <div className="overflow-y-auto bg-white p-[20px] flex flex-col gap-5 w-full h-[calc(100vh-40px)]">
            <div className="title list user">
              <h1 className="text-[18px] font-[600]">Danh sách danh mục</h1>
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
                <FilterUser />
                <AddCategoryModal
                  isOpen={addModalOpen}
                  onClose={() => setAddModalOpen(false)}
                  onUpdateCategories={fetchData} // Truyền hàm cập nhật xuống AddCategoryModal
                />
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
                    <th className="p-2 uppercase">Danh mục</th>
                    <th className="p-2 uppercase">Số lượng sản phẩm</th>
                    <th className="p-2 uppercase">Ngày tạo</th>
                    <th className="p-2 uppercase">Hành động</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {categories.map((row) => (
                    <tr key={row.id} className="text-[14px] text-textBlack">
                      <td className="p-2">
                        <input
                          type="checkbox"
                          checked={checkboxStates[row.name] || false}
                          onChange={(event) =>
                            handleCheckboxChange(event, row.name)
                          }
                        />
                      </td>
                      <td className="p-2 flex justify-start items-center gap-2">
                        <div className="w-[50px] h-[50px]">
                          <img
                            className="object-cover rounded-[50%]"
                            src={`http://localhost:4000/${row.image}`}
                            alt=""
                          />
                        </div>
                        <div className="flex flex-col gap-[5px]">
                          <h3 className="font-[600]">{row.name}</h3>
                          <h3 className="font-[500]">{row.description}</h3>
                        </div>
                      </td>
                      <td className="p-2">{row.quantity}</td>
                      <td className="p-2">{row.createAt}</td>
                      <td className="p-2">
                        <button
                          className="mr-2"
                          onClick={() => handleEditCategory(row.id)}
                        >
                          <i className="fa-regular fa-pen-to-square"></i>
                        </button>
                        {selectedCategoryId === row.id && (
                          <EditCategoryModal
                            categoryId={row.id}
                            onUpdateCategories={fetchData}
                            onClose={handleCloseModal}
                          />
                        )}
                        <button onClick={() => onDelete(row.id)}>
                          <i className="fa-regular fa-trash-can"></i>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
                <DeleteCategoryModal
                  isOpen={deleteModalOpen}
                  onClose={() => setDeleteModalOpen(false)}
                  onDelete={() => handleDeleteUser(selectedCategoryId)}
                />
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ManageCategory;
