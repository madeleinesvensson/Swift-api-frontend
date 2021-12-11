import React from "react";
import dance from "../assets/taylor-swift-dance.gif";

export const Start = () => {
  return (
    <div className="center-text">
      <img src={dance} alt="taylor dance" />
      <p>List of songs</p>
      <p>Information about specific songs</p>
      <p>All songs from an album</p>
      <p>All songs from a release year</p>
    </div>
  );
};
