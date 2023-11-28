function Setting() {
  return (
    <>
      <div className="contail-sell px-3">
        <div className="w-full h-[100%]  bg-them-gray flex  flex-wrap px-8 py-8  ">
          <div className=" w-full h-[auto]     rounded-md">
            <div className="tab-content " id="pills-tabContent">
              <div className="dashboard-home flex flex-col">
                <div className="title relative">
                  <h2 className="text-[26px] font-bold text-text2222 relative ">
                    Cài đặt của tôi
                  </h2>
                  <div className="title-leaf relative flex items-center justify-center mt-1 w-[120px] h-[30px]">
                    <div className="absolute left-0 w-[45px] h-px bg-theme-color z-10"></div>
                    <i className="relative fa-solid fa-seedling z-0 text-theme-color"></i>
                    <div className="absolute right-0 w-[45px] h-px bg-theme-color z-10"></div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="col-xxl-6 w-[840px] h-[436]  flex relative bg-white "> */}
            <div className="  rounded-md relative bg-white px-4 py-4 mt-4">
              <div className="dashboard-title mb-4">
                <h3 className=" leading-[1.3] relative font-semibold text-[20px]">
                  Thông báo
                </h3>
              </div>
              <div className="privacy-box">
                <div className="form-check custom-form-check custom-form-check-2 d-flex align-items-center">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="concern"
                    name="concern"
                  />
                  <label
                    className="form-check-label ms-2 text-[16px]"
                    htmlFor="desktop"
                  >
                    Hiển thị thông báo trên Desktop
                  </label>
                </div>
              </div>

              <div className="privacy-box">
                <div className="form-check custom-form-check custom-form-check-2 d-flex align-items-center">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="concern"
                    name="concern"
                  />
                  <label
                    className="form-check-label ms-2 text-[16px]"
                    htmlFor="enable"
                  >
                    Bật thông báo
                  </label>
                </div>
              </div>

              <div className="privacy-box">
                <div className="form-check custom-form-check custom-form-check-2 d-flex align-items-center">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="concern"
                    name="concern"
                  />
                  <label
                    className="form-check-label ms-2 text-[16px] text-[16px]"
                    htmlFor="activity"
                  >
                    Nhận thông báo về hoạt động của tôi
                  </label>
                </div>
              </div>

              <div className="privacy-box">
                <div className="form-check custom-form-check custom-form-check-2 d-flex align-items-center">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="concern"
                    name="concern"
                  />
                  <label
                    className="form-check-label ms-2 text-[16px]"
                    htmlFor="dnd"
                  >
                    DND
                  </label>
                </div>
              </div>

              <button className="btn theme-bg-color btn-md fw-bold mt-4 text-white bg-theme-color rounded-md">
                Lưu Thay Đổi
              </button>
            </div>

            <div className="rounded-md relative bg-white px-4 py-4 mt-4">
              <div className="">
                <div className="dashboard-title mb-4">
                  <h3 className=" leading-[1.3] relative font-semibold text-[20px]">
                    Vô hiệu hóa Tài khoản
                  </h3>
                </div>

                <div className="privacy-box">
                  <div className="form-check custom-form-check custom-form-check-2 d-flex align-items-center">
                    <input
                      className="form-check-input"
                      type="radio"
                      id="concern"
                      name="concern"
                    />
                    <label
                      className="form-check-label ms-2 text-[16px]"
                      htmlFor="concern"
                    >
                      Tôi có vấn đề về quyền riêng tư
                    </label>
                  </div>
                </div>

                <div className="privacy-box">
                  <div className="form-check custom-form-check custom-form-check-2 d-flex align-items-center">
                    <input
                      className="form-check-input"
                      type="radio"
                      id="temporary"
                      name="concern"
                    />
                    <label
                      className="form-check-label ms-2 text-[16px]"
                      htmlFor="temporary"
                    >
                      Đây là tạm thời
                    </label>
                  </div>
                </div>

                <div className="privacy-box">
                  <div className="form-check custom-form-check custom-form-check-2 d-flex align-items-center">
                    <input
                      className="form-check-input"
                      type="radio"
                      id="other"
                      name="concern"
                    />
                    <label
                      className="form-check-label ms-2 text-[16px]"
                      htmlFor="other"
                    >
                      Khác
                    </label>
                  </div>
                </div>

                <button className="btn theme-bg-color btn-md fw-bold mt-4 text-white bg-theme-color rounded-md">
                  Vô hiệu hóa Tài khoản
                </button>
              </div>
            </div>

            <div className="rounded-md relative bg-white px-4 py-4 mt-4">
              <div className="dashboard-bg-box">
                <div className="dashboard-title mb-4">
                  <h3 className=" leading-[1.3] relative font-semibold text-[20px]">
                    Xóa Tài khoản
                  </h3>
                </div>

                <div className="privacy-box">
                  <div className="form-check custom-form-check custom-form-check-2 d-flex align-items-center">
                    <input
                      className="form-check-input"
                      type="radio"
                      id="usable"
                      name="usable"
                    />
                    <label
                      className="form-check-label ms-2 text-[16px]"
                      htmlFor="usable"
                    >
                      Không còn sử dụng được
                    </label>
                  </div>
                </div>

                <div className="privacy-box">
                  <div className="form-check custom-form-check custom-form-check-2 d-flex align-items-center">
                    <input
                      className="form-check-input"
                      type="radio"
                      id="account"
                      name="usable"
                    />
                    <label
                      className="form-check-label ms-2 text-[16px]"
                      htmlFor="account"
                    >
                      Muốn chuyển sang tài khoản khác
                    </label>
                  </div>
                </div>

                <div className="privacy-box">
                  <div className="form-check custom-form-check custom-form-check-2 d-flex align-items-center">
                    <input
                      className="form-check-input"
                      type="radio"
                      id="other-2"
                      name="usable"
                    />
                    <label
                      className="form-check-label ms-2 text-[16px]"
                      htmlFor="other-2"
                    >
                      Khác
                    </label>
                  </div>
                </div>

                <button className="btn theme-bg-color btn-md fw-bold mt-4 text-white bg-theme-color rounded-md">
                  Xóa tài khoản
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Setting;
