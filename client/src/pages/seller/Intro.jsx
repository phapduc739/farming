import React, { useState, useEffect } from "react";
import Header from "../components/common/Header";
import BgNss from "../assets/images/nsv.png";
import BgC1 from "../assets/images/carousel.png";
import BgC2 from "../assets/images/carousel-01.png";
import BgC3 from "../assets/images/carousel-03.png";
import BgMango from "../assets/images/Mango.png";
import BgCafe from "../assets/images/cafe.png";
import BgCove from "../assets/images/cove.png";
import BgCarot from "../assets/images/carot.png";
import BgCachua from "../assets/images/cachua.png";
import BgCuden from "../assets/images/cuden.png";
import Dualeo from "../assets/images/dualeo.png";
import BgNs from "../assets/images/nss.png"
import BgCh1 from "../assets/images/Ch-1.png"
import BgCh2 from "../assets/images/Ch-2.png"
import BgCh3 from "../assets/images/Ch-3.png"
export default function Intro() {
    const [visibleImage, setVisibleImage] = useState(0); // visibleImage là vị trí của ảnh hiện tại
    const totalImages = 11; // Đã bao gồm 0->10, do vòng lặp từ 0
    const imagesPerPage = 4;

    const handleNextButton = () => {
        // Tính vị trí ảnh tiếp theo
        const nextImage = (visibleImage + 1) % totalImages;
        setVisibleImage(nextImage);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            const nextImage = (visibleImage + 1) % totalImages;
            setVisibleImage(nextImage);
        }, 3000); // Thay đổi thời gian chuyển ảnh ở đây (theo milliseconds)
        return () => clearInterval(interval);
    }, [visibleImage]);

    return (
        <>
            <Header />

            <section>
                <div className="w-[100%] h-[50px] bg-slate-200">
                    <div className="w-[1280px] h-full m-auto flex justify-between items-center  text-textDark">
                        <div className="z-10">
                            <h2>Giới Thiệu</h2>
                        </div>
                        <ol className="flex gap-x-[8px] font-medium text-[14px]">
                            <li>
                                <i className="fa-solid fa-house"></i>
                            </li>
                            <li>
                                <i className="fa-solid fa-chevron-right"></i>
                            </li>
                            <li>
                                <h4>Giới thiệu</h4>
                            </li>
                        </ol>
                    </div>
                </div>
            </section>

            <section className=' py-10 flex items-center z-0 justify-center'>
                <div className="container-fluid-lg">
                    <div className="row w-[100%] mx-[-12px] mt-1 mb-2 bg-white">
                        <div className="row w-full mx-0 relative">
                            <h1 className="text-center font-mono leading-normal text-green-500 text-4xl font-normal">
                                Chào mừng bạn đến với FamertMaket
                            </h1>
                            <h2 className="text-center font-sans leading-normal text-3xl font-normal">
                                Câu chuyện về chúng tôi
                            </h2>
                            <div className="other-log-in mt-4 relative text-center">
                                <div className="relative max-w-[350px] mx-auto">
                                    <div className=" bg-white uppercase px-4 py-2 inline-block relative z-10">
                                        <i className="fas fa-fan text-4xl hover:animate-spin"></i>
                                    </div>
                                    <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-400 z-0"></div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full mb-10">
                            <div className="grid grid-cols-2 gap-4 mt-6">
                                <div>
                                    <img src={BgNss} />
                                </div>
                                <div className="mt-3 ml-3 relative">
                                    <h3 className="letter-spacing-1 text-uppercase font-semibold text-2xl pb-3">
                                        Nông sản sạch
                                    </h3>
                                    <p className="text-base font-normal pb-3">
                                        Cửa hàng Nông Sản Sạch - FamertMaket.Com, là trang web cung cấp thực phẩm an toàn, hoàn toàn tự nhiên, và nông sản sạch cho mọi gia đình. Chúng tôi cam kết mang đến thực phẩm an toàn tới mọi gia đình Việt Nam. Các sản phẩm nổi bật bao gồm: trà, ngũ cốc dinh dưỡng, hạt dinh dưỡng, trái cây sấy, và nhiều sản phẩm khác.
                                    </p>
                                    <p className="text-base font-normal pb-3">
                                        Chúng tôi hướng đến mục tiêu xây dựng một cuộc sống an toàn và chất lượng cho cộng đồng tại Việt Nam. Hãy cùng nhau đồng lòng, chung tay xây dựng một cuộc sống an lành, bền vững cho mọi người.
                                    </p>
                                    <div className="w-full overflow-hidden relative mt-12 ml-[-80px]">
                                        <div className="flex items-start flex-wrap">
                                            {[...Array(imagesPerPage)].map((_, index) => {
                                                const imageIndex = (visibleImage + index) % totalImages;
                                                let imageSrc;
                                                switch (imageIndex) {
                                                    case 0:
                                                        imageSrc = BgC1;
                                                        break;
                                                    case 1:
                                                        imageSrc = BgC2;
                                                        break;
                                                    case 2:
                                                        imageSrc = BgC3;
                                                        break;
                                                    case 3:
                                                        imageSrc = BgMango;
                                                        break;
                                                    case 4:
                                                        imageSrc = BgCove;
                                                        break;
                                                    case 5:
                                                        imageSrc = BgCarot;
                                                        break;
                                                    case 6:
                                                        imageSrc = BgCachua;
                                                        break;
                                                    case 7:
                                                        imageSrc = BgCuden;
                                                        break;
                                                    case 8:
                                                        imageSrc = Dualeo;
                                                        break;
                                                    case 9:
                                                        imageSrc = BgCafe;
                                                        break;
                                                    case 10:
                                                        imageSrc = BgMango;
                                                        break;
                                                    default:
                                                        // Xử lý khi có nhiều hình ảnh hơn
                                                        break;
                                                }

                                                return (
                                                    <img
                                                        key={imageIndex}
                                                        className="w-[133px] h-[97px] px-2"
                                                        src={imageSrc}
                                                        alt={`Image ${imageIndex}`}
                                                    />
                                                );
                                            })}
                                        </div>
                                        <div className="cursor-pointer absolute top-2/4 right-5 rounded-full -translate-y-2/4 transform bg-slate-200 py-3 px-4" onClick={handleNextButton}>
                                            <i className="fa-solid fa-right-long"></i>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <section className=' py-10 bg-lime-200 '>
                <div className="container-fluid-lg">
                    <div className="row w-[100%] mx-[-12px] mt-1 mb-2">
                        <h1 className="text-center font-mono leading-normal text-green-500 text-4xl font-normal">
                            Tại sao phải chọn FamertMaket?
                        </h1>
                        <div className="other-log-in mt-4 relative text-center ">
                            <div className="relative max-w-[350px] mx-auto">
                                <div className=" bg-lime-200 uppercase px-4 py-2 inline-block relative z-10">
                                    <i className="fas fa-fan text-4xl hover:animate-spin"></i>
                                </div>
                                <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-400"></div>
                            </div>
                        </div>
                        <div className="grid grid-cols-3 gap-4 mt-6">
                            <div className="flex items-center gap-2  flex-col">
                                <div className="relative  mb-3">
                                    <div className="absolute top-1/2 transform -translate-y-1/2 ">
                                        <div className="bg-white rounded-full py-1 px-1.5 hover:bg-lime-200">
                                            <i className="fa-regular fa-heart text-4xl"></i>
                                        </div>
                                    </div>
                                    <div className="pl-[60px] pr-12 py-3">
                                        <h6 className="text-[18px] font-[500] leading-[1.5]">Dinh dưỡng cải thiện hơn.</h6>
                                        <p className="text-[14px] font-[400]">Cải thiện chế độ ăn uống với sự đa dạng hơn trong loại trái cây và rau quả hàng ngày.</p>
                                    </div>
                                </div>

                                <div className="relative  mb-3">
                                    <div className="absolute top-1/2 transform -translate-y-1/2">
                                        <div className="bg-white rounded-full py-1 px-1.5 hover:bg-lime-200">
                                            <i className="fas fa-seedling text-4xl"></i>
                                        </div>
                                    </div>
                                    <div className="pl-[60px] pr-12 py-3">
                                        <h6 className="text-[18px] font-[500] leading-[1.5]">Thông tin về nguồn gốc.</h6>
                                        <p className="text-[14px] font-[400]">Cam kết cung cấp nông sản hữu cơ an toàn, đảm bảo chất lượng và nguồn gốc rõ ràng.</p>
                                    </div>
                                </div>
                                <div className="relative  mb-3">
                                    <div className="absolute top-1/2 transform -translate-y-1/2 ">
                                        <div className="bg-white rounded-full py-1 px-1.5 hover:bg-lime-200">
                                            <i className="fas fa-star text-4xl"></i>
                                        </div>
                                    </div>
                                    <div className="pl-[60px] pr-[12px] py-3">
                                        <h6 className="text-[18px] font-[500] leading-[1.5]">Chất lượng tốt.</h6>
                                        <p className="text-[14px] font-[400]">Với việc trồng không sử dụng hóa chất độc hại, nông sản sạch đảm bảo chất lượng và an toàn cho sức khỏe của bạn.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center justify-center">
                                <img src={BgNs} className="w-[350px] h-[350px] bg-transparent" />
                            </div>
                            <div className="flex flex-col items-end gap-2">
                                <div className="relative  mb-3">
                                    <div className="pr-[60px] pl-[12px] py-3">
                                        <h6 className="text-[18px] font-[500] leading-[1.5]">Thay đổi tùy ý</h6>
                                        <p className="text-[14px] font-[400]">Tinh chỉnh phương pháp giao hàng chuẩn để loại bỏ các sản phẩm không phù hợp.</p>
                                    </div>
                                    <div className="absolute top-1/2 transform -translate-y-1/2 mr-0.5 right-0">
                                        <div className="bg-white rounded-full py-1 px-1.5 hover:bg-lime-200">
                                            <i className="fa-solid fa-truck text-black text-3xl "></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="relative  mb-3">
                                    <div className="pr-[60px] pl-[12px] py-3">
                                        <h6 className="text-[18px] font-[500] leading-[1.5]">Hỗ trợ cộng đồng địa phương.</h6>
                                        <p className="text-[14px] font-[400]">Mỗi lần mua nông sản sạch, bạn đang hỗ trợ người nông dân địa phương - một cách cộng đồng và bền vững.</p>
                                    </div>
                                    <div className="absolute top-1/2 transform -translate-y-1/2 mr-0.5 right-0">
                                        <div className="bg-white rounded-full py-1 px-1.5 hover:bg-lime-200">
                                            <i className="fas fa-hand-holding-heart text-black text-3xl "></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="relative  mb-3">
                                    <div className="pr-[60px] pl-[12px] py-3">
                                        <h6 className="text-[18px] font-[500] leading-[1.5]">Bảo vệ môi trường.</h6>
                                        <p className="text-[14px] font-[400]">Với phương pháp trồng hữu cơ, chúng ta chú trọng đến việc bảo vệ môi trường thông qua việc giảm sử dụng hóa chất và duy trì chất lượng nước, mang lại sản phẩm an toàn và bền vững.</p>
                                    </div>
                                    <div className="absolute top-1/2 transform -translate-y-1/2 mr-0.5 right-0">
                                        <div className="bg-white rounded-full py-1 px-1.5 hover:bg-lime-200">
                                            <i className="fas fa-tree text-black text-3xl "></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section >
            <section className=' py-10  '>
                <div className="container-fluid-lg">

                    <div className="row w-[100%] mx-[-12px] mt-1 mb-2 bg-white">
                        <div className="row w-full mx-0 relative pb-4">
                            <h1 className="text-center font-mono leading-normal text-green-500 text-4xl font-normal">
                                Cửa hàng FamertMaket
                            </h1>
                            <h2 className="text-center font-sans leading-normal text-3xl font-normal">
                                Hiện tại đã có các chi nhánh
                            </h2>
                            <div className="other-log-in mt-4 relative text-center">
                                <div className="relative max-w-[350px] mx-auto">
                                    <div className=" bg-white uppercase px-4 py-2 inline-block relative z-10">
                                        <i className="fas fa-fan text-4xl hover:animate-spin"></i>
                                    </div>
                                    <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-400 z-0"></div>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-3 gap-4 mt-4 ">
                            <div className="flex items-center flex-col">
                                <div><img className="w-[400px] h-[250px]" src={BgCh1} /></div>
                                <div className="ml-4">
                                    <h6 className="text-center py-4 text-[18px]  font-semibold">Hà Nội</h6>

                                    <ul className="flex">
                                        <li className="relative rounded-full mx-1 h-10 w-10 leading-10 text-gray-400 border border-gray-400 text-center flex items-center justify-center transition duration-300 hover:bg-green-200 group">
                                            <i className="fab fa-facebook"></i>
                                            <span className="opacity-0 group-hover:opacity-100 absolute bg-gray-300 text-white text-xs py-1 px-2 rounded top-0 mt-8 transition duration-300">Facebook</span>
                                        </li>

                                        <li className="relative rounded-full mx-1 h-10 w-10 leading-10 text-gray-400 border border-gray-400 text-center flex items-center justify-center transition duration-300 hover:bg-green-200 group">
                                            <i className="fab fa-google"></i>
                                            <span className="opacity-0 group-hover:opacity-100 absolute bg-gray-300 text-white text-xs py-1 px-2 rounded top-0 mt-8 transition duration-300">Google</span>
                                        </li>
                                        <li className="relative rounded-full mx-1 h-10 w-10 leading-10 text-gray-400 border border-gray-400 text-center flex items-center justify-center transition duration-300 hover:bg-green-200 group">
                                            <i className=" fab fa-pinterest"></i>
                                            <span className="opacity-0 group-hover:opacity-100 absolute bg-gray-300 text-white text-xs py-1 px-2 rounded top-0 mt-8 transition duration-300">Pinterest</span>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                            <div className="flex items-center flex-col">
                                <div><img className="w-[400px] h-[250px]" src={BgCh2} /></div>
                                <div className="ml-4">
                                    <h6 className="text-center py-4 text-[18px]  font-semibold">Hồ Chính Minh</h6>

                                    <ul className="flex">
                                        <li className="relative rounded-full mx-1 h-10 w-10 leading-10 text-gray-400 border border-gray-400 text-center flex items-center justify-center transition duration-300 hover:bg-green-200 group">
                                            <i className="fab fa-facebook"></i>
                                            <span className="opacity-0 group-hover:opacity-100 absolute bg-gray-300 text-white text-xs py-1 px-2 rounded top-0 mt-8 transition duration-300">Facebook</span>
                                        </li>

                                        <li className="relative rounded-full mx-1 h-10 w-10 leading-10 text-gray-400 border border-gray-400 text-center flex items-center justify-center transition duration-300 hover:bg-green-200 group">
                                            <i className="fab fa-google"></i>
                                            <span className="opacity-0 group-hover:opacity-100 absolute bg-gray-300 text-white text-xs py-1 px-2 rounded top-0 mt-8 transition duration-300">Google</span>
                                        </li>
                                        <li className="relative rounded-full mx-1 h-10 w-10 leading-10 text-gray-400 border border-gray-400 text-center flex items-center justify-center transition duration-300 hover:bg-green-200 group">
                                            <i className=" fab fa-pinterest"></i>
                                            <span className="opacity-0 group-hover:opacity-100 absolute bg-gray-300 text-white text-xs py-1 px-2 rounded top-0 mt-8 transition duration-300">Pinterest</span>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                            <div className="flex items-center flex-col">
                                <div><img className="w-[400px] h-[250px]" src={BgCh3} /></div>
                                <div className="ml-4">
                                    <h6 className="text-center py-4 text-[18px]  font-semibold">Cần Thơ</h6>

                                    <ul className="flex">
                                        <li className="relative rounded-full mx-1 h-10 w-10 leading-10 text-gray-400 border border-gray-400 text-center flex items-center justify-center transition duration-300 hover:bg-green-200 group">
                                            <i className="fab fa-facebook"></i>
                                            <span className="opacity-0 group-hover:opacity-100 absolute bg-gray-300 text-white text-xs py-1 px-2 rounded top-0 mt-8 transition duration-300">Facebook</span>
                                        </li>

                                        <li className="relative rounded-full mx-1 h-10 w-10 leading-10 text-gray-400 border border-gray-400 text-center flex items-center justify-center transition duration-300 hover:bg-green-200 group">
                                            <i className="fab fa-google"></i>
                                            <span className="opacity-0 group-hover:opacity-100 absolute bg-gray-300 text-white text-xs py-1 px-2 rounded top-0 mt-8 transition duration-300">Google</span>
                                        </li>
                                        <li className="relative rounded-full mx-1 h-10 w-10 leading-10 text-gray-400 border border-gray-400 text-center flex items-center justify-center transition duration-300 hover:bg-green-200 group">
                                            <i className=" fab fa-pinterest"></i>
                                            <span className="opacity-0 group-hover:opacity-100 absolute bg-gray-300 text-white text-xs py-1 px-2 rounded top-0 mt-8 transition duration-300">Pinterest</span>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>


            </section >

        </>
    );
}
