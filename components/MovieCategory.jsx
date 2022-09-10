import { useEffect, useState } from "react";

import Movie from "./Movie";

import axios from "../axios";

const MovieCategory = ({ fetchUrl, title }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);

      setMovies(request.data.results);

      return request;
    }

    fetchData();
  }, [fetchUrl]);

  return (
    <div className="px-2">
      <h2 className="text-white text-2xl font-bold mb-2">{title}</h2>
      <div className="flex overflow-x-scroll scrollbar-hide space-x-3 pb-4">
        {movies &&
          movies.map((movie) => <Movie key={movie.id} movie={movie} />)}
      </div>
    </div>
  );
};

export default MovieCategory;
