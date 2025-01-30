import PropTypes from "prop-types";
import { useQuery } from "@tanstack/react-query";
import { getMovies } from "../actions/api";
import MovieCard from "./MovieCard.jsx";
import Spinner from "./Spinner.jsx";

const Movies = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["movies"],
    queryFn: getMovies(),
  });

  return (
    <div className="my-10 px-50">
      <h1 className="text-4xl text-left mb-10">All Movies</h1>
      {isLoading && <Spinner />}
      {data &&
        data.map((movie) => <MovieCard movie={movie} key={movie.title} />)}
    </div>
  );
};

Movies.propTypes = {
  searchTerm: PropTypes.string.isRequired,
};

export default Movies;
