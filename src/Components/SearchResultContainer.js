import React, { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_VIDEO_WITH_QUERY_API } from "../Utils/Constants";
import { useDispatch, useSelector } from "react-redux";
import { openMenu } from "../redux/appSlice";
import { Link, useSearchParams } from "react-router-dom";
import { formatPublishedDate } from "../Utils/helper";

  const SearchResultContainer = () => {
    const isMenuOpen = useSelector(store =>store.app.isMenuOpen)
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const [searchedVideos, setSearchedVideos] = useState([]);

  let searchQuery = searchParams.get("search_query");

  useEffect(() => {
    dispatch(openMenu());
    getSearchedVideoList();
  }, [searchQuery]);

  const getSearchedVideoList = async () => {
    const data = await fetch(YOUTUBE_SEARCH_VIDEO_WITH_QUERY_API + searchQuery);
    const json = await data.json();
    setSearchedVideos(json?.items);
    console.log(json?.items);
  };

  return (
    <div className="col-span-11 mt-10 px-3">
    <div className={`flex flex-col items-center px-3 ${!isMenuOpen ? "" : "ml-[280px]"}`}>
    <div className="p-2 m-2">
      {searchedVideos?.map((video) => (
        <Link key={video?.id?.videoId} to={"/watch?v=" + video.id.videoId}>
          <div className=" flex p-2 m-1">
            <img
              className="rounded-xl w-[500px] h-[280px]"
              src={video?.snippet?.thumbnails.high.url}
            />
            <ul className="ml-5 w-full py-2">
              <li className="font-bold">{video?.snippet?.title}</li>
              <li className="text-gray-500 text-sm">
                100 views {formatPublishedDate(video?.snippet?.publishTime)}
              </li>

              <li className="text-gray-500 py-2 text-sm">
              <img className="rounded-full h-6 w-6 inline-block mr-2" src={video?.snippet?.thumbnails?.default?.url} alt="avatar"/>
                {video?.snippet?.channelTitle}
              </li>
              <li className="py-2 w-full text-gray-500 text-sm">
                {video?.snippet.description}  
              </li>
            </ul>
          </div>
        </Link>
      ))}
    </div>
    </div>
    </div>
  );
};

export default SearchResultContainer;
