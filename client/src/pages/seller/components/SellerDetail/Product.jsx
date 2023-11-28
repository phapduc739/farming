import React, { useState } from "react";
// import ProductItems from "./Product-item";
import ProductCategory from "./ProductCategory";
import ProductItems from "./Product-item";
import { useParams } from "react-router-dom";
export default function Product() {
  const [selectedItem, setSelectedItem] = useState("Tất cả sản phẩm");
  const [isClicked, setIsClicked] = useState(false);
  const { id } = useParams();
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
            <button
              className="dropdown-toggle bg-them-gray px-[15px] py-[9px] w-[300px] overflow-hidden flex justify-between items-center"
              type="button"
              id="dropdownMenuButton1"
              onClick={handleClick}
            >
              <span className="truncate">{selectedItem}</span>
              <i className="fa-solid fa-angle-down"></i>
            </button>
            {isClicked && (
              <ul className="dropdown-menu cursor-pointer absolute z-50 min-w-[10rem] top-30 left-0 p-[0.5rem] text-left list-none bg-white border border-gray-200 rounded">
                <li onClick={() => handleItemClick("Tất cả")}>Tất cả</li>
                <li
                  onClick={() =>
                    handleItemClick("Thứ tự theo giá: từ thấp đến cao")
                  }
                >
                  Thứ tự theo giá: từ thấp đến cao
                </li>
                <li
                  onClick={() =>
                    handleItemClick("Thứ tự theo giá: cao thấp đến thấp")
                  }
                >
                  Thứ tự theo giá: cao thấp đến thấp
                </li>
              </ul>
            )}
          </div>
        </div>
        <div>
          {/* <ProductItems selectedItem={selectedItem} /> */}
          <ProductCategory selectedItem={selectedItem} />
        </div>
      </div>
    </>
  );
}
