import { useQuery } from "@tanstack/react-query";
import { getTrendingMovies } from "../actions/api.js";
import Spinner from "./Spinner.jsx";

const TrendingMovies = () => {
  const {
    data: trendingMovies,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["trendingMovies"],
    queryFn: getTrendingMovies,
  });
  // console.log(trendingMovies)
  return (
    <div className="my-10 px-50">
      <h1 className="text-4xl text-left mb-10">Trending Movies</h1>
      {isError && <p className="text-red-500">Failed to fetch movies.</p>}
      {isLoading && <Spinner />}
      {trendingMovies && (
        <section className="trending my-10 flex flex-col justify-center items-center">
          <ul>
            {trendingMovies.map((movie, index) => (
              <li key={movie.$id}>
                <p>{index + 1}</p>
                <img src={movie.poster_url} alt={movie.title} />
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
};

export default TrendingMovies;
