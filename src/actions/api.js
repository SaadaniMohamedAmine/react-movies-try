const base_url = "https://api.themoviedb.org/3";
const discover_url = "/discover/movie?sort_by=popularity.desc&api_key=";
// const searchUrl = "/search/movie?query=";
const moviesApiKey = import.meta.env.VITE_TMDB_API_KEY;

export const getMovies = async (searchTerm) => {
  console.log(searchTerm);
  try {
    const response = await fetch(`${base_url}${discover_url}${moviesApiKey}`);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.log("Error fetching movies.", error);
  }
};
