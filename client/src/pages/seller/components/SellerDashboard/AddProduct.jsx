import Header from "../../../user/common/Header";
import Footer from "../../../user/common/Footer";
import Title from "../Title/Title";
import SideBar from "./SideBar";

function AddProduct() {
  return (
    <>
      <div className="contail-sell px-3">
        <div className="w-full h-[100%]  bg-them-gray flex  flex-wrap px-8 py-8  ">
          <div className="  h-[auto] w-full  rounded-md">
            <div className="tab-content " id="pills-tabContent">
              <div className="dashboard-home flex flex-col">
                <div className="title relative flex justify-between items-center">
                  <div className="">
                    {" "}
                    <h2 className="text-[26px] font-bold text-text2222 relative ">
                      Tất cả sản phẩm
                    </h2>
                    <div className="title-leaf relative flex items-center justify-center mt-1 w-[120px] h-[30px]">
                      <div className="absolute left-0 w-[45px] h-px bg-theme-color z-10"></div>
                      <i className="relative fa-solid fa-seedling z-0 text-theme-color"></i>
                      <div className="absolute right-0 w-[45px] h-px bg-theme-color z-10"></div>
                    </div>
                  </div>
                  <div className="">
                    <div className=" btn-add flex gap-2">
                      <button className="bg-primaryGreen flex justify-center items-center gap-2 rounded-[4px] py-[8px] px-[14px] text-white text-[14px] hover:bg-[#08886e] transition">
                        <i className="fa-solid fa-user-plus"></i>
                        Thêm sản phẩm
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-red-500 col-xxl-6 w-full h-auto   relative  bg-white px-4 py-4  ">
              <div className=" relative">
                <div className="table-responsive mt-3">
                  <div className=" rounded-lg overflow-hidden"></div>
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
                      <li className="page-item active rounded-md overflow-hidden bg-theme-color text-theme-color">
                        <a
                          className="page-link inline-block py-1 px-3 text-[14px] "
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

export default AddProduct;
