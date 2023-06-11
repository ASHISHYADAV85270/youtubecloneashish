import React, { useContext } from "react";
import LeftNavMenuItems from "./LeftNavMenuItems";
import { categories } from "../utils/constants";
import { Context } from "../context/contextApi";
import { useNavigate } from "react-router-dom";
const LeftNav = () => {
  const { selectedCategories, setSelectedCategories, mobileMenu } =
    useContext(Context);

  const navigate = useNavigate();

  const clickHandler = (name, type) => {
    switch (type) {
      case "category":
        return setSelectedCategories(name);
      case "home":
        return setSelectedCategories(name);
      case "menu":
        return false;
      default:
        break;
    }
  };

  return (
    <div
      className={`md:block w-[240px] overflow-y-auto h-full py-4 bg-black absolute md:relative z-10 translate-x-[-240px] md:translate-x-0 transition-all  
      ${mobileMenu ? "translate-x-[0]" : ""}`}
    >
      <div className="flex px-5 flex-col">
        {categories.map((item) => {
          return (
            <React.Fragment key={item.name}>
              <LeftNavMenuItems
                text={item.type === "home" ? "Home" : item.name}
                icon={item.icon}
                action={() => {
                  clickHandler(item.name, item.type);
                  navigate("/");
                }}
                className={`${
                  selectedCategories === item.name ? "bg-white/[0.15]" : " "
                }`}
              />
              {item.divider && <hr className="my-5 border-white/[0.2]"></hr>}
            </React.Fragment>
          );
        })}
        <hr className="my-5 border-white/[0.2]"></hr>
        <div className="text-white/[0.5] text-[12px]">
          Clone by : ASHISH YADAV
        </div>
      </div>
    </div>
  );
};

export default LeftNav;
