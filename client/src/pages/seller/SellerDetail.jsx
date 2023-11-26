import Header from "../../pages/user/common/Header";
import Product from "./components/SellerDetail/Product";

import SideBar from "./components/SellerDetail/SideBar";
import Footer from "../user/common/Footer";
export default function SellerDetail() {
  return (
    <>
      <Header />
      <section className="py-[80px] vendore-breadscrumb-section">
        <div className="w-full container-fluid-lg  mt-5 px-[250px]">
          <div className="row flex  justify-center ">
            <div className="wrapper mt-30">
              <div className="mb-[17px] w-full">
                <h1 className="text-center font-mono leading-1 text-5xl font-normal">
                  Thông tin nhà cung cấp
                </h1>
              </div>

              <div className="relative mb-4 w-full">
                <form className="w-full relative">
                  <input
                    type="text"
                    className="pl-10 pr-12 py-3 border rounded-lg w-[800px] outline-none"
                    placeholder="Tìm kiếm sản phẩm"
                  />

                  <span className=" text-green-500 absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </span>

                  <button className="absolute inset-y-0 right-0 px-4 py-2 bg-green-700 text-white  rounded-lg">
                    Tìm Kiếm
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="">
        <div className="px-[120px] py-20">
          <div className="row flex  h-auto ">
            <SideBar />

            <Product />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
