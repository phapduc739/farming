import BgCafe from "../../../../assets/images/cafe.png";
import BgCove from "../../../../assets/images/cove.png";
import BgCarot from "../../../../assets/images/carot.png";
import BgCachua from "../../../../assets/images/cachua.png";
import BgCuden from "../../../../assets/images/cuden.png";
import Dualeo from "../../../../assets/images/dualeo.png";
function Product() {
  return (
    <>
      <div className="contail-sell px-3">
        <div className="w-full h-[100%]  bg-them-gray flex  flex-wrap px-8 py-8  ">
          <div className="  h-[auto] w-full  rounded-md">
            <div className="tab-content " id="pills-tabContent">
              <div className="dashboard-home flex flex-col">
                <div className="title relative">
                  <h2 className="text-[21px] font-bold  relative ">
                    Tất cả sản phẩm
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
              <div className=" relative   ">
                <div className="table-responsive mt-3">
                  <div className=" rounded-lg overflow-hidden">
                    <table className="w-full table">
                      <thead className="pt-2 border-b border-solid border-inherit border-0">
                        <tr className="text-base font-semibold whitespace-nowrap min-w-[90px]">
                          <th
                            className="border border-solid border-inherit border-0"
                            scope="col"
                          >
                            Hình ảnh
                          </th>
                          <th
                            className="w-[151px] border border-solid border-inherit border-0"
                            scope="col"
                          >
                            Tên sản phẩm
                          </th>
                          <th
                            className="border border-solid border-inherit border-0"
                            scope="col"
                          >
                            Giá
                          </th>
                          <th
                            className="border border-solid border-inherit border-0"
                            scope="col"
                          >
                            Lượt bán
                          </th>
                          <th className="" scope="col">
                            Kho hàng
                          </th>
                          <th scope="col">Sữa/ Xóa</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="text-center table-row align-middle whitespace-nowrap flex items-center">
                          <td className="w-[90px] h-[72px] border border-solid border-inherit border-0">
                            <img
                              src={BgCafe}
                              className="w-[60px] h-[auto] mx-auto"
                              alt="Hình ảnh sản phẩm"
                            />
                          </td>
                          <td className="w-[151px] border border-solid border-inherit border-0">
                            <h6>Cà Phê Đắk Lắk</h6>
                          </td>
                          <td className="w-[90px] h-[72px] border border-solid border-inherit border-0">
                            <h6 className="text-theme-color font-bold ">
                              150.000₫
                            </h6>
                          </td>
                          <td className="w-[90px] h-[72px] border border-solid border-inherit border-0">
                            <h6>832</h6>
                          </td>
                          <td className="w-[90px] h-[72px] border border-solid border-inherit border-0">
                            <h6>120</h6>
                          </td>
                          <td className="w-[90px] h-[72px] border border-solid border-inherit border-0">
                            <button className="py-1">
                              <i className="fa-solid fa-pen-to-square  w-[19px] stroke-1  text-theme-color"></i>
                              <i className="fa-solid fa-trash  w-[19px] stroke-1 text-red-500 ml-2 "></i>
                            </button>
                          </td>
                        </tr>

                        <tr className="text-center table-row align-middle whitespace-nowrap flex items-center">
                          <td className="w-16 h-16">
                            <img
                              src={BgCarot}
                              className="w-12 h-auto mx-auto"
                              alt="Hình ảnh sản phẩm"
                            />
                          </td>
                          <td className="w-[151px] border border-solid border-inherit border-0">
                            <h6>Cà rốt lớn</h6>
                          </td>
                          <td className="w-16 h-16 border border-solid border-inherit border-0">
                            <h6 className="text-theme-color font-bold ">
                              50.000₫
                            </h6>
                          </td>
                          <td className="w-16 h-16 border border-solid border-inherit border-0">
                            <h6>332</h6>
                          </td>
                          <td className="w-[90px] h-[72px] border border-solid border-inherit border-0">
                            <h6>140</h6>
                          </td>
                          <td className="w-[90px] h-[72px] border border-solid border-inherit border-0">
                            <button className="py-1">
                              <i className="fa-solid fa-pen-to-square  w-[19px] stroke-1  text-theme-color"></i>
                              <i className="fa-solid fa-trash  w-[19px] stroke-1 text-red-500 ml-2 "></i>
                            </button>
                          </td>
                        </tr>

                        <tr className="text-center table-row align-middle whitespace-nowrap flex items-center">
                          <td className="w-16 h-16 border border-solid border-inherit border-0">
                            <img
                              src={BgCove}
                              className="w-12 h-auto mx-auto"
                              alt="Hình ảnh sản phẩm"
                            />
                          </td>
                          <td className="w-[151px] border border-solid border-inherit border-0">
                            <h6>Đậu Cove thường</h6>
                          </td>
                          <td className="w-16 h-16 border border-solid border-inherit border-0">
                            <h6 className="text-theme-color font-bold ">
                              60.000₫
                            </h6>
                          </td>
                          <td className="w-16 h-16 border border-solid border-inherit border-0">
                            <h6>500</h6>
                          </td>
                          <td className="w-[90px] h-[72px] border border-solid border-inherit border-0">
                            <h6>230</h6>
                          </td>
                          <td className="w-[90px] h-[72px] border border-solid border-inherit border-0">
                            <button className="py-1">
                              <i className="fa-solid fa-pen-to-square  w-[19px] stroke-1  text-theme-color"></i>
                              <i className="fa-solid fa-trash  w-[19px] stroke-1 text-red-500 ml-2 "></i>
                            </button>
                          </td>
                        </tr>

                        <tr className="text-center table-row align-middle whitespace-nowrap flex items-center">
                          <td className="w-16 h-16 border border-solid border-inherit border-0">
                            <img
                              src={BgCachua}
                              className="w-12 h-auto mx-auto"
                              alt="Hình ảnh sản phẩm"
                            />
                          </td>
                          <td className="w-[151px] border border-solid border-inherit border-0">
                            <h6>Cà Chua</h6>
                          </td>
                          <td className="w-16 h-16 border border-solid border-inherit border-0">
                            <h6 className="text-theme-color font-bold ">
                              40.000₫
                            </h6>
                          </td>
                          <td className="w-16 h-16 border border-solid border-inherit border-0">
                            <h6>1200</h6>
                          </td>
                          <td className="w-[90px] h-[72px] border border-solid border-inherit border-0">
                            <h6>560</h6>
                          </td>
                          <td className="w-[90px] h-[72px] border border-solid border-inherit border-0">
                            <button className="py-1">
                              <i className="fa-solid fa-pen-to-square  w-[19px] stroke-1  text-theme-color"></i>
                              <i className="fa-solid fa-trash  w-[19px] stroke-1 text-red-500 ml-2 "></i>
                            </button>
                          </td>
                        </tr>

                        <tr className="text-center table-row align-middle whitespace-nowrap flex items-center">
                          <td className="w-[90px] h-[72px] border border-solid border-inherit border-0">
                            <img
                              src={BgCuden}
                              className="w-[60px] h-[auto] mx-auto"
                            />
                          </td>
                          <td className="w-[151px] border border-solid border-inherit border-0">
                            <h6>Củ Dền</h6>
                          </td>
                          <td className="w-[90px] h-[72px] border border-solid border-inherit border-0">
                            <h6 className="text-theme-color font-bold ">
                              50.000₫
                            </h6>
                          </td>
                          <td className="w-[90px] h-[72px] border border-solid border-inherit border-0">
                            <h6>2000</h6>
                          </td>
                          <td className="w-[90px] h-[72px] border border-solid border-inherit border-0">
                            <h6>32</h6>
                          </td>
                          <td className="w-[90px] h-[72px] border border-solid border-inherit border-0">
                            <button className="py-1">
                              <i className="fa-solid fa-pen-to-square  w-[19px] stroke-1  text-theme-color"></i>
                              <i className="fa-solid fa-trash  w-[19px] stroke-1 text-red-500 ml-2 "></i>
                            </button>
                          </td>
                        </tr>

                        <tr className="text-center table-row align-middle whitespace-nowrap flex items-center">
                          <td className="w-[90px] h-[72px]">
                            <img
                              src={Dualeo}
                              className="w-[60px] h-[auto] mx-auto"
                            />
                          </td>
                          <td className="w-[151px]">
                            <h6>Dưa Leo</h6>
                          </td>
                          <td className="w-[90px] h-[72px]">
                            <h6 className="text-theme-color font-bold ">
                              54.000₫
                            </h6>
                          </td>
                          <td className="w-[90px] h-[72px]">
                            <h6>2123</h6>
                          </td>
                          <td className="w-[90px] h-[72px] border border-solid border-inherit border-0">
                            <h6>200</h6>
                          </td>
                          <td className="w-[90px] h-[72px] border border-solid border-inherit border-0">
                            <button className="py-1">
                              <i className="fa-solid fa-pen-to-square  w-[19px] stroke-1  text-theme-color"></i>
                              <i className="fa-solid fa-trash  w-[19px] stroke-1 text-red-500 ml-2 "></i>
                            </button>
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
                      <li className="page-item active rounded-md overflow-hidden ">
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
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
