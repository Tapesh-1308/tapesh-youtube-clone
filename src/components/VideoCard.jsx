import { Link } from "react-router-dom";
import { timeAgo } from "../utils/constants";
import useMobileMenuHandler from "../hooks/useMobileMenuHandler";

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  const { disabled, handleMobileMenu } = useMobileMenuHandler();
  return (
    <Link to={!disabled && `/video/${videoId}`} onClick={handleMobileMenu}>
      <div className="flex flex-col mb-8">
        <div className="h-48 md:h-40 md:rounded-xl overflow-hidden">
          <img
            src={snippet?.thumbnails?.high?.url}
            alt="thumbnail"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="flex text-white mt-3">
          <div className="flex items-start">
            <div className="flex h-9 w-9 rounded-full overflow-hidden">
              {/* <img
                className="h-full w-full object-cover"
                src={snippet?.thumbnails?.high?.url}
                alt="logo"
              /> */}
            </div>
            <div className="flex flex-col ml-3 overflow-hidden">
              <span className="text-sm font-bold line-clamp-2">
                {snippet?.title}
              </span>
              <Link
                to={`/channel/${snippet?.channelId}`}
                className="text-[12px] font-semibold mt-2 text-white/[0.7] flex items-center"
              >
                {snippet?.channelTitle}
              </Link>
              <div className="flex text-[12px] font-semibold text-white/[0.7] truncate overflow-hidden">
                <span className="truncate">
                  {timeAgo(snippet?.publishedAt)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default VideoCard;
