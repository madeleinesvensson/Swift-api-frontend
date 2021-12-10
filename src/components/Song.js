/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable indent */
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const SongIndex = () => {
  const [song, setSong] = useState([]);
  const indexURL = (index) =>
    `https://taylor-swift-music.herokuapp.com/songs/index/${index}`;
  const { index } = useParams();

  useEffect(() => {
    fetch(indexURL(index))
      .then((res) => res.json())
      .then((json) => setSong(json));
  }, [index]);

  return (
    <>
      <p>The data displayed is a sample. There is more song data in the API.</p>
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
    </>
  );
};

export const SongName = () => {
  const [song, setSong] = useState([]);
  const nameURL = (name) =>
    `https://taylor-swift-music.herokuapp.com/songs/title/${name}`;
  const { name } = useParams();

  useEffect(() => {
    fetch(nameURL(name))
      .then((res) => res.json())
      .then((json) => setSong(json));
  }, [name]);

  return (
    <>
      <p>The data displayed is a sample. There is more song data in the API.</p>
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
    </>
  );
};
