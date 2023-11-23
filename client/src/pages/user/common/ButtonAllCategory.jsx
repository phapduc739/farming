import { useState, useEffect } from "react";
import { AlignLeft } from "react-feather";
import { Link } from "react-router-dom";
import axios from "axios";

export default function ButtonAllCategory() {
  const [isHovered, setIsHovered] = useState(false);
  const [categories, setCategories] = useState([]);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/list/categories"
        );
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div
      className="header-bottom-left relative group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button className="menu-list flex justify-start items-center gap-[15px] bg-primaryGreen px-[28px] py-[14px] rounded-[5px]">
        <AlignLeft size={24} color="white" />
        <span className="text-[18px] text-white font-semibold">
          Tất cả danh mục
        </span>
      </button>

      {isHovered && (
        <div className="absolute z-50 top-[54px] left-0 flex flex-col gap-3 w-[300px] py-4 px-7 bg-white border rounded-md shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
          {categories.map((category) => (
            <Link
              to={`/category/detail/${category.id}`}
              key={category.id}
              className="flex items-center mb-2 transition-transform duration-300 ease-in-out transform hover:scale-105"
            >
              <img
                src={`http://localhost:4000/${category.image}`}
                alt={category.name}
                className="w-7 h-7 object-cover mr-2 border"
              />
              <div className="">
                <p className="text-[14px] text-textGray font-[500]">
                  {category.name}
                </p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
