import React from "react";
import Header from "../../pages/user/common/Header";
import BgContact from "../../assets/images/contact-us.png";
import Footer from "../user/common/Footer";
import { Link } from "react-router-dom";
export default function Contact() {
  return (
    <>
      <Header />
      <section className="mt-5">
        <div className=" w-[100%] h-auto bg-them-gray z-10">
          <div className="w-[1280px] h-full m-auto flex justify-between items-center py-[32px] text-textDark">
            <div className="z-10 ">
              <h2 className="font-bold text-[24px]">Liên hệ với chúng tôi</h2>
            </div>

            <ol className="flex gap-x-[8px] font-medium text-[14px] text-text7777 ">
              <li>
                <Link to="/">
                  <i className="fa-solid fa-house text-[14px]"></i>
                </Link>
              </li>
              <li>
                <i className="fa-solid fa-chevron-right "></i>
              </li>
              <li>
                <h4 className="">Liên hệ với chúng tôi</h4>
              </li>
            </ol>
          </div>
        </div>
      </section>
      <section className="login-section py-10  flex relative items-center z-0 justify-center ">
        <div className="container-fluid-lg  ">
          <div className="row w-[100%]   mx-[-12px]  relative grid grid-cols-2   ">
            <div className="left-contact px-5 ">
              <div className="left-row  ">
                <div className="flex items-center justify-center    ">
                  <img className="w-3/5 h-3/5" src={BgContact} />
                </div>
                <div className="px-3  ">
                  <div className="contact-title mt-4 relative mb-[29px] ">
                    <div className="relative">
                      <h3 className="text-[24px] font-semibold custom-h3 relative">
                        Liên hệ với chúng tôi
                      </h3>
                      <div className="absolute w-[20%] h-[2px] bottom-[-5px] left-0 bg-theme-color"></div>
                    </div>
                  </div>
                  <div className="contact-info  grid grid-cols-2 row mx-[-12px] mt-[24px] ">
                    <div className="px-[14px] pb-[6px]">
                      <div className="flex w-[100%] mb-2 flex-wrap bg-them-gray h-[auto] relative pl-[38px] pr-[24px] py-[24px] ">
                        <div className="absolute top-1/2 transform -translate-y-1/2 left-[-21px] bg-theme-color p-3 rounded-lg flex items-center">
                          <i className="fa-solid fa-phone text-white "></i>
                        </div>
                        <div className="w-full">
                          <h4 className="w-full text-[17px] font-[600]">
                            Số điện thoại
                          </h4>
                          <p className="w-full text-[14px] text-text7777 leading-[1.5]">
                            034.856.8954
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="px-[14px] ">
                      <div className="flex w-[100%] mb-2 flex-wrap bg-them-gray h-[auto] relative pl-[38px] pr-[24px] py-[24px] ">
                        <div className="absolute top-1/2 transform -translate-y-1/2 left-[-21px] bg-theme-color p-3 rounded-lg flex items-center">
                          <i className="fa-solid fa-envelope text-white "></i>
                        </div>
                        <div className="w-full ">
                          <h4 className=" w-full text-[17px] font-[600]">
                            Email
                          </h4>
                          <p className="w-full text-[14px] text-text7777 leading-[1.5]">
                            phapduc739@gmail.com
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="px-[14px] pb-[6px]">
                      <div className="flex w-[100%] mb-2 flex-wrap bg-them-gray h-[auto] relative pl-[38px] pr-[24px] py-[24px] ">
                        <div className="absolute top-1/2 transform -translate-y-1/2 left-[-21px] bg-theme-color p-3 rounded-lg flex items-center">
                          <i className="fa-solid fa-location-dot text-white "></i>
                        </div>
                        <h4 className="w-full text-[17px] font-[600]">
                          Địa chỉ
                        </h4>
                        <p className="w-full text-[14px] text-text7777 leading-[1.5]">
                          30,Quang Trung,Thị Trấn Vân Đình,Huyện Ứng Hòa,TP. Hà Nội
                        </p>
                      </div>
                    </div>
                    <div className="px-[14px] ">
                      <div className="flex w-[100%] mb-2 flex-wrap bg-them-gray h-[auto] relative pl-[38px] pr-[24px] py-[24px] ">
                        <div className="absolute top-1/2 transform -translate-y-1/2 left-[-21px] bg-theme-color p-3 rounded-lg flex items-center">
                          <i className="fa-solid fa-business-time text-white "></i>
                        </div>
                        <h4 className="w-full text-[17px] font-[600]">
                          Thời gian làm việc
                        </h4>
                        <p className="w-full text-[14px] text-text7777 leading-[1.5]">
                          Thứ 2 đến Thứ 6 từ 8h00 đến 18h00
                        </p>
                        <p className="w-full text-[14px] text-text7777 leading-[1.5]">
                          Thứ 7 và Chủ nhật từ 8h00 đến 17h00
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="px-5">
              <div className="right bg-them-gray   h-auto">
                <div className="input-box px-[30px] py-[50px]">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col">
                      <label className="mb-2 text-[16px] text-text7777">
                        Tên
                      </label>
                      <div className="custom-phone relative mb-[24px] mt-2 flex items-center">
                        <input
                          className="form-control py-4 pl-10 pr-3   w-[100%] leading-normal text-[14px] font-normal outline-none"
                          type="text"
                          placeholder="Nhập tên"
                        />
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                          <i className="fa-solid fa-user text-text7777 text-[14px]"></i>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <label className="mb-2 text-[16px] text-text7777">
                        Họ
                      </label>
                      <div className="custom-phone relative mb-[24px] mt-2 flex items-center">
                        <input
                          className="form-control py-4 pl-10 pr-3   w-[100%] leading-normal text-[14px] font-normal outline-none"
                          type="text"
                          placeholder="Nhập Họ"
                        />
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                          <i className="fa-solid fa-user text-text7777 text-[14px]"></i>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col">
                      <label className="mb-2 text-[16px] text-text7777">
                        Địa chỉ email
                      </label>
                      <div className="custom-email relative mb-[24px] mt-2 flex items-center">
                        <input
                          className="form-control py-4 pl-10 pr-3   w-[100%] leading-normal text-[14px] font-normal outline-none"
                          type="text"
                          placeholder="Nhập địa chỉ email "
                        />
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                          <i className="fa-solid fa-envelope text-text7777 text-[14px]"></i>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <label className="mb-2 text-[16px] text-text7777">
                        Nhập số điện thoại
                      </label>
                      <div className="custom-phone relative mb-[24px] mt-2 flex items-center">
                        <input
                          className="form-control py-4 pl-10 pr-3   w-[100%] leading-normal text-[14px] font-normal outline-none"
                          type="text"
                          placeholder="Nhập số điện thoại "
                        />
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                          <i className="fa-solid fa-phone text-text7777 text-[14px]"></i>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mb-md-4 mb-3 custom-form w-100%">
                    <div className="flex flex-col">
                      <label className="mb-2 text-[16px] text-text7777">
                        Nội dung
                      </label>
                      <div className="custom-mess flex items-center w-full mt-2 relative">
                        <textarea
                          className="w-full leading-normal h-[230px] text-[14px] pl-10 pt-3 font-normal outline-none"
                          placeholder="Gửi thông tin cho chúng tôi"
                        ></textarea>
                        <div className=" absolute top-[10px] left-2">
                          <i className="fa-solid fa-message ml-2 text-text7777 text-[14px]"></i>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-end">
                    <button
                      className="font-semibold text-white bg-red-500 text-base px-3 py-3 hover:bg-red-600"
                      type="submit"
                    >
                      Gửi cho chúng tôi
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <iframe
                // src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.931036000762!2d105.76355697459503!3d10.0225498726472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a088309ec7d6bd%3A0xb6e319fd6f819200!2zSGXMiW0gMjI5IMSQLiAzIFRow6FuZyAyLCBIxrBuZyBM4bujaSwgTmluaCBLaeG7gXUsIEPhuqduIFRoxqEsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1699115473551"
                src="https://www.google.com/maps/embed?pb=!4m15!1m8!3m7!1s0x31344af57fddf3a9:0x3cfbdfb3ebc13bf2!2zQ2FvIFRow6BuaCwg4buobmcgSMOyYSwgSMOgIE7hu5lp!3b1!8m2!3d20.7665002!4d105.7321831!16s%2Fg%2F1hb_f4_8t!3m5!1s0x31344b349a911e9d:0x34053f381bccfb79!8m2!3d20.7575241!4d105.7384169!16s%2Fg%2F11j2hvwxrn"
                width="1280"
                height="450"
                style={{ border: "0" }}
                allowfullscreen
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
