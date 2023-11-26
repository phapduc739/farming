import { useState } from "react";
export default function ProductDetailPage() {
  const [productShow, setProductShow] = useState("Mô tả");

  const handleShow = (section) => {
    console.log("seclection", section);
    setProductShow(section);
  };
  return (
    <>
      <div className="flex flex-wrap border-b ">
        <div className="w-1/4  ">
          <ul className="border">
            <li
              className={`px-5 py-5 uppercase font-bold text-[18px] text-${
                productShow === "Mô tả" ? "theme-color" : "textBlack"
              } hover:cursor-pointer ${
                productShow === "Mô tả" ? "active" : ""
              } ${
                productShow === "Mô tả" ? "border-l-2 border-theme-color" : ""
              }`}
              onClick={() => handleShow("Mô tả")}
            >
              Mô tả
            </li>

            <li
              className={`px-5 py-5 uppercase font-bold text-[18px] text-${
                productShow === "Đánh Giá" ? "theme-color" : "textBlack"
              } hover:cursor-pointer ${
                productShow === "Đánh Giá" ? "active" : ""
              } ${
                productShow === "Đánh Giá"
                  ? "border-l-2 border-theme-color"
                  : ""
              }`}
              onClick={() => handleShow("Đánh Giá")}
            >
              Đánh Giá
            </li>
          </ul>
        </div>
        <div className="w-3/4 px-3 py-[25px] ">
          {productShow === "Mô tả" && (
            <>
              <h2 className="text-[24px] font-bold mb-[14px] text-theme-color">
                Mô tả
              </h2>
              <p className="px-2 mb-5 mt-4 leading-normal leading-snug mb-2">
                Nông sản sạch tại FamersMarket Việt Nam canh tác rau củ, quả
                trái cây hữu cơ của Đồng bằng Sông Cữu Long theo 7 không 5 có{" "}
              </p>
              <div className="px-2 font-normal">
                <p className="text-[18px] text-theme-color  leading-snug mb-2 ">
                  Tiêu chí 7 Không.
                </p>
                <ul className="decimal text-[16px]  leading-normal ">
                  <li>1. Không sử dụng giống biến đổi gen.</li>
                  <li>2. Không dùng kích thích tăng trưởng.</li>
                  <li>3. Không phân bón hóa học.</li>
                  <li>4. Không sử dụng thuốc trừ sâu .</li>
                  <li>5. Không sử dụng nước chưa được kiểm soát.</li>
                  <li>6. Không sử dụng chất diệt cỏ</li>
                  <li>7. Không sử dụng chất diệt mầm</li>
                </ul>
                <p className="text-[18px] text-theme-color  leading-snug mb-2 ">
                  Tiêu chí 4 Có.
                </p>
                <ul className="decimal text-[16px]  leading-normal ">
                  <li>1. Sản phẩm nông nghiệp trồng trên đất sạch </li>
                  <li>2. Giảm sử dụng phân vô cơ </li>
                  <li>3. Sử dụng thuốc có hiệu quả </li>
                  <li>4. Đánh giá và kiểm tra </li>
                  <li>5. Sử dụng phân bò, dê, cừu,…</li>
                </ul>
              </div>
            </>
          )}
          {productShow === "Đánh Giá" && (
            <>
              <div>
                <h2 className="text-[24px] font-bold mb-[14px] text-theme-color">
                  Đánh Giá
                </h2>
                <p className="px-2 mb-5 mt-4 leading-normal leading-snug mb-2">
                  Chưa có đánh giá nào
                </p>
                <p className="px-2 mb-5 mt-4 leading-normal leading-snug mb-2">
                  Hảy là người đầu tiên đánh giá ""
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
