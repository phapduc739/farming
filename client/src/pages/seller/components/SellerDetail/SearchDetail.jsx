import { useState } from "react";
import axios from "axios";

import { Link } from "react-router-dom";

export default function SearchDetail() {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [isFocused, setIsFocused] = useState(false);

  const [isSuggestionClicked, setIsSuggestionClicked] = useState(false);

  const handleChange = async (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    try {
      const response = await axios.get(
        `http://localhost:4000/api/search?term=${term}`
      );
      setSuggestions(response.data);
      setIsSuggestionClicked(false);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching suggestions:", error);
    }
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    // if (!isSuggestionClicked) {
    //   setIsFocused(false);
    // }
  };

  const handleSuggestionClick = () => {
    setIsSuggestionClicked(true);
  };

  const formatPrice = (price) => {
    const formattedPrice = Number(price).toLocaleString("vi-VN", {
      style: "currency",
      currency: "VND",
    });

    return formattedPrice;
  };

  return (
    <>
      <section className="py-[80px] vendore-breadscrumb-section">
        <div className="w-full container-fluid-lg  mt-5 px-[250px]">
          <div className="row flex  justify-center ">
            <div className="wrapper mt-30">
              <div className="mb-[17px] w-full">
                <h1 className="text-center font-mono leading-1 text-5xl font-normal">
                  Thông tin nhà cung cấp
                </h1>
              </div>

              <div className="relative mb-4 w-full">
                <form
                  action=""
                  className="w-full "
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                >
                  <input
                    type="text"
                    className="pl-10 pr-12 py-3 border rounded-lg w-[800px] outline-none"
                    placeholder="Tìm kiếm nông sản ở đây..."
                    value={searchTerm}
                    onChange={handleChange}
                  />
                  <span className=" text-green-500 absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </span>

                  <button className="absolute inset-y-0 right-0 px-4 py-2 bg-green-700 text-white  rounded-lg">
                    Tìm Kiếm
                  </button>
                </form>

                {/* Hiển thị danh sách gợi ý khi có focus và có suggestions */}
                {isFocused && suggestions.length > 0 && (
                  <ul className="absolute top-[40px] left-0 z-40 mt-2 p-4 w-[700px] bg-white border border-gray-300 rounded-b-[5px] overflow-hidden">
                    {suggestions.map((item) => (
                      <Link
                        to={`/product-detail/${item.id}`}
                        key={item.id}
                        className="p-2 hover:bg-gray-100 cursor-pointer flex items-center"
                        onClick={handleSuggestionClick}
                      >
                        <div>
                          <p className="text-[16px] text-primaryGreen font-semibold">
                            {item.name}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </ul>
                )}

                {/* Hiển thị placeholder khi có focus nhưng không có suggestions */}
                {isFocused && suggestions.length === 0 && (
                  <div className="absolute top-[40px] left-0 z-40 mt-2 p-4 w-[700px] bg-white border border-gray-300 rounded-b-[5px] overflow-hidden">
                    <p className="text-[14px] text-gray-500">
                      Hãy nhập tên sản phẩm bạn muốn tìm kiếm...
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
