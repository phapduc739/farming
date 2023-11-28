import BgCafe from "../../../../assets/images/cafe.png";
import BgCove from "../../../../assets/images/cove.png";
import BgCarot from "../../../../assets/images/carot.png";
import BgCachua from "../../../../assets/images/cachua.png";
import BgCuden from "../../../../assets/images/cuden.png";
import Dualeo from "../../../../assets/images/dualeo.png";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

function Product() {
  const [products, setProducts] = useState([]);
  const [databaseChange, setDatabaseChange] = useState(false);

  const { user, userId, email, role, accessToken } = useSelector(
    (state) => state.user
  );

  const navigate = useNavigate();

  useEffect(() => {
    // Kiểm tra nếu không có accessToken hoặc userId, chuyển hướng đến trang đăng nhập
    if (!accessToken || !userId) {
      navigate("/login/seller");
    } else if (role !== "Seller") {
      navigate("/404"); // Chuyển hướng đến trang 404 nếu role không phải là admin
    } else {
      fetchData(); // Gọi hàm fetchData khi accessToken và userId có sẵn
    }
  }, [user, userId, email, role, accessToken, databaseChange]);

  const fetchData = () => {
    axios
      .get("http://localhost:4000/list/products")
      .then((response) => {
        setProducts(response.data);
        setDatabaseChange(!databaseChange);
      })
      .catch((error) => {
        console.error("Lỗi khi lấy danh sách danh mục:", error);
      });
  };
  const navigateToAddUser = () => {
    navigate("/seller-dashboard/add-product");
  };

  // Utility function to format price as Vietnamese đồng
  const formatPrice = (price) => {
    const formattedPrice = Number(price).toLocaleString("vi-VN", {
      style: "currency",
      currency: "VND",
    });

    return formattedPrice;
  };

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
                      <button
                        className="bg-primaryGreen flex justify-center items-center gap-2 rounded-[4px] py-[8px] px-[14px] text-white text-[14px] hover:bg-[#08886e] transition"
                        onClick={navigateToAddUser}
                      >
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
                  <div className=" rounded-lg overflow-hidden">
                    <table className="w-full table">
                      <thead className="pt-2 border-b border-solid border-inherit border-0">
                        <tr className="text-base font-semibold whitespace-nowrap min-w-[90px]">
                          <th
                            className="border border-solid border-inherit border-0 text-[16px] font-[600]"
                            scope="col"
                          >
                            Hình ảnh
                          </th>
                          <th
                            className="w-[151px] border border-solid border-inherit border-0 text-[16px] font-[600]"
                            scope="col"
                          >
                            Tên sản phẩm
                          </th>
                          <th
                            className="border border-solid border-inherit border-0 text-[16px] font-[600]"
                            scope="col"
                          >
                            Giá
                          </th>
                          <th
                            className="border border-solid border-inherit border-0 text-[16px] font-[600]"
                            scope="col"
                          >
                            Đơn vị tính
                          </th>
                          <th
                            className="border border-solid border-inherit border-0 text-[16px] font-[600]"
                            scope="col"
                          >
                            Kho hàng
                          </th>
                          <th
                            className="border border-solid border-inherit border-0 text-[16px] font-[600]"
                            scope="col"
                          >
                            Sữa/ Xóa
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {products
                          .sort((a, b) => b.id - a.id) // Sắp xếp theo id tăng dần
                          .map((row) => (
                            <tr
                              key={row.id}
                              className="text-center table-row align-middle whitespace-nowrap flex items-center border-b "
                            >
                              <td className="w-[90px] h-[72px] border border-solid border-inherit border-0">
                                <img
                                  src={`http://localhost:4000/${row.images[0]}`}
                                  className="w-[60px] h-[auto] mx-auto"
                                  alt="Hình ảnh sản phẩm"
                                />
                              </td>
                              <td className="w-[151px] border border-solid border-inherit border-0">
                                <h6 className="14px leading-[1.2] font-[400]">
                                  {row.name}
                                </h6>
                              </td>
                              <td className="w-[90px] h-[72px] border border-solid border-inherit border-0">
                                <h6 className="text-theme-color font-bold 14px leading-[1.2] ">
                                  {formatPrice(row.price)}
                                </h6>
                              </td>
                              <td className="w-[90px] h-[72px] border border-solid border-inherit border-0">
                                <h6 className="14px leading-[1.2] font-[400]">
                                  {row.unit}
                                </h6>
                              </td>
                              <td className="w-[90px] h-[72px] border border-solid border-inherit border-0">
                                <h6 className="14px leading-[1.2] font-[400]">
                                  {row.quantity}
                                </h6>
                              </td>
                              <td className="w-[90px] h-[72px] border border-solid border-inherit border-0">
                                <button className="py-1">
                                  <i className="fa-solid fa-pen-to-square  w-[19px] stroke-1  text-theme-color"></i>
                                  <i className="fa-solid fa-trash  w-[19px] stroke-1 text-red-500 ml-2 "></i>
                                </button>
                              </td>
                            </tr>
                          ))}
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

export default Product;
