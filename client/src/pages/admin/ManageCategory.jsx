import { useState, useEffect } from "react";
import FilterUser from "./FilterUser";
import axios from "axios";
import { useSelector } from "react-redux";
// import { logout } from "../../actions/adminActions";
import { useNavigate } from "react-router-dom";
import AdminDashboardLayout from "./AdminDashboardLayout";
import { format } from "date-fns";

function ManageCategory() {
  const [selectAll, setSelectAll] = useState(false);
  const [checkboxStates, setCheckboxStates] = useState({});
  const [categories, setCategories] = useState([]);
  const [databaseChange, setDatabaseChange] = useState(false);

  const { admin, email, accessToken, adminId } = useSelector(
    (state) => state.admin
  );
  // const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    // Kiểm tra nếu không có accessToken hoặc userId, chuyển hướng đến trang đăng nhập
    if (!accessToken || !adminId) {
      navigate("/login/admin");
    } else {
      fetchData();
    }
  }, [accessToken, adminId, email, navigate]);

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

  const fetchData = (filters) => {
    // Xử lý gọi API với các giá trị bộ lọc
    axios
      .get("http://localhost:4000/list/categories", {
        params: filters,
      })
      .then((response) => {
        setCategories(response.data);
        setDatabaseChange(!databaseChange);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Lỗi khi lấy danh sách danh mục:", error);
      });
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

  const isAllChecked = Object.values(checkboxStates).every(Boolean);

  const navigateToAddCategory = () => {
    navigate("/manage/categories/add-category");
  };

  const navigateToEditCategory = (categoryId) => {
    navigate(`/manage/categories/edit-category/${categoryId}`);
  };

  const navigateToDeleteCategory = (categoryId) => {
    navigate(`/manage/categories/delete-category/${categoryId}`);
  };

  return (
    <>
      <AdminDashboardLayout>
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
              {/* <FilterUser onFilterChange={handleFilterChange} />{" "} */}
              <button
                className="bg-primaryGreen flex justify-center items-center gap-2 rounded-[4px] py-[8px] px-[14px] text-white text-[14px] hover:bg-[#08886e] transition"
                onClick={navigateToAddCategory}
              >
                <i className="fa-solid fa-user-plus"></i>
                Thêm danh mục
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
                    <td className="p-2">
                      {format(new Date(row.createAt), "dd/MM/yyyy")}
                    </td>{" "}
                    <td className="p-2">
                      <button
                        className="mr-2"
                        onClick={() => navigateToEditCategory(row.id)}
                      >
                        <i className="fa-regular fa-pen-to-square"></i>
                      </button>

                      <button onClick={() => navigateToDeleteCategory(row.id)}>
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

export default ManageCategory;
