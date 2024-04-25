import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../redux/appSlice";
import { Link, useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";
import { YOUTUBE_VIDEO_API, YOUTUBE_VIDEO_WATCH_API } from "../Utils/Constants";
import { formatCompactNumber, nFormatter } from "../Utils/helper";
import likeIcon from "../assets/like.svg";
import dislikeIcon from "../assets/dislike.svg";
import shareIcon from "../assets/share.svg";
import moreIcon from "../assets/more.svg";

const WatchPage = () => {
  const [video, setVideo] = useState({});
  const [relatedVideos, setRelatedVideos] = useState([]);
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  const dispatch = useDispatch();

  const getVideoDetails = async () => {
    const data = await Promise.all([
      fetch(YOUTUBE_VIDEO_WATCH_API + videoId),
      fetch(YOUTUBE_VIDEO_API),
    ]);
    const watchVideoJson = await data[0].json();
    const relVideoJson = await data[1].json();
    setVideo(watchVideoJson?.items[0]);
    setRelatedVideos(relVideoJson?.items);
    console.log(video);
    console.log(relatedVideos);
  };
  useEffect(() => {
    dispatch(closeMenu());
    getVideoDetails();
  }, [videoId]);

  return (
    <div className="px-10 mt-24 flex ">
      <div className="flex-grow-6">
        <div>
          <iframe
            className="rounded-2xl"
            width="724"
            height="407"
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <div className="p-2 m-2">
            <div className="font-bold text-lg">{video?.snippet?.title}</div>

            <div className="flex justify-between mt-2">
              <div className="flex">  
                <div className="flex">
                  <img
                    className="rounded-full w-10 h-10 "
                    src={video?.snippet?.thumbnails?.default?.url}
                    alt="avatar"
                  />

                  <div className=" flex-col ml-2">
                    <div className="font-bold ">
                      {video?.snippet?.channelTitle}
                    </div>
                    <div className="text-gray-700 text-[12px] ">
                      {formatCompactNumber(video?.statistics?.viewCount)}
                      Subscribers
                    </div>
                  </div>
                </div>
                <button className="bg-black text-white rounded-full ml-6 px-4 py-0 text-sm font-bold ">
                  Subscribe
                </button>
              </div>
              <div className="flex ">
                <button className="bg-gray-100 rounded-l-full px-4 hover:bg-gray-200 ">
                  <img className="inline-block " src={likeIcon} alt="likeBtn" /> {""}
                  {video?.statistics?.likeCount}
                </button>
                <button className="bg-gray-100 rounded-r-full px-4 hover:bg-gray-300 border-l-2 border-gray-200">
                  <img
                    className="inline-block"
                    src={dislikeIcon}
                    alt="dislikeBtn"
                  />
                </button>
                <button className="bg-gray-100 rounded-full px-4 hover:bg-gray-200 ml-2">
                  <img
                    className="inline-block"
                    src={shareIcon}
                    alt="shareBtn"
                  />
                  Share
                </button>
                <button className="bg-gray-100 rounded-full hover:bg-gray-200  ml-2">
                  <img
                    className="inline-block w-10 h-10"
                    src={moreIcon}
                    alt="moreBtn"
                  />
                </button>
              </div>
            </div>
          </div>
          <div className="w-[724px] h-[104px] bg-gray-100 rounded-lg">
            <div className="font-normal text-sm p-3">{video?.snippet?.title}</div>
          </div>

        </div>
        <div className="p-2 m-2">
       <CommentsContainer/>
        </div>
        </div>
        <div className="flex-grow-3">
          <div className="flex flex-col w-full">

        <div className="flex w-full">
          <LiveChat />
        </div>
      { relatedVideos?.map(video=> 
      <Link  key={video?.id} to={'/watch?v=' + video?.id} onClick={()=>window.scroll(0,0)}>
        <div className="flex mt-5 px-4">
          <img className="w-[168px] h-[94px] rounded-xl" src={video?.snippet?.thumbnails?.medium?.url} alt="thumbnail" />
          <ul className="ml-2 w-60">
            <li className="font-bold text-sm line-clamp-2">{video?.snippet?.title}</li>
            <li className="text-gray-500 text-sm">{video?.snippet?.channelTitle}</li>
            <li className="text-gray-500 text-sm">{nFormatter(video?.statistics?.viewCount)} {(Math.abs(new Date(video?.snippet?.publishedAt) - new Date()) / (60 * 60 * 24 * 1000)).toFixed(1)}days ago</li>
          </ul>
        </div>
        </Link>
      )}
          </div>
       
      </div>


    </div>
  );
};

export default WatchPage;

  // const isMenuOpen = useSelector(store => store.app.isMenuOpen)
  
