import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { SlMenu } from "react-icons/sl";
import { IoIosSearch } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import { FiBell } from "react-icons/fi";
import { CgClose } from "react-icons/cg";
import { VscChromeClose } from "react-icons/vsc";

import { FeedContext } from "../context/FeedContext";

import Loader from "./Loader";
import ytLogo from "../assets/yt-logo.png";
import ytLogoMobile from "../assets/yt-logo-mobile.png";

const Header = () => {
  const { isLoading, mobileMenu, setMobileMenu } = useContext(FeedContext);
  const [query, setQuery] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e, searchTerm) => {
    e.preventDefault();

    if (searchTerm.length > 0) navigate(`search/${searchTerm}`);
  };

  return (
    <div className="sticky top-0 z-10 flex flex-row items-center justify-between h-14 px-4 md:px-5 bg-white dark:bg-black">
      {isLoading && <Loader />}

      <div className="flex h-5 items-center">
        <div
          className="flex md:hidden md:mr-6 cursor-pointer items-center justify-center h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]"
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          {mobileMenu ? (
            <CgClose className="text-white text-xl" />
          ) : (
            <SlMenu className="text-white text-xl" />
          )}
        </div>

        <Link to="/" className="flex h-5 items-center">
          <img src={ytLogo} alt="logo" className="h-full hidden md:block" />
          <img src={ytLogoMobile} alt="logo" className="h-full md:hidden" />
        </Link>
      </div>

      <form
        className="group flex items-center"
        onSubmit={(e) => handleSubmit(e, query)}
      >
        <div className="flex items-center h-8 md:h-10 md:ml-10 md:pl-5 border border-[#303030] rounded-l-3xl group-focus-within:border-blue-500 md:group-focus-within:ml-5 md:group-focus-within:pl-0">
          <div className="w-10 items-center justify-center hidden group-focus-within:md:flex">
            <IoIosSearch className="text-white text-xl" />
          </div>
          <input
            type="text"
            className="bg-transparent outline-none text-white pr-5 pl-5 md:pl-0 w-40 md:group-focus-within:pl-0 md:w-64 lg:w-[500px]"
            placeholder="Search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          {query.length > 0 && (
            <VscChromeClose
              className="text-white/80 mr-2 cursor-pointer"
              onClick={() => setQuery("")}
            />
          )}
        </div>

        <button
          type="submit"
          className="w-[40px] md:w-[60px] h-8 md:h-10 flex items-center justify-center border border-l-0 border-[#303030] rounded-r-3xl bg-white/[0.1]"
        >
          <IoIosSearch className="text-white text-xl" />
        </button>
      </form>
      <div className="flex items-center">
        <div className="hidden md:flex">
          <div className="flex items-center justify-center h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]">
            <RiVideoAddLine className="text-white text-xl cursor-pointer" />
          </div>
          <div className="flex items-center justify-center ml-2 h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]">
            <FiBell className="text-white text-xl cursor-pointer" />
          </div>
        </div>
        <div className="flex h-8 w-8 overflow-hidden rounded-full md:ml-4">
          <img src="https://xsgames.co/randomusers/assets/avatars/female/67.jpg" />
        </div>
      </div>
    </div>
  );
};

export default Header;
