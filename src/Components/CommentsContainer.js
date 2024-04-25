import React from "react";
import CommentsList from "./CommentsList";

const commentsData = [
  {
    name: "Sajid Ali",
    text: "Lorem ipsum dolor sit amet.",
    replies: [
  
  {
    name: "Sajid Ali",
    text: "Lorem ipsum dolor sit amet.",
    replies: [
      {
        name: "Sajid Ali",
        text: "Lorem ipsum dolor sit amet.",
        replies: [
          {
            name: "Sajid Ali",
            text: "Lorem ipsum dolor sit amet.",
            replies: [
              {
                name: "Sajid Ali",
                text: "Lorem ipsum dolor sit amet.",
                replies: [],
              },
            ],
          },
        ],
      },
     
    ],
  },
],
},
{
  name: "Sajid Ali",
  text: "Lorem ipsum dolor sit amet.",
  replies: [],
},
{
  name: "Sajid Ali",
  text: "Lorem ipsum dolor sit amet.",
  replies: [],
},
{
  name: "Sajid Ali",
  text: "Lorem ipsum dolor sit amet.",
  replies: [
    {
      name: "Sajid Ali",
      text: "Lorem ipsum dolor sit amet.",
      replies: [
        {
          name: "Sajid Ali",
          text: "Lorem ipsum dolor sit amet.",
          replies: [],
        },
      ],
    },
  ],
},
];


const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="font-semibold text-2xl">Comments:</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
