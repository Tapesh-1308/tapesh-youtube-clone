import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";

import { AiOutlineLike } from "react-icons/ai";

import { FeedContext } from "../context/FeedContext";
import { fetchDataFromApi } from "../utils/api";
import RelatedVideoCard from "../components/RelatedVideoCard";
import useScrollTop from "../hooks/useScrollTop";
import useMobileMenuHandler from "../hooks/useMobileMenuHandler";

const VideoDetails = () => {
  const { videoId } = useParams();
  const { setIsLoading } = useContext(FeedContext);
  const [videoData, setVideoData] = useState(null);
  const [relatedData, setRelatedData] = useState(null);

  const fetchVideoDetails = async () => {
    setIsLoading(true);

    try {
      const { items } = await fetchDataFromApi(
        `videos?part=snippet,statistics&id=${videoId}`
      );

      setVideoData(items[0]);
    } catch (error) {
      console.log("Error :: fetchVideoDetails :: ", error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchRelatedVideos = async () => {
    setIsLoading(true);

    try {
      const { items } = await fetchDataFromApi(
        `search?part=snippet&relatedToVideoId=${videoId}&type=video`
      );

      setRelatedData(items);
    } catch (error) {
      console.log("Error :: fetchRelatedVideos :: ", error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchVideoDetails();
    fetchRelatedVideos();
  }, [videoId]);

  useScrollTop();

  const { disabled } = useMobileMenuHandler();

  if (!videoData) return;

  const {
    snippet: { title, description, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = videoData;

  return (
    <div
      className={`flex justify-center flex-row bg-black md:ml-[240px] ${
        disabled ? "pointer-events-none" : ""
      }`}
    >
      <div className="w-full max-w-[1280px] flex flex-col lg:flex-row">
        <div className="flex flex-col lg:w-[calc(100%-350px)] xl:w-[calc(100%-400px)] px-4 py-3 lg:py-6">
          <div className="h-[225px] md:h-[330px] lg:h-[400px] xl:h[550px] lg:ml-0 mr-[-16px] lg:mr-0">
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${videoId}`}
              controls
              width="100%"
              height="100%"
              style={{ backgroundColor: "#000" }}
              playing
            />
          </div>
          <div className="text-white font-bold text-sm md:text-xl mt-4 line-clamp-2">
            {title}
          </div>
          <div className="text-white/80 text-xs md:text-sm mt-4">
            {description.slice(0, 200) + "..."}
          </div>
          <div className="flex justify-between flex-col md:flex-row mt-4">
            <Link
              to={`/channel/${channelId}`}
              className="text-white text-md font-semibold flex items-center"
            >
              {channelTitle}
            </Link>
            <div className="flex text-white mt-4 md:mt-0">
              <div className="flex items-center justify-center h-11 px-6 rounded-3xl bg-white/[0.15]">
                <AiOutlineLike className="text-xl text-white mr-2" />
                {`${parseInt(likeCount).toLocaleString()} Likes`}
              </div>
              <div className="flex items-center justify-center h-11 px-6 rounded-3xl bg-white/[0.15] ml-4">
                {`${parseInt(viewCount).toLocaleString()} Views`}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col py-6 px-4 lg:overflow-y-auto lg:w-[350px] xl:w-[400px] bg-black">
          {relatedData?.map(
            (item, index) =>
              item.id.videoId && <RelatedVideoCard key={index} video={item} />
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoDetails;
