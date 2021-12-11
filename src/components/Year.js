/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable indent */
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const Year = () => {
  const [releaseYear, setReleaseYear] = useState([]);

  const { year } = useParams();

  useEffect(() => {
    fetch(`https://taylor-swift-music.herokuapp.com/songs/year?year=${year}`)
      .then((res) => res.json())
      .then((json) => setReleaseYear(json));
  }, [year]);

  return (
    <div className="album-align">
      {releaseYear.map((song) => (
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
