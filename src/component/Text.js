import React from "react";

export default function Text({ tweet }) {
  const { text, tags } = tweet;

  return (
    <div className="twit-details">
      <div className="twit-text">{text}</div>
      <div className="twit-tags">{tags}</div>
    </div>
  );
}
