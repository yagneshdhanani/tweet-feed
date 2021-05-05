import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BsChat } from "react-icons/bs";
import { IoShareOutline } from "react-icons/io5";

export default function Footer() {
  return (
    <div className="footer">
      <div className="icon-container">
        <AiOutlineHeart size={25} />
      </div>
      <div className="icon-container">
        <BsChat size={22} />
      </div>
      <div className="icon-container">
        <IoShareOutline size={25} />
        <span className="share-detail">Share this Tweet</span>
      </div>
    </div>
  );
}
