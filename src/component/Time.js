import React from "react";
import { FiInfo } from "react-icons/fi";

export default function Time({ timeDetail }) {
  const { time, date } = timeDetail;
  return (
    <div className="time-container">
      <div className="time-date">
        <span>{time}</span> • <span>{date}</span>
      </div>
      <FiInfo />
    </div>
  );
}
