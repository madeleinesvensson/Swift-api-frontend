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
  }, []);

  return (
    <>
      <h1>A specific song</h1>
      <p>The data displayed is a sample. There is more song data in the API.</p>
      {releaseYear.map((song) => (
        <div key={song.index}>
          <h1 key={song.index}>{song.name}</h1>
          <h2>{song.album}</h2>
          <h3>{song.release_date}</h3>
          <p>Length: {song.length} miliseconds</p>
          <p>Dancability: {song.length}</p>
          <p>Acousticness: {song.acousticness}</p>
          <p>Energy: {song.energy}</p>
          <p>Dancability: {song.length}</p>
          <p>Tempo: {song.tempo}</p>
        </div>
      ))}
    </>
  );
};
