function Oder() {
  return (
    <>
      <div className="contail-sell px-3 ">
        <div className="w-full h-[100%]  bg-them-gray flex  flex-wrap px-8 py-8  ">
          <div className="tab-content " id="pills-tabContent">
            <div className="dashboard-home flex flex-col">
              <div className="title relative">
                <h2 className="text-[26px] font-bold text-text2222 relative ">
                  Tất cả đơn hàng
                </h2>
                <div className="title-leaf relative flex items-center justify-center mt-1 w-[120px] h-[30px]">
                  <div className="absolute left-0 w-[45px] h-px bg-theme-color z-10"></div>
                  <i className="relative fa-solid fa-seedling z-0 text-theme-color"></i>
                  <div className="absolute right-0 w-[45px] h-px bg-theme-color z-10"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-6 w-full h-auto   relative  bg-white px-4 py-4  ">
            <div className="table-responsive  rounded-lg overflow-auto p-2 ">
              <table className="table order-table w-full ">
                <thead className="border-b border-solid border-inherit border-0">
                  <tr className="border border-solid border-inherit border-0 text-center table-row align-middle whitespace-nowrap flex items-center">
                    <th
                      className="border border-solid border-inherit border-0 text-[16px] font-[600]"
                      scope="col"
                    >
                      Mã Đơn Hàng
                    </th>
                    <th
                      className="border border-solid border-inherit border-0 text-[16px] font-[600]"
                      scope="col"
                    >
                      Tên Sản Phẩm
                    </th>
                    <th
                      className="border border-solid border-inherit border-0 text-[16px] font-[600]"
                      scope="col"
                    >
                      Trạng Thái
                    </th>
                    <th
                      className="border border-solid border-inherit border-0 text-[16px] font-[600]"
                      scope="col"
                    >
                      Giá
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr className="text-center table-row align-middle whitespace-nowrap flex items-center  border-b">
                    <td className="product-image border border-solid border-inherit border-0 text-[14px] font-[600]">
                      #254834
                    </td>
                    <td className="border border-solid border-inherit border-0">
                      <h6 className="14px leading-[1.2] font-[400]">
                        Tiêu đen 500g
                      </h6>
                    </td>
                    <td className="border border-solid border-inherit border-0">
                      <label className="inline-block py-1 px-3 text-[12px] rounded-full bg-red-400 bg-opacity-10 text-red-400">
                        Đã Giao Hàng
                      </label>
                    </td>
                    <td>
                      <h6 className="14px leading-[1.2] font-[400]">
                        120.000d
                      </h6>
                    </td>
                  </tr>

                  <tr className="text-center table-row align-middle whitespace-nowrap flex items-center  border-b">
                    <td className="product-image border border-solid border-inherit border-0 text-[14px] font-[600]">
                      #355678
                    </td>
                    <td className="border border-solid border-inherit border-0">
                      <h6 className="14px leading-[1.2] font-[400]">
                        Hạt điều hữu cơ 1kg
                      </h6>
                    </td>
                    <td className="border border-solid border-inherit border-0">
                      <label className=" inline-block py-1 px-3  text-[12px] rounded-full bg-theme-color bg-opacity-10 text-theme-color">
                        Chờ xử lý
                      </label>
                    </td>
                    <td>
                      <h6 className="14px leading-[1.2] font-[400]">
                        320.000d
                      </h6>
                    </td>
                  </tr>

                  <tr className="text-center table-row align-middle whitespace-nowrap flex items-center  border-b">
                    <td className="product-image border border-solid border-inherit border-0 text-[14px] font-[600]">
                      #647536
                    </td>
                    <td className="border border-solid border-inherit border-0">
                      <h6 className="14px leading-[1.2] font-[400]">
                        Dưa leo 500g
                      </h6>
                    </td>
                    <td className="border border-solid border-inherit border-0">
                      <label className="inline-block py-1 px-3  text-[12px] rounded-full bg-red-400 bg-opacity-10 text-red-400">
                        Đã Giao Hàng
                      </label>
                    </td>
                    <td>
                      <h6 className="14px leading-[1.2] font-[400]">20.000d</h6>
                    </td>
                  </tr>

                  <tr className="text-center table-row align-middle whitespace-nowrap flex items-center border-b">
                    <td className="product-image border border-solid border-inherit border-0 text-[14px] font-[600]">
                      #125689
                    </td>
                    <td>
                      <h6 className="14px leading-[1.2] font-[400]">
                        Bí đỏ 1kg
                      </h6>
                    </td>
                    <td>
                      <label className="inline-block py-1 px-3  text-[12px] rounded-full bg-theme-color bg-opacity-10 text-theme-color">
                        Chờ xử lý
                      </label>
                    </td>
                    <td>
                      <h6 className="14px leading-[1.2] font-[400]">20.000d</h6>
                    </td>
                  </tr>

                  <tr className="text-center table-row align-middle whitespace-nowrap flex items-center  border-b">
                    <td className="product-image border border-solid border-inherit border-0 text-[14px] font-[600]">
                      #215487
                    </td>
                    <td>
                      <h6 className="14px leading-[1.2] font-[400]">
                        Gạo Lứt 1kg
                      </h6>
                    </td>
                    <td>
                      <label className="inline-block py-1 px-3 text-[12px] rounded-full bg-red-400 bg-opacity-10 text-red-400">
                        Đã Giao Hàng
                      </label>
                    </td>
                    <td>
                      <h6 className="14px leading-[1.2] font-[400]">25.000d</h6>
                    </td>
                  </tr>

                  <tr className="text-center table-row align-middle whitespace-nowrap flex items-center  border-b">
                    <td className="product-image border border-solid border-inherit border-0 text-[14px] font-[600]">
                      #365474
                    </td>
                    <td>
                      <h6 className="14px leading-[1.2] font-[400]">
                        Cà Phê 100g
                      </h6>
                    </td>
                    <td>
                      <label className="inline-block py-1 px-3 text-[12px] rounded-full bg-theme-color bg-opacity-10 text-theme-color">
                        Chờ xử lý
                      </label>
                    </td>
                    <td>
                      <h6 className="14px leading-[1.2] font-[400]">18.000d</h6>
                    </td>
                  </tr>

                  <tr className="text-center table-row align-middle whitespace-nowrap flex items-center">
                    <td className="product-image border border-solid border-inherit border-0 text-[14px] font-[600]">
                      #368415
                    </td>
                    <td>
                      <h6 className="14px leading-[1.2] font-[400]">
                        Cà Chua 1kg
                      </h6>
                    </td>
                    <td>
                      <label className="inline-block py-1 px-3 text-[12px] rounded-full bg-theme-color bg-opacity-10 text-theme-color">
                        Chờ xử lý
                      </label>
                    </td>
                    <td>
                      <h6 className="14px leading-[1.2] font-[400]">30.000d</h6>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <nav className="custome-pagination border border-solid border-transparent ">
              <ul className="pagination flex flex-wrap  justify-center items-center pb-2 w-[840px] h-[40px] pt-3">
                <li className="page-item disabled rounded-md overflow-hidden ">
                  <a
                    className="page-link border border-solid inline-block py-1 px-3 text-[14px]"
                    href="javascript:void(0)"
                    tabIndex="-1"
                  >
                    <i className="fa-solid fa-angles-left"></i>
                  </a>
                </li>
                <li className="page-item active rounded-md overflow-hidden bg-theme-color">
                  <a
                    className="page-link inline-block py-1 px-3 text-[14px]"
                    href="javascript:void(0)"
                  >
                    1
                  </a>
                </li>
                <li
                  className="page-item rounded-md overflow-hidden"
                  aria-current="page"
                >
                  <a
                    className="page-link inline-block py-1 px-3 text-[14px]"
                    href="javascript:void(0)"
                  >
                    2
                  </a>
                </li>
                <li className="page-item rounded-md overflow-hidden">
                  <a
                    className="page-link inline-block py-1 px-3 text-[14px]"
                    href="javascript:void(0)"
                  >
                    3
                  </a>
                </li>
                <li className="page-item rounded-md overflow-hidden">
                  <a
                    className="page-link inline-block py-1 px-3 text-[14px]"
                    href="javascript:void(0)"
                  >
                    <i className="fa-solid fa-angles-right"></i>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

export default Oder;
