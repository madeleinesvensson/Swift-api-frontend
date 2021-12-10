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
    <>
      <h1>All songs</h1>
      {songs.map((song) => (
        <div key={song.index}>
          <Link to={generatePath("/songs/title/:title", { title: song.name })}>
            <h3 key={song.index}>{song.name}</h3>
          </Link>
          {/* <h2>{song.album}</h2> */}
          {/* <h3>{song.release_date}</h3> */}
          {/* <p>Length: {song.length} miliseconds</p>
          <p>Dancability: {song.length}</p>
          <p>Acousticness: {song.acousticness}</p>
          <p>Energy: {song.energy}</p>
          <p>Dancability: {song.length}</p>
          <p>Tempo: {song.tempo}</p> */}
        </div>
      ))}
    </>
  );
};
