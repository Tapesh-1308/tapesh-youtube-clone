import { useContext, useState } from "react";
import { FeedContext } from "../context/FeedContext";
import VideoCard from "../components/VideoCard";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchDataFromApi } from "../utils/api";
import useScrollTop from "../hooks/useScrollTop";

const Feed = () => {
  const {
    isLoading,
    videosData,
    setVideosData,
    currentCategory,
    nextPageToken,
    setNextPageToken,
  } = useContext(FeedContext);

  const fetchNextData = async () => {
    try {
      setTimeout(async () => {
        const res = await fetchDataFromApi(
          `search?part=snippet&pageToken=${nextPageToken}&q=${currentCategory}`
        );
        const existingIds = videosData?.items?.map((item) => item.id.videoId);
        const newItems = res.items.filter(
          (item) => !existingIds.includes(item.id.videoId)
        );

        setVideosData({
          ...videosData,
          items: [...videosData?.items, ...newItems],
          nextPageToken: res.nextPageToken,
        });
        setNextPageToken(res.nextPageToken);
      }, 1000);
    } catch (error) {
      console.log("Error :: fetchNextData :: ", error.message);
    }
  };

  useScrollTop();

  return (
    <div className="pt-14 w-full bg-black md:ml-[240px]">
      <InfiniteScroll
        dataLength={videosData?.items?.length || 0}
        next={fetchNextData}
        hasMore={!!videosData?.nextPageToken}
        loader={<h4 className="text-white">Loading...</h4>}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-5">
          {!isLoading &&
            videosData?.items?.map(
              (video, idx) =>
                video.id.videoId &&
                video.snippet.channelId && <VideoCard video={video} key={idx} />
            )}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default Feed;
