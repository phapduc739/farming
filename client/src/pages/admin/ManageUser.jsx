import { useState } from "react";
import DeleteUserModal from "./DeleteUserModal";
import PopupAddUser from "./AddUserModal";
import FilterUser from "./FilterUser";

function ManageUser() {
  const [selectAll, setSelectAll] = useState(false);
  const [checkboxStates, setCheckboxStates] = useState({});

  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const [addModalOpen, setAddModalOpen] = useState(false);

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
    for (const row of data) {
      newCheckboxStates[row.name] = checked;
    }
    setCheckboxStates(newCheckboxStates);
  };

  const handleAddUser = () => {
    console.log("Thêm thành công");
    setAddModalOpen(false);
  };

  const handleDeleteUser = () => {
    // Xóa người dùng tại đây
    console.log("Xóa người dùng:", selectedUser);
    setDeleteModalOpen(false);
  };

  const data = [
    {
      id: 1,
      avatar: "../../src/assets/images/avatar-user.jpg",
      name: "John",
      email: "john@gmail.com",
      role: "Admin",
      status: "Active",
      lastLogin: "2023-11-10",
      joinDay: "2023-01-15",
    },
    {
      id: 2,
      avatar: "../../src/assets/images/avatar-user.jpg",
      name: "Jane",
      email: "jane@gmail.com",
      role: "User",
      status: "Block",
      lastLogin: "2023-11-09",
      joinDay: "2023-02-20",
    },
    {
      id: 3,
      avatar: "../../src/assets/images/avatar-user.jpg",
      name: "Alice",
      email: "alice@gmail.com",
      role: "User",
      status: "Active",
      lastLogin: "2023-11-12",
      joinDay: "2023-03-05",
    },
    {
      id: 4,
      avatar: "../../src/assets/images/avatar-user.jpg",
      name: "Bob",
      email: "bob@gmail.com",
      role: "User",
      status: "Active",
      lastLogin: "2023-11-11",
      joinDay: "2023-04-10",
    },
    {
      id: 5,
      avatar: "../../src/assets/images/avatar-user.jpg",
      name: "Alice",
      email: "alice@gmail.com",
      role: "User",
      status: "Active",
      lastLogin: "2023-11-12",
      joinDay: "2023-03-05",
    },
    {
      id: 6,
      avatar: "../../src/assets/images/avatar-user.jpg",
      name: "Bob",
      email: "bob@gmail.com",
      role: "User",
      status: "Active",
      lastLogin: "2023-11-11",
      joinDay: "2023-04-10",
    },
    {
      id: 7,
      avatar: "../../src/assets/images/avatar-user.jpg",
      name: "Alice",
      email: "alice@gmail.com",
      role: "User",
      status: "Active",
      lastLogin: "2023-11-12",
      joinDay: "2023-03-05",
    },
    {
      id: 8,
      avatar: "../../src/assets/images/avatar-user.jpg",
      name: "Bob",
      email: "bob@gmail.com",
      role: "User",
      status: "Active",
      lastLogin: "2023-11-11",
      joinDay: "2023-04-10",
    },
    {
      id: 9,
      avatar: "../../src/assets/images/avatar-user.jpg",
      name: "Bob",
      email: "bob@gmail.com",
      role: "User",
      status: "Active",
      lastLogin: "2023-11-11",
      joinDay: "2023-04-10",
    },
    {
      id: 10,
      avatar: "../../src/assets/images/avatar-user.jpg",
      name: "Bob",
      email: "bob@gmail.com",
      role: "User",
      status: "Active",
      lastLogin: "2023-11-11",
      joinDay: "2023-04-10",
    },
  ];

  const isAllChecked = Object.values(checkboxStates).every(Boolean);

  return (
    <>
      <div className="overflow-y-auto bg-white p-[20px] flex flex-col gap-5 w-full h-[calc(100vh-40px)]">
        <div className="title list user">
          <h1 className="text-[18px] font-[600]">Danh sách người dùng</h1>
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
            <PopupAddUser
              isOpen={addModalOpen}
              onClose={() => setAddModalOpen(false)}
              onDelete={handleAddUser}
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
                <th className="p-2 uppercase">Người dùng</th>
                <th className="p-2 uppercase">Vai trò</th>
                <th className="p-2 uppercase">Trạng thái</th>
                <th className="p-2 uppercase">Đăng nhập gần nhất</th>
                <th className="p-2 uppercase">Ngày tham gia</th>
                <th className="p-2 uppercase">Hành động</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {data.map((row) => (
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
                        src={row.avatar}
                        alt=""
                      />
                    </div>
                    <div className="flex flex-col gap-[5px]">
                      <h3 className="font-[600]">{row.name}</h3>
                      <h3 className="font-[500]">{row.email}</h3>
                    </div>
                  </td>
                  <td className="p-2">{row.role}</td>
                  <td className="p-2">{row.status}</td>
                  <td className="p-2">{row.lastLogin}</td>
                  <td className="p-2">{row.joinDay}</td>
                  <td className="p-2">
                    <button className="mr-2">
                      <i className="fa-regular fa-pen-to-square"></i>
                    </button>
                    <button
                      onClick={() => {
                        setSelectedUser(row);
                        setDeleteModalOpen(true);
                      }}
                    >
                      <i className="fa-regular fa-trash-can"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
            <DeleteUserModal
              isOpen={deleteModalOpen}
              onClose={() => setDeleteModalOpen(false)}
              onDelete={handleDeleteUser}
            />
          </table>
        </div>
      </div>
    </>
  );
}

export default ManageUser;
