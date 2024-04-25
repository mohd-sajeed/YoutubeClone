import React from "react";
import { formatPublishedDate, nFormatter } from "../Utils/helper";

const VideoCard = ({ info }) => {
  // console.log(info);
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails, publishedAt } = snippet
  const { viewCount } = statistics;
  return <div className="p-2 m-2 w-72">
    <img className="rounded-lg" alt="video" src={thumbnails.medium.url}/>
    <ul>
        <li className="font-bold py-1">{title}</li>
        <li>{channelTitle}</li>
        <li className="inline-block">{nFormatter(viewCount)} views {formatPublishedDate(publishedAt)}</li>
    

    </ul>
  </div>;
};

export default VideoCard;
