import TitleProduct from "./components/Title/TitleProduct";
import Header from "../../pages/user/common/Header";
import Seedling from "../../assets/images/seedling.png";
import ProductInfo from "./components/ProductDetail/productInfo";
import ProductCategory from "./components/SellerDetail/Product-item";
import ProductDetailPage from "./components/ProductDetail/ProductDetailPage";
import { useParams } from "react-router-dom";

export default function ProductDetail() {
  const { id } = useParams();

  return (
    <>
      <Header />
      <TitleProduct />

      <section className="py-[40px] px-[120px] ">
        <div className="w-full  mt-5 ">
          <div className="contailner">
            <ProductInfo productId={id} />
          </div>
        </div>
        <ProductDetailPage />
        <div>
          <div className="flex flex-col items-center">
            <h2 className="text-[24px] font-bold mb-[14px] text-theme-color text-center">
              Những sản phẩm tương tự
            </h2>
            <div className="flex justify-start items-center gap-1">
              <div className="w-[60px] h-[3px] bg-primaryGreen"></div>
              <img src={Seedling} alt="" />
              <div className="w-[60px] h-[3px] bg-primaryGreen"></div>
            </div>
          </div>
          {/* <ProductCategory /> */}
        </div>
      </section>
    </>
  );
}
