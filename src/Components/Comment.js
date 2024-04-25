import React from "react";

const Comment = ({ data }) => {
  const { name, text } = data;
  return (
    <div className="p-2 m-2 flex  my-2">
      <img
        className="w-8 h-8"
        src="https://cdn-icons-png.freepik.com/256/64/64572.png"
        alt="userIcon"
      />
      <div className="px-3">
        <p className="font-bold text-xs">{name}</p>
        <p className="text-sm">{text}</p>
      </div>
    </div>
  );
};

export default Comment;
