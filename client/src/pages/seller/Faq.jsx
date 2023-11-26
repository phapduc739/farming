import { useState } from "react";
import Header from "../../pages/user/common/Header";
import Footer from "../user/common/Footer";
import BgStart from "../../assets/images/start.png";
import BgHelp from "../../assets/images/help.png";
import BgPrice from "../../assets/images/price.png";
import BgSupport from "../../assets/images/contact.png";
export default function Faq() {
  const [isClicked, setIsClicked] = useState(false);
  const [selectedItem, setSelectedItem] = useState("Tất cả sản phẩm");

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsClicked(false);
  };
  // click info//
  const [isExpanded1, setIsExpanded1] = useState(false);
  const [isExpanded2, setIsExpanded2] = useState(false);
  const [inExpanded3, setIsExpanded3] = useState(false);
  const toggleAccordion1 = () => {
    setIsExpanded1(!isExpanded1);
    if (isExpanded2) {
      setIsExpanded2(false);
    }
  };

  const toggleAccordion2 = () => {
    setIsExpanded2(!isExpanded2);
    if (isExpanded1) {
      setIsExpanded1(false);
    }
  };

  return (
    <>
      <Header />
      <section className="">
        <div className="container-fluid-lg bg-slate-100 mt-5">
          <div className="row w-full -mx-3 flex">
            <div className="flex flex-col wrapper mt-10 ">
              <h1 className="text-center font-mono leading-[1] text-4xl font-normal">
                Hỗ trợ khách hàng
              </h1>
              <p className="text-center font-sans leading-[1.7] text-[18px] font-normal mx-[250px] mt-[30px]">
                Tự hào chào đón bạn đến với chúng tôi trong hành trình tìm kiếm
                câu trả lời. Nhóm của chúng tôi đang hết sức cố gắng phát triển
                sản phẩm và rất mong nhận được mọi câu hỏi từ bạn. Chúng tôi tin
                rằng phản hồi từ quý vị là động lực giúp chúng tôi tiến bộ hơn.
              </p>
              <div className="mx-[250px] mt-[30px] bg-white mb-10">
                <div className="relative flex items-center w-full">
                  <div className="px-[18px]">
                    <i className="fa-solid fa-magnifying-glass text-gray-400"></i>
                  </div>
                  <input
                    className="pr-[14px] py-[12px] w-full"
                    type="search"
                    placeholder="name@gamil.com"
                  />
                  <button
                    type="button"
                    className="px-[22px] py-[10px] flex items-center"
                    onClick={handleClick}
                  >
                    {selectedItem ? selectedItem : ""}{" "}
                    <i className="fa-solid fa-angle-down ml-2"></i>
                    {isClicked && (
                      <ul className="absolute z-50 min-w-[10rem] -top-[114px] right-[-50px] p-[0.5rem] text-left list-none bg-white border border-gray-200 rounded ">
                        <li className="hover:bg-slate-200 leading-4">
                          <a onClick={() => handleItemClick("Tìm hiểu thêm")}>
                            Tìm hiểu thêm
                          </a>
                        </li>
                        <li className="hover:bg-slate-200">
                          <a onClick={() => handleItemClick("Lựa chọn khác")}>
                            Lựa chọn khác
                          </a>
                        </li>
                        <li className="hover:bg-slate-200">
                          <a onClick={() => handleItemClick("Sản phẩm khác")}>
                            Sản phẩm khác
                          </a>
                        </li>
                        <li className="hover:bg-slate-200">
                          <a onClick={() => handleItemClick("Tất cả sản phẩm")}>
                            Tất cả sản phẩm
                          </a>
                        </li>
                      </ul>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container-fluid-lg  mt-5">
          <div className="row w-full  ">
            <div className=" grid grid-cols-4 gap-4 mx-[10px]">
              <div className="flex items-center flex-col px-[18px] py-[28px] bg-slate-200">
                <div className="mb-4">
                  <img
                    className="w-[65px] h-[65px] bg-white rounded-[7px]"
                    src={BgStart}
                  />
                </div>
                <h3 className=" font-[700] text-[18px] leading-[1.2] text-center">
                  Bắt Đầu
                </h3>
                <p className="mt-[17px] -mb-1  text-center leading-[1.6] text-gray-700">
                  Mang đến các chiến lược tồn tại đôi bên để đảm bảo sự chiếm ưu
                  thế tích cực.
                </p>
              </div>
              <div className="flex items-center flex-col px-[18px] py-[28px] bg-slate-200">
                <div className="mb-4">
                  <img
                    className="w-[65px] h-[65px] bg-white rounded-[7px]"
                    src={BgHelp}
                  />
                </div>
                <h3 className=" font-[700] text-[18px] leading-[1.2] text-center">
                  Câu hỏi về bán hàng
                </h3>
                <p className="mt-[17px] -mb-1  text-center leading-[1.6] text-gray-700">
                  Thông tin về sản phẩm được trình bày một cách rõ ràng và dễ
                  hiểu.
                </p>
              </div>
              <div className="flex items-center flex-col px-[18px] py-[28px] bg-slate-200">
                <div className="mb-4">
                  <img
                    className="w-[65px] h-[65px] bg-white rounded-[7px]"
                    src={BgPrice}
                  />
                </div>
                <h3 className=" font-[700] text-[18px] leading-[1.2] text-center">
                  Giá cả & Gói dịch vụ
                </h3>
                <p className="mt-[17px] -mb-1  text-center leading-[1.6] text-gray-700">
                  Thông tin về giá cả và các gói dịch vụ được trình bày một cách
                  rõ ràng và dễ hiểu.
                </p>
              </div>
              <div className="flex items-center flex-col px-[18px] py-[28px] bg-slate-200">
                <div className="mb-4">
                  <img
                    className="w-[65px] h-[65px] bg-white rounded-[7px]"
                    src={BgSupport}
                  />
                </div>
                <h3 className=" font-[700] text-[18px] leading-[1.2] text-center">
                  Hỗ trợ liên hệ
                </h3>
                <p className="mt-[17px] -mb-1  text-center leading-[1.6] text-gray-700">
                  Hãy xem điều này, rất đơn giản và dễ hiểu.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container-fluid-lg  mt-5">
          <div className="row w-full  px-[10px] ">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h2 className="font-[700] text-[22px] leading-[1.2] text-center">
                  Câu Hỏi Thường Gặp
                </h2>
                <p className="mt-[17px] -mb-1  text-center leading-[1.6] text-gray-700">
                  Chúng tôi sẽ trả lời các câu hỏi phổ biến nhất. Đừng lo lắng
                  nếu bạn không tìm thấy câu trả lời chính xác. Bạn có thể tìm
                  hiểu thêm bằng cách tìm kiếm hoặc tiếp tục nhấn vào nút bên
                  dưới hoặc trực tiếp{" "}
                  <a href="contact" className=" text-green-500">
                    liên hệ với bộ phận hỗ trợ của chúng tôi.
                  </a>
                </p>
              </div>
              <div>
                <div className="bg-slate-200 px-[15px] py-[18px] my-3">
                  <div className="flex justify-between items-center">
                    <h2
                      className={` text-[18px] font-[500] ${
                        isExpanded1 ? "text-green-500" : ""
                      }`}
                      id="headingOne"
                      onClick={toggleAccordion1}
                    >
                      Phương thức thanh toán tại Farmers Market ?
                    </h2>
                    <button
                      className="accordion-button"
                      type="button"
                      onClick={toggleAccordion1}
                    >
                      {isExpanded1 ? (
                        <i className="fa-solid fa-angle-up"></i>
                      ) : (
                        <i className="fa-solid fa-angle-down"></i>
                      )}
                    </button>
                  </div>
                  {isExpanded1 && (
                    <div className="px-[15px] pb-[18px] mt-2 -mb-2  ">
                      <p className="text-[16px] pb-0.5 text-gray-700 font-400">
                        Farmers Market.com áp dụng các phương thức thanh toán
                        sau
                      </p>
                      <ol>
                        <li className="text-[16px] pb-0.5 text-gray-700 font-400">
                          Thanh toán trực tiếp: thanh toán tại quầy lúc mua hàng
                          hoặc thanh toán tiền mặt ngay khi nhận hàng
                        </li>
                        <li className="text-[16px] pb-0.5 text-gray-700 font-400">
                          Thanh toán qua thẻ ngân hàng
                        </li>
                      </ol>
                    </div>
                  )}
                </div>
                <div className="bg-slate-200 px-[15px] py-[18px] mb-3">
                  <div className="flex justify-between items-center">
                    <h2
                      className={` text-[18px] font-[500] ${
                        isExpanded2 ? "text-green-500" : ""
                      }`}
                      id="headingOne"
                      onClick={toggleAccordion1}
                    >
                      Sản phẩm của Farmers Market có phải hữa cơ hay không ?
                    </h2>
                    <button
                      className="accordion-button"
                      type="button"
                      onClick={toggleAccordion2}
                    >
                      {isExpanded2 ? (
                        <i className="fa-solid fa-angle-up"></i>
                      ) : (
                        <i className="fa-solid fa-angle-down"></i>
                      )}
                    </button>
                  </div>
                  {isExpanded2 && (
                    <div className="px-[15px] pb-[18px] mt-2 -mb-2 ">
                      <p className="text-[16px] pb-0.5 text-gray-700 font-400">
                        Không, nông trại chúng tôi sử dụng phân bón hòa tan như
                        trong hệ thống thủy canh nên sản phẩm của chúng tôi
                        không được coi là sản phẩm hữu cơ. Tuy nhiên, rau quả
                        của Farmers Market cực kỳ sạch và an toàn, thậm chí có
                        thể tiêu dùng trực tiếp. Chúng tôi sử dụng thuốc trừ sâu
                        sinh học để kiểm soát sâu bệnh, nhổ cỏ bằng tay, đất và
                        nước đã được kiểm nghiệm không có kim loại nặng.
                      </p>
                    </div>
                  )}
                </div>
                <div className="bg-slate-200 px-[15px] py-[18px]  mb-3">
                  <div className="flex justify-between items-center">
                    <h2
                      className={` text-[18px] font-[500] ${
                        isExpanded2 ? "text-green-500" : ""
                      }`}
                      id="headingOne"
                      onClick={toggleAccordion1}
                    >
                      Sản phẩm của Farmers Market có theo mùa hay không ?
                    </h2>
                    <button
                      className="accordion-button"
                      type="button"
                      onClick={toggleAccordion2}
                    >
                      {isExpanded2 ? (
                        <i className="fa-solid fa-angle-up"></i>
                      ) : (
                        <i className="fa-solid fa-angle-down"></i>
                      )}
                    </button>
                  </div>
                  {isExpanded2 && (
                    <div className="px-[15px] pb-[18px] mt-2 -mb-2 ">
                      <p className="text-[16px] pb-0.5 text-gray-700 font-400">
                        {" "}
                        Có và không. Một số sản phẩm của chúng tôi theo mùa, một
                        số ra quanh năm. Bắp cải tí hon và tầm bóp Nam Mỹ có vào
                        mùa đông và mùa xuân. Dâu tây, phúc bồn tử đen, phúc bồn
                        tử đỏ và cải xoăn Kale luôn có quanh năm.
                      </p>
                    </div>
                  )}
                </div>
                <div className="bg-slate-200 px-[15px] py-[18px]  mb-3">
                  <div className="flex justify-between items-center">
                    <h2
                      className={` text-[18px] font-[500] ${
                        isExpanded2 ? "text-green-500" : ""
                      }`}
                      id="headingOne"
                      onClick={toggleAccordion1}
                    >
                      Khách hàng có thể mua sản phẩm Farmers Market ở đâu ?
                    </h2>
                    <button
                      className="accordion-button"
                      type="button"
                      onClick={toggleAccordion2}
                    >
                      {isExpanded2 ? (
                        <i className="fa-solid fa-angle-up"></i>
                      ) : (
                        <i className="fa-solid fa-angle-down"></i>
                      )}
                    </button>
                  </div>
                  {isExpanded2 && (
                    <div className="px-[15px] pb-[18px] mt-2 -mb-2 ">
                      <p className="text-[16px] pb-0.5 text-gray-700 font-400">
                        Bạn có thể mua trực tiếp tại cữa hàng hoặc trang web của
                        chúng tôi
                      </p>
                    </div>
                  )}
                </div>
                <div className="bg-slate-200 px-[15px] py-[18px]  mb-3">
                  <div className="flex justify-between items-center">
                    <h2
                      className={` text-[18px] font-[500] ${
                        isExpanded2 ? "text-green-500" : ""
                      }`}
                      id="headingOne"
                      onClick={toggleAccordion1}
                    >
                      Thời gian nhận hàng ?
                    </h2>
                    <button
                      className="accordion-button"
                      type="button"
                      onClick={toggleAccordion2}
                    >
                      {isExpanded2 ? (
                        <i className="fa-solid fa-angle-up"></i>
                      ) : (
                        <i className="fa-solid fa-angle-down"></i>
                      )}
                    </button>
                  </div>
                  {isExpanded2 && (
                    <div className="px-[15px] pb-[18px] mt-2 -mb-2 ">
                      <p className="text-[16px] pb-0.5 text-gray-700 font-400">
                        Đối với các đơn hàng tại Hà Nội, Hồ Chí Minh, Cần Thơ,
                        thời gian giao hàng trong ngày. Đối với các đơn hàng
                        ngoài Hà Nội, Hồ Chí Minh, Cần Thơ, thời gian giao hàng
                        phụ thuộc vào quảng đường vận chuyển
                      </p>
                    </div>
                  )}
                </div>
                <div className="bg-slate-200 px-[15px] py-[18px]  mb-3">
                  <div className="flex justify-between items-center">
                    <h2
                      className={` text-[18px] font-[500] ${
                        isExpanded2 ? "text-green-500" : ""
                      }`}
                      id="headingOne"
                      onClick={toggleAccordion1}
                    >
                      Chính sách bảo mật thông tin người mua ?
                    </h2>
                    <button
                      className="accordion-button"
                      type="button"
                      onClick={toggleAccordion2}
                    >
                      {isExpanded2 ? (
                        <i className="fa-solid fa-angle-up"></i>
                      ) : (
                        <i className="fa-solid fa-angle-down"></i>
                      )}
                    </button>
                  </div>
                  {isExpanded2 && (
                    <div className="px-[15px] pb-[18px] mt-2 -mb-2 ">
                      <p className="text-[16px] pb-0.5 text-gray-700 font-400">
                        Chúng tôi cam kết bảo vệ thông tin cá nhân của khách
                        hàng để đảm bảo tính riêng tư và an ninh cho quý khách.
                      </p>{" "}
                    </div>
                  )}
                </div>
                <div className="bg-slate-200 px-[15px] py-[18px]">
                  <div className="flex justify-between items-center">
                    <h2
                      className={` text-[18px] font-[500] ${
                        isExpanded2 ? "text-green-500" : ""
                      }`}
                      id="headingOne"
                      onClick={toggleAccordion1}
                    >
                      Phí giao hàng tại FarmersMarket.com ?
                    </h2>
                    <button
                      className="accordion-button"
                      type="button"
                      onClick={toggleAccordion2}
                    >
                      {isExpanded2 ? (
                        <i className="fa-solid fa-angle-up"></i>
                      ) : (
                        <i className="fa-solid fa-angle-down"></i>
                      )}
                    </button>
                  </div>
                  {isExpanded2 && (
                    <div className="px-[15px] pb-[18px] mt-2 -mb-2 ">
                      <p className="text-[16px] pb-0.5 text-gray-700 font-400">
                        {" "}
                        Khách hàng ở khu vực nội thành: Chúng tôi cung cấp dịch
                        vụ giao hàng miễn phí trong phạm vi 15km tính từ cửa
                        hàng. Đối với khách hàng ở xa hơn, chúng tôi áp dụng mức
                        phí giao hàng là 30.000đ/1 lần. Đối với khách hàng ở khu
                        vực ngoại thành, chúng tôi sẽ áp dụng giá vận chuyển do
                        công ty đối tác quy định..
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
