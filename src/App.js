/* eslint-disable comma-dangle */
import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  generatePath,
} from "react-router-dom";
import { Year } from "components/Year";
import { SongsList } from "./components/SongsList";
import { Start } from "./components/Start";
import { SongIndex, SongName } from "./components/Song";
import { Albums } from "./components/Albums";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <h1>This is the Taylor Swift music data API.</h1>
        <Link to={generatePath("/songs/index/:index", { index: 10 })}>
          All songs
        </Link>
        <Routes>
          <Route index path="/" element={<Start />} />
          <Route path="/songs" element={<SongsList />} />
          <Route path="/songs/index/:index" element={<SongIndex />} />
          <Route path="/songs/title/:name" element={<SongName />} />
          <Route path="/songs/album/:album" element={<Albums />} />
          <Route path="/songs/year/:year" element={<Year />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
