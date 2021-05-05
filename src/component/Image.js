import React from "react";

export default function Image({ feedImage }) {
  return (
    <div className="feed-image-container">
      <img className="feed-image" src={feedImage} alt="" />
    </div>
  );
}
