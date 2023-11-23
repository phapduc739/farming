import React, { useState } from "react";

import ProductItem from "./Product-item";
// import BgA from "../../assets/images/qua-mit.png"
// import BgB from "../../assets/images/mang-cau.png"
// import BgC from "../../assets/images/"
// import BgD from "../../assets/images"
// import BgE from "../../assets/images"
// import BgF from "../../assets/images"
// import BgJ from "../../assets/images"
// import BgH from "../../assets/images"
// import BgI from "../../assets/images"
// import BgK from "../../assets/images"
// import BgL from "../../assets/images"
// import BgM from "../../assets/images"
// import BgN from "../../assets/images"
// import BgO from "../../assets/images"


// import BgP from "../../assets/images"
export default function Product() {
    const [selectedItem, setSelectedItem] = useState("Tất cả sản phẩm");
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(!isClicked);
    };


    const handleItemClick = (item) => {
        setSelectedItem(item);
        setIsClicked(false);
    };

    return (
        <>
            <div className="px-3 w-full">
                <div className="flex items-center mb-[14px]">
                    <h5>Sắp xếp:</h5>
                    <div className="dropdown ml-[10px] relative">
                        <button className="dropdown-toggle bg-them-gray px-[15px] py-[9px] w-[300px] overflow-hidden flex justify-between items-center" type="button" id="dropdownMenuButton1" onClick={handleClick}>
                            <span className="truncate">{selectedItem}</span>
                            <i className="fa-solid fa-angle-down"></i>
                        </button>
                        {isClicked && (
                            <ul className="dropdown-menu cursor-pointer absolute z-50 min-w-[10rem] top-30 left-0 p-[0.5rem] text-left list-none bg-white border border-gray-200 rounded">
                                <li onClick={() => handleItemClick("Phổ biến nhất")}>Phổ biến nhất</li>
                                <li onClick={() => handleItemClick("Theo mức độ đánh giá")}>Theo mức độ đánh giá</li>
                                <li onClick={() => handleItemClick("Mới nhất")}>Mới nhất</li>
                                <li onClick={() => handleItemClick("Thứ tự theo giá: từ thấp đến cao")}>Thứ tự theo giá: từ thấp đến cao</li>
                                <li onClick={() => handleItemClick("Thứ tự theo giá: cao thấp đến thấp")}>Thứ tự theo giá: cao thấp đến thấp</li>
                            </ul>
                        )}
                    </div>
                </div>
                <div >
                    <ProductItem />
                </div>


            </div >

        </>
    );
}
