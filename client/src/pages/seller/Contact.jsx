import React from 'react'
import Header from '../../components/common/Header'
import BgContact from "../../assets/images/contact-us.png"
export default function Contact() {
  return <>
    <Header />
    <section>
      <div className=" w-[100%] h-[50px] bg-slate-200">
        <div className="w-[1280px] h-full m-auto flex justify-between items-center  text-textDark">

          <div className="z-10 "><h2>Liên hệ với chúng tôi </h2></div>


          <ol className="flex gap-x-[8px] font-medium text-[14px]">
            <li>
              <i className="fa-solid fa-house"></i>
            </li>
            <li>
              <i className="fa-solid fa-chevron-right"></i>
            </li>
            <li>
              <h4>Liên hệ với chúng tôi </h4>
            </li>
          </ol>

        </div>
      </div>
    </section>
    <section className='login-section py-10  flex relative items-center z-0 justify-center '  >
      <div className="container-fluid-lg  ">
        <div className="row w-[100%]   mx-[-12px]  relative grid grid-cols-2   ">

          <div className='left-contact '>
            <div className="left-row  ">
              <div className="flex items-center justify-center  px-3  ">
                <img className='w-3/5 h-3/5' src={BgContact} />
              </div>
              <div className='px-3  '>

                <div className="contact-title mt-4 relative mb-[29px] ">
                  <div className="relative">
                    <h3 className='text-[24px] font-semibold custom-h3 relative'>Liên hệ với chúng tôi</h3>
                    <div className="absolute w-[20%] h-[2px] bottom-[-5px] left-0 bg-emerald-500"></div>
                  </div>
                </div>
                <div className='contact-info  grid grid-cols-2 row mx-[-12px] mt-[24px] '>
                  <div className='px-[14px] pb-[6px]'>
                    <div className='flex w-[100%] mb-2 flex-wrap bg-slate-100 h-[auto] relative pl-[38px] pr-[24px] py-[24px] '>
                      <div className="absolute top-1/2 transform -translate-y-1/2 left-[-21px] bg-green-600 p-3 rounded-lg flex items-center">
                        <i className="fa-solid fa-phone text-white "></i>
                      </div>
                      <div className='w-full'>
                        <h4 className='w-full'>Số điện thoại</h4>
                        <p className='w-full'>1900.555.437</p>
                      </div>
                    </div>
                  </div>

                  <div className='px-[14px] pt-[6px]'>
                    <div className='flex w-[100%] mb-2 flex-wrap bg-slate-100 h-[auto] relative pl-[38px] pr-[24px] py-[24px] '>
                      <div className="absolute top-1/2 transform -translate-y-1/2 left-[-21px] bg-green-600 p-3 rounded-lg flex items-center"><i className="fa-solid fa-envelope text-white "></i></div>
                      <div className='w-full '>
                        <h4 className='w-[100%]'>Email</h4>
                        <p className='w-[100%]'>farmer2418@gmail.com</p>
                      </div>
                    </div>
                  </div>
                  <div className='px-[14px] pb-[6px]'>
                    <div className='flex w-[100%] mb-2 flex-wrap bg-slate-100 h-[auto] relative pl-[38px] pr-[24px] py-[24px] '>
                      <div className="absolute top-1/2 transform -translate-y-1/2 left-[-21px] bg-green-600 p-3 rounded-lg flex items-center"><i className="fa-solid fa-location-dot text-white "></i></div>
                      <h4 className='w-[100%]'>Địa chỉ</h4>
                      <p className='w-[100%]'>137,Đường 3/2,Phường An Khánh,Quận Xuân Khánh,TP.Cần Thơ</p>
                    </div>
                  </div>
                  <div className='px-[14px] pt-[6px]'>
                    <div className='flex w-[100%] mb-2 flex-wrap bg-slate-100 h-[auto] relative pl-[38px] pr-[24px] py-[24px] '>
                      <div className="absolute top-1/2 transform -translate-y-1/2 left-[-21px] bg-green-600 p-3 rounded-lg flex items-center"><i className="fa-solid fa-business-time text-white "></i></div>
                      <h4 className='w-[100%]'>Thời gian làm việc</h4>
                      <p className='w-[100%]'>Thứ 2 đến Thứ 6 từ 8h00 đến 18h00</p>
                      <p className='w-[100%]'>Thứ 7 và Chủ nhật từ 8h00 đến 17h00</p>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>

          <div className='right bg-gray-200 px-3 ml-[72px] mr-[72px] px-3 h-auto'>
            <div className="input-box px-[30px] py-[50px]">

              <div className='grid grid-cols-2 gap-4'>
                <div className="input-row">
                  <label htmlFor="exampleFormControlInput text-[18px]" className='mb-2 text-[18px] text-gray-700'>Họ</label>
                  <div className="custom-input relative mb-[24px] mt-2">
                    <input
                      type="text"
                      className="form-control py-2 pr-2 pl-[32px] w-[100%] leading-normal text-[14px] font-normal"
                      id="exampleFormControlInput"
                      placeholder="Nhập họ"
                    />
                    <div className="absolute inset-y-0 left-3 top-1/2 transform -translate-y-1/2"><i className="fa-solid fa-user"></i></div>
                  </div>
                </div>
                <div className="input-row">
                  <label className='mb-2 text-[18px] text-gray-700'> Tên</label>
                  <div className='custom-last relative mb-[24px] mt-2 text-[18px]'>
                    <input className="form-control py-2 pr-2 pl-[32px] w-[100%] leading-normal text-[14px] font-normal" type='text' placeholder='Nhập tên' />
                    <div className="absolute inset-y-0 left-3 top-1/2 transform -translate-y-1/2"><i className="fa-solid fa-user"></i></div>
                  </div>
                </div>

                <div className="input-row">
                  <label className='mb-2 text-[18px] text-gray-700'> Địa chỉ email</label>
                  <div className='custom-email relative mb-[24px] mt-2 text-[18px]'>
                    <input className="form-control py-2 pr-2 pl-[32px] w-[100%] leading-normal text-[14px] font-normal" type='text' placeholder='Nhập địa chỉ email ' />
                    <div className="absolute inset-y-0 left-3 top-1/2 transform -translate-y-1/2"><i className="fa-solid fa-envelope"></i></div>
                  </div>
                </div>
                <div className="input-row">
                  <label className='mb-2 text-[18px] text-gray-700'>Nhập số điện thoại</label>
                  <div className='custom-phone relative mb-[24px] mt-2'>
                    <input className='form-control py-2 pr-2 pl-[32px] w-[100%] leading-normal text-[14px] font-normal' type='text' placeholder='Nhập số điện thoại ' />
                    <div className="absolute inset-y-0 left-3 top-1/2 transform -translate-y-1/2"><i className="fa-solid fa-phone"></i></div>
                  </div>
                </div>
              </div>

              <div className="mb-md-4 mb-3 custom-form w-100%">
                <div className="input-row">
                  <label className='mb-2 text-[18px] text-gray-700'>Nội dung</label>
                  <div className='custom-mess w-full mt-2'>
                    <textarea className='w-full custom-hight leading-normal h-[100px] text-[14px] font-normal'></textarea>
                  </div>
                </div>
              </div>

              <div className='flex items-center justify-end'>
                <button className='font-semibold text-white bg-red-500 text-base px-3 py-3 hover:bg-red-600' type='submit'>Gửi cho chúng tôi</button>
              </div>
            </div>


          </div>
          <div className='mt-4'>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.931036000762!2d105.76355697459503!3d10.0225498726472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a088309ec7d6bd%3A0xb6e319fd6f819200!2zSGXMiW0gMjI5IMSQLiAzIFRow6FuZyAyLCBIxrBuZyBM4bujaSwgTmluaCBLaeG7gXUsIEPhuqduIFRoxqEsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1699115473551"
              width="1280"
              height="450"
              style={{ border: '0' }}
              allowfullscreen
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>



    </section >

  </>
}
