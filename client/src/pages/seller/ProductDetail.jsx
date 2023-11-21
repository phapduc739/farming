import React, { useState } from "react";
import TitleProduct from "../../components/Title/TitleProduct";
import Header from "../../components/common/Header";
import Bgdualeo from "../../assets/images/dualeo.png"
import ProductItems, { getRandomProducts, products } from "../../components/SelerDetail/Product-item";

export default function ProductDetail() {
    const randomProducts = getRandomProducts();
    const [product, setproduct] = useState(1)
    //state hiển thị nội dung
    const [productShow, setProductShow] = useState("Mô tả")

    //su li so luong sản phẩm
    const handleClickProduct = (e) => {
        if (e === 'increment') {
            setproduct(product + 1)
        }
        else if (e === 'decrement' && product > 1) {
            setproduct(product - 1)
        }
    }
    //xu li hiển thị nội dung
    const handleShow = (section) => {
        console.log("seclection", section);
        setProductShow(section);
    }


    return (<>
        <Header />
        <TitleProduct />

        <section className='py-[40px] '>
            <div className="w-full container-fluid-lg  mt-5 px-[250px]">
                <div className="grid  grid-cols-2 gap-4 border-b">

                    <div className="w-full flex justify-center items-center"><img src={Bgdualeo} className="w-[500px] h-[500px]" /></div>
                    <div className="relative">

                        <div className="border-b py-8">
                            <h2 className="text-[24px] font-bold mb-[14px]">Dưa leo</h2>
                            <div>
                                <span className="mb-4">
                                    <bdi className="font-[600] text-theme-color text-[18px]">{product * 50000}</bdi>
                                    <span className="font-[600] text-theme-color text-[18px]">đ</span>
                                </span>
                            </div>
                            <div className="mt-4" >
                                <p className="font-normal leading-[1.5] text-[16px] ">Dưa leo hiện nay được biết đến với sự chứa đựng của lariciresinol, pinoresinol, và secoisolariciresinol — ba loại lignan đã được nghiên cứu chặt chẽ với việc giảm nguy cơ mắc bệnh tim mạch, đồng thời còn được liên kết với giảm nguy cơ mắc một số loại ung thư, bao gồm ung thư vú, tử cung, buồng trứng, và tuyến tiền liệt.</p>

                            </div>
                        </div>

                        <div className="mb-5 py-5 px-5 border-b">
                            <from>
                                <div className=" flex   justify-around ">
                                    <div className="relative flex bg-them-gray  px-1 py-1 w-[200px] rounded-xl" >
                                        <label className="  w-full text-center px-4 py-3 text-[14px] ">{product}</label>
                                        <div className=" absolute top-1/2 left-[10px] transform -translate-y-1/2 text-[14px] bg-white px-[8px] py-[5px] rounded">
                                            <button type="button" onClick={() => handleClickProduct('decrement')}>
                                                <i className="fa-solid fa-minus text-theme-color"></i>
                                            </button>
                                        </div>
                                        <div className=" absolute right-[10px] top-1/2 transform -translate-y-1/2 text-[14px] bg-white px-[8px] py-[5px] rounded ">
                                            <button type="button" onClick={() => handleClickProduct('increment')}>
                                                <i className="fa-solid fa-plus text-theme-color"></i>
                                            </button>
                                        </div>
                                    </div>
                                    <div className=" w-[300px] text-center px-4 py-3 text-[18px] rounded-xl bg-theme-color">
                                        <button className="text-white">Thêm vào giỏ hàng</button>
                                    </div>
                                </div>
                            </from>
                        </div>
                        <div >
                            <table className="w-full">
                                <tbody>
                                    <tr className="uppercase  text-[16px] font-normal leading-normal ">
                                        <td className="py-[10px] min-w-min[120px]">Mã hàng:</td>
                                        <td className="text-text-black ">SDFVW65467</td>
                                    </tr>

                                    <tr className=" uppercase min-w-min[120px] text-[16px] font-normal leading-normal ">
                                        <td className="py-[10px] min-w-min[120px]">Loại:</td>
                                        <td className="text-text-black">Rau củ sạch</td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap border-b ">

                    <div className="w-1/4  ">
                        <ul className="border">
                            <li className={`px-5 py-5 uppercase font-bold text-theme-color ${productShow === "Mô tả" ? "active" : ""}`} onClick={() => handleShow("Mô tả")}>Mô tả</li>
                            <li className={`px-5 py-5 uppercase font-bold text-theme-color ${productShow === "Đánh Giá" ? "active" : ""}`} onClick={() => handleShow("Đánh Giá")}>Đánh Giá (0)</li>
                        </ul>
                    </div>
                    <div className="w-3/4 px-3 py-[25px] ">
                        {productShow === 'Mô tả' && (
                            <>
                                <h2 className="text-[24px] font-bold mb-[14px] text-theme-color">Mô tả</h2>
                                <p className="px-2 mb-5 mt-4 leading-normal leading-snug mb-2">Nông sản sạch tại FamersMarket Việt Nam canh tác rau củ, quả trái cây hữu cơ của Đồng bằng Sông Cữu Long theo 7 không 5 có </p>
                                <div className="px-2 font-normal">
                                    <p className="text-[18px] text-theme-color  leading-snug mb-2 ">Tiêu chí 7 Không.</p>
                                    <ul className="decimal text-[16px]  leading-normal ">
                                        <li>1. Không sử dụng giống biến đổi gen.</li>
                                        <li>2. Không dùng kích thích tăng trưởng.</li>
                                        <li>3. Không phân bón hóa học.</li>
                                        <li>4. Không sử dụng thuốc trừ sâu .</li>
                                        <li>5. Không sử dụng nước chưa được kiểm soát.</li>
                                        <li>6. Không sử dụng chất diệt cỏ</li>
                                        <li>7. Không sử dụng chất diệt mầm</li>
                                    </ul>
                                    <p className="text-[18px] text-theme-color  leading-snug mb-2 ">Tiêu chí 4 Có.</p>
                                    <ul className="decimal text-[16px]  leading-normal ">
                                        <li>1. Sản phẩm nông nghiệp trồng trên đất sạch  </li>
                                        <li>2. Giảm sử dụng phân vô cơ </li>
                                        <li>3. Sử dụng thuốc có hiệu quả </li>
                                        <li>4. Đánh giá và kiểm tra </li>
                                        <li>5. Sử dụng phân bò, dê, cừu,…</li>
                                    </ul>
                                </div>

                            </>
                        )}
                        {productShow === 'Đánh Giá' && (<>
                            <div>
                                <h2 className="text-[24px] font-bold mb-[14px] text-theme-color">Đánh Giá</h2>
                                <p className="px-2 mb-5 mt-4 leading-normal leading-snug mb-2">Chưa có đánh giá nào</p>
                                <p className="px-2 mb-5 mt-4 leading-normal leading-snug mb-2">Hảy là người đầu tiên đánh giá ""</p>
                            </div>
                        </>)}
                    </div>


                </div>
                <div>
                    <h2 className="text-[24px] font-bold mb-[14px] text-theme-color text-center">Những sản phẩm khác</h2>
                    <ProductItems products={randomProducts} />
                </div>
            </div>
        </section >
    </>
    )

}