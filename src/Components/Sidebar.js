import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import homeIcon from "../assets/home.svg"
import shortsIcon from "../assets/shorts.svg"
import subscriptionsIcon from   "../assets/subscriptions.svg"
import historyIcon from "../assets/history.svg"
import playlistIcon from "../assets/playlist.svg"
import yourVideosIcon from "../assets/videos.svg"
import watchLaterIcon from "../assets/watchLater.svg"
import likedVideosIcon from  "../assets/likedVideos.svg"
import trendingIcon from "../assets/trending.svg"
import shoppingIcon from "../assets/shopping.svg"
import musicIcon  from "../assets/music.svg"
import moviesIcon  from "../assets/movies.svg"
import liveIcon from "../assets/live.svg"
import gamingIcon from "../assets/gaming.svg"
import newsIcon from "../assets/news.svg"
import sportsIcon from "../assets/sports.svg"
import coursesIcon from "../assets/courses.svg"
import fashionIcon from "../assets/fashion&beauty.svg"
import podcastIcon from "../assets/podcasts.svg"
import redliveIcon from "../assets/red-live.svg"
import showMoreIcon from "../assets/showMore.svg"
import ytPremiumIcon from "../assets/yt-premium.svg"
import ytStudioIcon from "../assets/yt-studio.svg"
import ytMusicIcon from "../assets/yt-music.svg"
import ytKidsIcon from "../assets/yt-kids.svg"
import settingsIcon from "../assets/settings.svg"
import reportHistoryIcon from "../assets/history.svg"
import helpIcon from "../assets/help.svg"
import sendFeedbackIcon from "../assets/feedback.svg"

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  // Early Return Pattern
  if (!isMenuOpen) return null;

  return (
    <div className="p-5 bg-white  max-h-screen hover:overflow-y-scroll overflow-hidden overscroll-contain fixed w-[280px] z-50 top-12">
      <ul className="px-3 ">
        <li className="hover:bg-gray-200 rounded-lg cursor-pointer p-2 "><Link to="/"><img className="inline-block  mr-5 " src={homeIcon} alt="home" />Home</Link></li>
        <li className="hover:bg-gray-200 rounded-lg cursor-pointer p-2 "><img className="inline-block mr-5" src={shortsIcon} alt="shorts" />Shorts</li>
        <li className="hover:bg-gray-200 rounded-lg cursor-pointer p-2 "><img className="inline-block mr-5" src={subscriptionsIcon} alt="subscriptions" />Subscriptions</li>
      </ul>
      <hr className="border border-b-gray-200" />
      <h1 className="font-bold pt-5">You</h1>
      <ul className="px-3">
        <li className="hover:bg-gray-200 rounded-lg cursor-pointer p-2"><img  className="inline-block mr-5 "src={historyIcon} alt="history"/>History</li>
        <li className="hover:bg-gray-200 rounded-lg cursor-pointer p-2"><img  className="inline-block mr-5 "src={playlistIcon} alt=""/>Playlist</li>
        <li className="hover:bg-gray-200 rounded-lg cursor-pointer p-2"><img  className="inline-block mr-5 "src={yourVideosIcon} alt=""/>Your videos</li>
        <li className="hover:bg-gray-200 rounded-lg cursor-pointer p-2"><img  className="inline-block mr-5 "src={watchLaterIcon} alt=""/>Watch later</li>
        <li className="hover:bg-gray-200 rounded-lg cursor-pointer p-2"><img  className="inline-block mr-5 "src={likedVideosIcon} alt=""/>Liked Videos</li>
      </ul>
<hr className="border border-b-gray-200" />
<h1 className="font-bold">Subscriptions</h1>
<ul className="px-3">
  <li className="hover:bg-gray-200 rounded-lg cursor-pointer p-2">Scary Fun <img className = "inline-block mr-5" alt="scary fun" src={redliveIcon}/></li>
  <li className="hover:bg-gray-200 rounded-lg cursor-pointer p-2">Crime Tak <img className = "inline-block mr-5" alt="crime tak" src={redliveIcon}/></li>
  <li className="hover:bg-gray-200 rounded-lg cursor-pointer p-2">Show More... <img className = "inline-block mr-5" alt="showmore" src={showMoreIcon}/></li>
</ul>
<hr className="border border-b-gray-200"/>
      <h1 className="font-bold pt-5">Explore</h1>
      <ul className="px-3">
        <li className="hover:bg-gray-200 rounded-lg cursor-pointer p-2"><img className="inline-block mr-5 " src={trendingIcon} alt="trending"/>Trending</li>
        <li className="hover:bg-gray-200 rounded-lg cursor-pointer p-2"><img className="inline-block mr-5 " src={shoppingIcon} alt="shopping"/>Shopping</li>
        <li className="hover:bg-gray-200 rounded-lg cursor-pointer p-2"><img className="inline-block mr-5 " src={musicIcon} alt="music"/>Music</li>
        <li className="hover:bg-gray-200 rounded-lg cursor-pointer p-2"><img className="inline-block mr-5 " src={moviesIcon} alt="movies"/>Movies</li>
        <li className="hover:bg-gray-200 rounded-lg cursor-pointer p-2"><img className="inline-block mr-5 " src={liveIcon} alt="live"/>Live</li>
        <li className="hover:bg-gray-200 rounded-lg cursor-pointer p-2"><img className="inline-block mr-5 " src={gamingIcon} alt="gaming"/>Gaming</li>
        <li className="hover:bg-gray-200 rounded-lg cursor-pointer p-2"><img className="inline-block mr-5 " src={newsIcon} alt="news"/>News</li>
        <li className="hover:bg-gray-200 rounded-lg cursor-pointer p-2"><img className="inline-block mr-5 " src={sportsIcon} alt="sports"/>Sports</li>
        <li className="hover:bg-gray-200 rounded-lg cursor-pointer p-2"><img className="inline-block mr-5 " src={coursesIcon} alt="courses"/>Courses</li>
        <li className="hover:bg-gray-200 rounded-lg cursor-pointer p-2"><img className="inline-block mr-5 " src={fashionIcon} alt="fashion"/>Fashion & Beauty</li>
        <li className="hover:bg-gray-200 rounded-lg cursor-pointer p-2"><img className="inline-block mr-5 " src={podcastIcon} alt="podcast"/>Podcast</li>
      </ul>
      <hr  className="border border-b-gray-200"/>
      <h1 className="font-bold">More from Youtube</h1>
      <ul className="px-3">
        <li className="hover:bg-gray-200 rounded-lg cursor-pointer p-2"><img className="inline-block mr-5" src={ytPremiumIcon} alt="premium"/>Youtube Premium</li>
        <li className="hover:bg-gray-200 rounded-lg cursor-pointer p-2"><img className="inline-block mr-5" src={ytStudioIcon} alt="studio"/>Youtube Studio</li>
        <li className="hover:bg-gray-200 rounded-lg cursor-pointer p-2"><img className="inline-block mr-5" src={ytMusicIcon} alt="music"/>Youtube Music</li>
        <li className="hover:bg-gray-200 rounded-lg cursor-pointer p-2"><img className="inline-block mr-5" src={ytKidsIcon} alt="kids"/>Youtube Kids</li>
      </ul>
      <hr className="border border-b-gray-200"/>

      <ul>
        <li className="hover:bg-gray-200 rounded-lg cursor-pointer p-2"><img className="inline-block mr-5" src={settingsIcon} alt=""/>Settings</li>
        <li className="hover:bg-gray-200 rounded-lg cursor-pointer p-2"><img className="inline-block mr-5" src={reportHistoryIcon} alt=""/>Report history</li>
        <li className="hover:bg-gray-200 rounded-lg cursor-pointer p-2"><img className="inline-block mr-5" src={helpIcon} alt=""/>Help</li>
        <li className="hover:bg-gray-200 rounded-lg cursor-pointer p-2"><img className="inline-block mr-5" src={sendFeedbackIcon} alt=""/>Send feedback</li>
      </ul>
    </div>
  );
};

export default Sidebar;
