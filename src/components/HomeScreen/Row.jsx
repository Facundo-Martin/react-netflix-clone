import axios from "../../lib/axios";
import React, { useEffect, useState } from "react";
import "./Row.css";
import clsx from "clsx";

const Row = ({ title, fetchUrl, isLargeRow = false }) => {
  const [movies, setMovies] = useState([]);
  const baseUrl = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  console.log(movies);
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map((movie) => {
          if (movie.poster_path)
            return (
              <img
                key={movie.id}
                className={clsx(
                  "row__poster",
                  isLargeRow && "row__posterLarge"
                )}
                src={baseUrl + movie.poster_path}
                alt={title}
              />
            );
        })}
      </div>
    </div>
  );
};

export default Row;
