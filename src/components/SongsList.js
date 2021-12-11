/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable indent */
import React, { useState, useEffect } from "react";
import { Link, generatePath } from "react-router-dom";

export const SongsList = () => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    fetch("https://taylor-swift-music.herokuapp.com/songs")
      .then((res) => res.json())
      .then((json) => setSongs(json));
  }, []);

  return (
    <div className="center-text">
      <h1>All songs</h1>
      {songs.map((song) => (
        <Link
          key={song.index}
          to={generatePath("/songs/title/:title", { title: song.name })}
        >
          <h3 className="song-title" key={song.index}>
            {song.name}
          </h3>
        </Link>
      ))}
    </div>
  );
};
