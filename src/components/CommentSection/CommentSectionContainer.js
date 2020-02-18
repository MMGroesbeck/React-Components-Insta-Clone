// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  // Add state for the comments
  console.log("CommentSectionContainer's props.comments:");
  console.log(props.comments);
  const [commentData] = useState(props.comments);
  console.log("State gives:");
  console.log(commentData);
  return (
    <div>
      {/* map through the comments data and return the Comment component */}
      {commentData.map((comment)=>(
        <Comment comment={comment} />
      ))}
      <CommentInput />
    </div>
  );
};

export default CommentSection;
