import { createContext, useEffect, useState } from "react";
import { fetchDataFromApi } from "../utils/api";

export const FeedContext = createContext();

export const ContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [videosData, setVideosData] = useState([]);
  const [currentCategory, setCurrentCategory] = useState("New");
  const [mobileMenu, setMobileMenu] = useState(false);
  const [nextPageToken, setNextPageToken] = useState("");

  useEffect(() => {
    setNextPageToken("");
    fetchDataFromCurrentCategory(currentCategory);
  }, [currentCategory]);

  const fetchDataFromCurrentCategory = async (query) => {
    setIsLoading(true);
    try {
      const data = await fetchDataFromApi(`search?part=snippet&q=${query}`);
      setVideosData(data);
      setNextPageToken(data?.nextPageToken);
    } catch (error) {
      console.log("Error :: fetchDataFromCurrentCategory :: ", error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <FeedContext.Provider
      value={{
        isLoading,
        setIsLoading,
        currentCategory,
        setCurrentCategory,
        videosData,
        setVideosData,
        mobileMenu,
        setMobileMenu,
        nextPageToken,
        setNextPageToken,
      }}
    >
      {children}
    </FeedContext.Provider>
  );
};
