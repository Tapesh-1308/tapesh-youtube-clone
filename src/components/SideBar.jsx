import { Fragment, useContext } from "react";
import { FeedContext } from "../context/FeedContext";
import { categories } from "../utils/constants";
import { useNavigate } from "react-router-dom";

const SideBar = () => {
  const { mobileMenu, currentCategory, setCurrentCategory } =
    useContext(FeedContext);

  const navigate = useNavigate();

  const handleNavigation = (name, type) => {
    if (type === "category") setCurrentCategory(name === "Home" ? "New" : name);
    navigate("/");
  };

  return (
    <div
      className={`pt-14 md:block w-[240px] overflow-y-auto h-full py-4 bg-black absolute md:fixed z-10 md:z-0 translate-x-[-240px] md:translate-x-0 transition-all ${
        mobileMenu ? "translate-x-[0px]" : ""
      }`}
    >
      <div className="flex px-5 gap-2 flex-col">
        {categories.map((item) => (
          <Fragment key={item.name}>
            <div
              className={`text-white text-sm cursor-pointer h-10 flex items-center px-3 mb-[1px] rounded-lg hover:bg-white/[0.15] ${
                currentCategory === item.name ? "bg-white/[0.15]" : ""
              }`}
              onClick={() => handleNavigation(item.name, item.type)}
            >
              <span className="text-xl mr-5">{item.icon}</span>
              {item.name}
            </div>
            {item.divider && <hr className="my-5 border-white/[0.2]" />}
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
