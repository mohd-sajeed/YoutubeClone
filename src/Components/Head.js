import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../redux/appSlice";
import { YOUTUBE_SEARCH_API } from "../Utils/Constants";
import { cacheResults } from "../redux/searchSlice";
import bellIcon from "../assets/bell.svg";
import createIcon from "../assets/create.svg";
import searchIcon from "../assets/search.svg";
import mikeIcon from "../assets/mike.svg";
import youtubeIcon from "../assets/youtube.svg";
import {  useNavigate } from "react-router-dom";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const getSearchSuggestions = async () => {
    console.log(searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    // console.log(json[1]);
    setSuggestions(json[1]);
    dispatch(cacheResults({ [searchQuery]: json[1] }));
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const handleToggleMenu = () => {
    dispatch(toggleMenu());
  };

  const handleSuggestion = (event) => {
    setSearchQuery(event.target.innerText)
    setShowSuggestions(false);
    navigate("/results?search_query=" + encodeURI(event.target.innerText))

  }

  if (!suggestions) return null;

  return (
    <>
      <div className=" flex flex-row justify-between items-center fixed px-4 py-3  z-50 top-0 left-0 right-0 bg-white">
        <div className="flex flex-row items-center ">
          <div className="cursor-pointer hover:rounded-full hover:bg-gray-200 ">
            <img
              onClick={() => handleToggleMenu()}
              className="h-7 w-7 m-1"
              alt="menu"
              src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp"
            />
          </div>
          <a href="/">
            <img
              className="h-5 mx-5"
              alt="Youtube-logo"
              src={youtubeIcon}
            />
          </a>
        </div>

        <div className="relative ">
          <div className="flex flex-row relative">
            <input
              className="w-[580px]  p-2 rounded-l-full border h-10 outline-none"
              value={searchQuery}
              type="text"
              placeholder="Search"
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setShowSuggestions(true)}
              onBlur={() => setShowSuggestions(false)}
            />
            <button className="bg-gray-100 p-2 rounded-r-full px-5 ">
              <img className="" src={searchIcon} alt="search-icon" />
            </button>

            <div className="hover:rounded-full ml-4 hover:bg-gray-200 rounded-full bg-gray-100 cursor-pointer">
              <img className="px-2 pt-2" src={mikeIcon} alt="mike-icon" />
            </div>
            {searchQuery && (
              <button
                className="hover:bg-gray-200 px-2 hover:rounded-full absolute right-[150px] w-9 h-9 top-[2px]"
                onClick={() => setSearchQuery("")}
              >
                X
              </button>
            )}
          </div>

          {showSuggestions && suggestions?.length > 0 &&  (
            <div className="bg-white  w-[580px] rounded-lg  absolute  px-6  m-1 ">
              <ul>
                {suggestions.map((sugg) => (
                  <li
                    onMouseDown={(e) => handleSuggestion(e)}
                    key={sugg} 
                    className="py-1 shadow-sm hover:bg-gray-100 cursor-pointer">

                    <img
                     className="h-4 inline-block mr-5 ml-3"
                      src="https://cdn-icons-png.flaticon.com/512/482/482631.png" 
                      alt="search-icon" />
                    <span>{sugg}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="flex justify-around w-40 items-center">
          <div>
            <img src={createIcon} alt="create-icon" />
          </div>

          <div>
            <img src={bellIcon} alt="bell-con" />
          </div>

          <div className="col-span-1">
            <img
              className="h-7"
              src="https://cdn-icons-png.freepik.com/256/64/64572.png"
              alt="userIcon"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Head;
