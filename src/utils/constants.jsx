import { AiFillHome, AiOutlineFlag } from "react-icons/ai";
import { MdLocalFireDepartment, MdLiveTv } from "react-icons/md";
import { CgMusicNote } from "react-icons/cg";
import { FiFilm } from "react-icons/fi";
import { IoGameControllerSharp } from "react-icons/io5";
import { ImNewspaper } from "react-icons/im";
import { GiDiamondTrophy, GiEclipse } from "react-icons/gi";
import { RiLightbulbLine, RiFeedbackLine } from "react-icons/ri";
import { FiSettings, FiHelpCircle } from "react-icons/fi";

export const categories = [
  { name: "Home", icon: <AiFillHome />, type: "category" },
  { name: "Trending", icon: <MdLocalFireDepartment />, type: "category" },
  { name: "Music", icon: <CgMusicNote />, type: "category" },
  { name: "Films", icon: <FiFilm />, type: "category" },
  { name: "Live", icon: <MdLiveTv />, type: "category" },
  { name: "Gaming", icon: <IoGameControllerSharp />, type: "category" },
  { name: "News", icon: <ImNewspaper />, type: "category" },
  { name: "Sports", icon: <GiDiamondTrophy />, type: "category" },
  { name: "Learning", icon: <RiLightbulbLine />, type: "category" },
  {
    name: "Fashion & beauty",
    icon: <GiEclipse />,
    type: "category",
    divider: true,
  },
  { name: "Settings", icon: <FiSettings />, type: "menu" },
  { name: "Report History", icon: <AiOutlineFlag />, type: "menu" },
  { name: "Help", icon: <FiHelpCircle />, type: "menu" },
  { name: "Send feedback", icon: <RiFeedbackLine />, type: "menu" },
];

export const timeAgo = (dateString) => {
  const currentDate = new Date();
  const givenDate = new Date(dateString);

  const timeDifferenceInSeconds = (currentDate - givenDate) / 1000;

  if (timeDifferenceInSeconds < 60) {
    return "just now";
  } else if (timeDifferenceInSeconds < 3600) {
    const minutes = Math.floor(timeDifferenceInSeconds / 60);
    return `${minutes} ${minutes > 1 ? "minutes" : "minute"} ago`;
  } else if (timeDifferenceInSeconds < 86400) {
    const hours = Math.floor(timeDifferenceInSeconds / 3600);
    return `${hours} ${hours > 1 ? "hours" : "hour"} ago`;
  } else if (timeDifferenceInSeconds < 604800) {
    const days = Math.floor(timeDifferenceInSeconds / 86400);
    return `${days} ${days > 1 ? "days" : "day"} ago`;
  } else if (timeDifferenceInSeconds < 2592000) {
    const weeks = Math.floor(timeDifferenceInSeconds / 604800);
    return `${weeks} ${weeks > 1 ? "weeks" : "week"} ago`;
  } else if (timeDifferenceInSeconds < 31536000) {
    const months = Math.floor(timeDifferenceInSeconds / 2592000);
    return `${months} ${months > 1 ? "months" : "month"} ago`;
  } else {
    const years = Math.floor(timeDifferenceInSeconds / 31536000);
    return `${years} ${years > 1 ? "years" : "year"} ago`;
  }
};
