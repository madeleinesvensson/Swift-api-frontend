/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable indent */
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const Albums = () => {
  const [albumName, setAlbumName] = useState([]);

  const { album } = useParams();

  useEffect(() => {
    fetch(`https://taylor-swift-music.herokuapp.com/songs/album?album=${album}`)
      .then((res) => res.json())
      .then((json) => setAlbumName(json));
  }, [album]);

  return (
    <div className="album-align">
      {albumName.map((song) => (
        <div key={song.index} className="album-container">
          <h2 key={song.index}>{song.name}</h2>
          <h3>{song.album}</h3>
          <h4>{song.release_date}</h4>
          <p>Length: {song.length} miliseconds</p>
          <p>Dancability: {song.length}</p>
          <p>Acousticness: {song.acousticness}</p>
          <p>Energy: {song.energy}</p>
          <p>Dancability: {song.length}</p>
          <p>Tempo: {song.tempo}</p>
        </div>
      ))}
    </div>
  );
};
