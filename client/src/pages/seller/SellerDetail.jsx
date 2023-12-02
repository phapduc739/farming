import Header from "../../pages/user/common/Header";
import Product from "./components/SellerDetail/Product";

import SideBar from "./components/SellerDetail/SideBar";
import Footer from "../user/common/Footer";
import SearchDetail from "../seller/components/SellerDetail/SearchDetail";
export default function SellerDetail() {
  return (
    <>
      <Header />
      <SearchDetail />
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
