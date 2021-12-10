/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable react/jsx-curly-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable comma-dangle */
import React from "react";
import {
  Routes,
  Route,
  Link,
  generatePath,
  useNavigate,
} from "react-router-dom";
import { Year } from "components/Year";
import { SongsList } from "./components/SongsList";
import { Start } from "./components/Start";
import { SongIndex, SongName } from "./components/Song";
import { Albums } from "./components/Albums";

export const App = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1>The Taylor Swift music data API.</h1>
      {/* <Link to={generatePath("/songs/index/:index", { index: 10 })}>
          All songs
        </Link> */}
      <Link to="songs">All songs</Link>
      <select
        onChange={(event) =>
          navigate(
            generatePath("/songs/album/:album", {
              album: event.target.value,
            })
          )
        }
      >
        <option disabled selected value>
          Albums
        </option>
        <option value="Taylor Swift">Taylor Swift</option>
        <option value="Speak Now">Speak Now</option>
        <option value="Red">Red</option>
        <option value="1989">1989</option>
        <option value="reputation">reputation</option>
        <option value="Lover">Lover</option>
        <option value="Folklore">Folklore</option>
        <option value="Evermore">Evermore</option>
        <option value="Fearless (Taylor's Version)">Fearless (TV)</option>
      </select>
      <select
        onChange={(event) =>
          navigate(
            generatePath("/songs/year/:year", {
              year: event.target.value,
            })
          )
        }
      >
        <option disabled selected value>
          Release year
        </option>
        <option value="2006">2006</option>
        <option value="2010">2010</option>
        <option value="2012">2012</option>
        <option value="2014">2014</option>
        <option value="2017">2017</option>
        <option value="2019">2019</option>
        <option value="2020">2020</option>
        <option value="2021">2021</option>
      </select>
      <Routes>
        <Route index path="/" element={<Start />} />
        <Route path="/songs" element={<SongsList />} />
        <Route path="/songs/index/:index" element={<SongIndex />} />
        <Route path="/songs/title/:name" element={<SongName />} />
        <Route path="/songs/album/:album" element={<Albums />} />
        <Route path="/songs/year/:year" element={<Year />} />
      </Routes>
    </>
  );
};
