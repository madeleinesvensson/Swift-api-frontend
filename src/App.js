import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SongsList } from "./components/SongsList";
import { Start } from "./components/Start";
import { SongIndex, SongName } from "./components/Song";
import { Albums } from "./components/Albums";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <h1>This is the Taylor Swift music data API.</h1>
        <Routes>
          <Route index path="/" element={<Start />} />
          <Route path="/songs" element={<SongsList />} />
          <Route index path="/songs/index/:index" element={<SongIndex />} />
          <Route index path="/songs/title/:name" element={<SongName />} />
          <Route index path="/songs/album/:album" element={<Albums />} />
          <Route index path="/songs/year/:year" element={<Albums />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
