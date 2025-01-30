import PropTypes from "prop-types";
import { useQuery } from "@tanstack/react-query";
import { getMovies } from "../actions/api";
import Spinner from "./Spinner.jsx";
import MovieCard from "./MovieCard";

const Movies = () => {
  const {
    data: movies,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["movies"],
    queryFn: getMovies,
  });
  return (
    <div className="my-10 px-50">
      <h1 className="text-4xl text-left mb-10">All Movies</h1>
      {isLoading && <Spinner />}
      {isLoading && <Spinner />}
      {isError && <p className="text-red-500">Failed to fetch movies.</p>}
      <div className="grid grid-cols-5 grid-rows-3 gap-4 px-30">
        {movies &&
          movies.map((movie) => <MovieCard movie={movie} key={movie.title} />)}
      </div>
    </div>
  );
};

Movies.propTypes = {
  searchTerm: PropTypes.string.isRequired,
};

export default Movies;
