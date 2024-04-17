import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { fetchDataFromApi } from "../utils/api";
import { FeedContext } from "../context/FeedContext";
import VideoCard from "../components/VideoCard";
import useScrollTop from "../hooks/useScrollTop";
import useMobileMenuHandler from "../hooks/useMobileMenuHandler";

const ChannelDetails = () => {
  const [channelData, setChannelData] = useState(null);
  const [channelVideos, setChannelVideos] = useState(null);
  const { channelId } = useParams();
  const { setIsLoading } = useContext(FeedContext);

  useScrollTop();

  const fetchChannelData = async () => {
    setIsLoading(true);
    try {
      const res = await fetchDataFromApi(
        `channels?part=snippet&id=${channelId}`
      );
      setChannelData(res?.items[0]);
    } catch (error) {
      console.log("Error :: fetchChannelData :: ", error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchChannelVideosData = async () => {
    setIsLoading(true);
    try {
      const res = await fetchDataFromApi(
        `search?channelId=${channelId}&part=snippet%2Cid&order=date`
      );
      setChannelVideos(res?.items);
    } catch (error) {
      console.log("Error :: fetchChannelData :: ", error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchChannelData();
    fetchChannelVideosData();
  }, [channelId]);

  const { handleMobileMenu } = useMobileMenuHandler();
  if (!channelData || !channelVideos) return;
  return (
    <div className="pt-14 md:ml-[240px] min-h-screen" onClick={handleMobileMenu}>
      <div className="relative">
        <div className="flex justify-center items-center rounded-lg w-[356px] md:w-[320px] h-[326px] mx-auto shadow-none">
          <div className="flex flex-col justify-center items-center text-white">
            <img
              src={channelData?.snippet?.thumbnails?.high?.url}
              alt={channelData?.snippet?.title}
              className="rounded-full h-[180px] w-[180px] mb-2 border border-gray-300"
            />
            <h6 className="text-lg">{channelData?.snippet?.title}</h6>
            {channelData?.statistics?.subscriberCount && (
              <p className="text-base font-semibold text-gray-500">
                {parseInt(
                  channelData?.statistics?.subscriberCount
                ).toLocaleString("en-US")}{" "}
                Subscribers
              </p>
            )}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-5 ">
        {channelVideos?.map(
          (video, idx) => video.id.videoId && <VideoCard key={idx} video={video} />
        )}
      </div>
    </div>
  );
};

export default ChannelDetails;
