import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FeedContext } from "../context/FeedContext";
import { fetchDataFromApi } from "../utils/api";
import SearchResultVideoCard from "../components/SearchResultVideoCard";
import InfiniteScroll from "react-infinite-scroll-component";
import useScrollTop from "../hooks/useScrollTop";

const SearchResult = () => {
  const { searchTerm } = useParams();
  const [data, setData] = useState(null);
  const { setIsLoading } = useContext(FeedContext);
  const [nextPageToken, setNextPageToken] = useState("");

  const fetchSearchResults = async () => {
    setIsLoading(true);

    try {
      setTimeout(async () => {
        const res = await fetchDataFromApi(
          `search?part=snippet&q=${searchTerm}`
        );
        setData(res);
        setNextPageToken(res.nextPageToken);
      }, 1000);
    } catch (error) {
      console.log("Error :: fetchSearchResults :: ", error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchNextPageResults = async () => {
    try {
      const res = await fetchDataFromApi(
        `search?part=snippet&pageToken=${nextPageToken}&q=${searchTerm}}`
      );

      setData({
        ...data,
        items: [...data?.items, ...res.items],
        nextPageToken: res.nextPageToken,
      });
      setNextPageToken(res.nextPageToken);
    } catch (error) {
      console.log("Error :: fetchNextPageResults :: ", error.message);
    }
  };

  useEffect(() => {
    setNextPageToken("");
    fetchSearchResults();
  }, [searchTerm]);
  useScrollTop();
  return (
    <div className="pt-14 w-full bg-black md:ml-[240px]">
      <InfiniteScroll
        dataLength={data?.items?.length || 0}
        next={fetchNextPageResults}
        hasMore={!!data?.nextPageToken}
        loader={<h4 className="text-white">Loading...</h4>}
        className="overflow-y-auto "
      >
        <div className="grid grid-cols-1 gap-2 p-5">
          {data?.items?.map(
            (video, idx) =>
              video.id.videoId && (
                <SearchResultVideoCard key={idx} video={video} />
              )
          )}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default SearchResult;
