import React, { useState } from "react";

function FilterUser() {
  const [showFilter, setShowFilter] = useState(false);
  const [selectedRole, setSelectedRole] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");

  const handleFilterToggle = () => {
    setShowFilter(!showFilter);
  };

  const handleRoleChange = (event) => {
    setSelectedRole(event.target.value);
  };

  const handleStatusChange = (event) => {
    setSelectedStatus(event.target.value);
  };

  const handleFilterApply = () => {
    // Xử lý việc áp dụng bộ lọc
    // Gọi API hoặc thực hiện các hành động khác tùy thuộc vào bộ lọc đã chọn
    setShowFilter(false);
  };

  return (
    <div>
      <button
        onClick={handleFilterToggle}
        className=" flex justify-center items-center gap-2 rounded-[4px] py-[8px] px-[14px] bg-[#f1f1f4] hover:bg-[#d8d8d8] transition text-[#071437] text-[14px]"
      >
        <i className="fa-solid fa-filter"></i>
        Lọc
      </button>
      {showFilter && (
        <div className="absolute top-[38px] right-[178px] w-[325px] flex items-center justify-center ">
          <div className="w-full bg-white p-5 rounded-[4px] border">
            <h3 className="text-[15px] font-semibold mb-2">Bộ lọc tùy chọn</h3>
            <div className="mb-4">
              <label
                htmlFor="roleFilter"
                className="block text-[14px] font-medium mb-1"
              >
                Vai trò
              </label>
              <select
                id="roleFilter"
                value={selectedRole}
                onChange={handleRoleChange}
                className="w-full text-[14px] border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Tất cả</option>
                <option value="admin">Admin</option>
                <option value="seller">Seller</option>
                <option value="user">User</option>
              </select>
            </div>
            <div className="mb-4">
              <label
                htmlFor="statusFilter"
                className="block text-[14px] font-medium mb-1"
              >
                Trạng thái
              </label>
              <select
                id="statusFilter"
                value={selectedStatus}
                onChange={handleStatusChange}
                className="w-full text-[14px] border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Tất cả</option>
                <option value="active">Active</option>
                <option value="block">Block</option>
              </select>
            </div>
            <div className="flex justify-end">
              <button
                onClick={handleFilterApply}
                className="bg-blue-500 hover:bg-blue-600 text-white text-[14px] py-2 px-4 rounded-lg"
              >
                Áp dụng
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default FilterUser;
