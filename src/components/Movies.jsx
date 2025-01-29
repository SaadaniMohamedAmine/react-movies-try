import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getMovies } from "../actions/moviesActions";
import  MovieCard  from "./MovieCard.jsx";

const Movies = () => {
  const [movies, setMovies] = useState([]);

  const { isLoading, data } = useQuery({
    queryKey: ["movies"],
    queryFn: getMovies,
  });

  useEffect(() => {
    setMovies(data);
  }, [data]);

  return (
    <div className="my-10 px-50">
      <h1 className="text-4xl text-left mb-10">All Movies</h1>
      {isLoading ? (
        <p>...is Loading !!!!</p>
      ) : (
        <div className="grid grid-cols-4 gap-4">
          {movies && movies.map((movie) => (
            <MovieCard movie={movie} key={movie.title} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Movies;
