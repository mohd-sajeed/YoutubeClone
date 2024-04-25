import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { YOUTUBE_VIDEO_API } from "../Utils/Constants";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer"
import { useSelector } from "react-redux";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const isMenuOpen = useSelector(store => store.app.isMenuOpen)

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();
    // console.log(json.items);
    setVideos(json?.items);
  };
  
  useEffect(() => {
    getVideos();
  }, []);

  if(!videos?.length) return <Shimmer/>
  return (
    <div className={`flex flex-wrap justify-center ${!isMenuOpen ? "" : "ml-[280px]"}`}>
      {videos.map((video) => (
        <Link key={video.id} to={"/watch?v=" + video.id}>
          <VideoCard  info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
