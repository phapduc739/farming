import { useState } from "react";
import LanguageVietNam from "../../../assets/images/vn.png";
import LanguageEnglish from "../../../assets/images/en.png";

export default function LanguageSwitcher() {
  const [showSelect, setShowSelect] = useState(false);

  const [selectLanguages, setSelectLanguages] = useState("vi");

  const toggleDropdown = () => {
    setShowSelect(!showSelect);
  };

  const handleSelectLanguages = (language) => {
    setSelectLanguages(language);
    setShowSelect(false);
  };

  return (
    <>
      <div
        className="z-40 relative h-full text-14px-white flex justify-center items-center gap-[12px] cursor-pointer"
        onClick={toggleDropdown}
      >
        <img
          className="w-[20px] h-[15px] object-cover"
          src={selectLanguages === "vi" ? LanguageVietNam : LanguageEnglish}
          alt="vi"
        />
        {selectLanguages === "vi" ? (
          <span>Vietnamese</span>
        ) : (
          <span>English</span>
        )}
        <i className="fa-solid fa-angle-down"></i>
      </div>

      {showSelect && (
        <div className="z-40 absolute top-[40px] right-0 w-[160px] h-auto bg-white border-[1px] border-rgba(0,0,0,0.15) rounded-[5px] transition-opacity opacity-500">
          <ul className="p-[12px]">
            <button
              className="w-full h-[30px] flex justify-start items-center gap-[6px] text-[14px] mb-[4px] hover:bg-grayLight"
              onClick={() => handleSelectLanguages("vi")}
            >
              <img
                className="w-[20px] h-[15px] object-cover"
                src={LanguageVietNam}
                alt="vi"
              />
              <span>Vietnamese</span>
              {selectLanguages === "vi" && (
                <i className="fa-solid fa-check text-greenPrimary"></i>
              )}
            </button>
            <button
              className="w-full h-[30px] flex justify-start items-center gap-[6px] text-[14px] hover:bg-grayLight"
              onClick={() => handleSelectLanguages("en")}
            >
              <img
                className="w-[20px] h-[15px] object-cover"
                src={LanguageEnglish}
                alt="vi"
              />
              <span>English</span>
              {selectLanguages === "en" && (
                <i className="fa-solid fa-check text-greenPrimary"></i>
              )}
            </button>
          </ul>
        </div>
      )}
    </>
  );
}
