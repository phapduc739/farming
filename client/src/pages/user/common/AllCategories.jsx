import React, { useState } from "react";
import { Link } from "react-router-dom";
import IconList from "../../../assets/images/sort.png";
import { motion } from "framer-motion";

export default function AllCategories() {
  const CateList = [
    {
      name: "Lúa và ngũ cốc",
      imageIcon: "src/assets/images/lemon.png",
    },

    {
      name: "Rau củ",
      imageIcon: "src/assets/images/leaf.png",
    },

    {
      name: "Trái cây",
      imageIcon: "src/assets/images/carrot.png",
    },

    {
      name: "Sản phẩm chế biến",
      imageIcon: "src/assets/images/box.png",
    },

    {
      name: "Sản phẩm khác",
      imageIcon: "src/assets/images/cubes.png",
    },
  ];

  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const subCateAnimate = {
    enter: {
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.5,
      },
      display: "block",
    },
    exit: {
      opacity: 0,
      rotateX: -15,
      transition: {
        duration: 0.5,
        delay: 0.4,
      },
      transitionEnd: {
        display: "none",
      },
    },
  };

  return (
    <>
      <div className="z-10 relative">
        <motion.div
          className="w-[212px] bg-greenDark cursor-pointer px-[20px] py-[12px] rounded-[5px] text-white flex justify-center items-center gap-[12px]"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img src={IconList} alt="List" />
          <span className="text-[16px] font-semibold">Tất cả danh mục</span>
        </motion.div>
        <motion.div
          className="absolute top-[48px] w-[300px] h-auto p-[24px] bg-white shadow-4-canh rounded-[5px] sub-menu"
          initial="exit"
          animate={isHover ? "enter" : "exit"}
          variants={subCateAnimate}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <ul className="flex flex-col gap-[12px]">
            {CateList.map((category, index) => (
              <li key={index} className="w-full h-auto py-1 border">
                <Link className="flex justify-between items-center text-[16px] text-grayDark font-medium">
                  <div className="flex justify-start items-center gap-[12px]">
                    <img
                      className="w-[20px] h-[20px] object-fill"
                      src={category.imageIcon}
                      alt="Image Icon"
                    />
                    <p className="hover:text-">{category.name}</p>
                  </div>
                  <div className="">
                    <i className="fa-solid fa-angle-right"></i>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </>
  );
}
