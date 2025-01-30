const base_url = "https://api.themoviedb.org/3";
const discover_url = "/discover/movie?sort_by=popularity.desc&api_key=";
const searchUrl = "/search/movie?query=";
const moviesApiKey = import.meta.env.VITE_TMDB_API_KEY;

//Get Movies from TMDB Api

export const getMovies = async (searchTerm) => {
  const endpoint = searchTerm
    ? `${base_url}${searchUrl}${encodeURIComponent(searchTerm)}&api_key=${moviesApiKey}`
    : `${base_url}${discover_url}${moviesApiKey}`;
  try {
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw new Error("Failed to fetch movies.");
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.log("Error fetching movies.", error);
  }
};

//APPwrite config 
import { Client, Databases, Query, ID } from "appwrite";

const PROJECT_ID = import.meta.env.VITE_APPWRITE_PROJECT_ID;
const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;
const COLLECTION_ID = import.meta.env.VITE_APPWRITE_COLLECTION_ID;

const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject(PROJECT_ID);

const database = new Databases(client);

export const updateSearchCount = async (searchTerm, movie) => {
  try {
    const result = await database.listDocuments(DATABASE_ID, COLLECTION_ID, [
      Query.equal("searchTerm", searchTerm),
    ]);
    if (result.documents.length > 0) {
      const doc = result.documents[0];

      await database.updateDocument(DATABASE_ID, COLLECTION_ID, doc.$id, {
        count: doc.count + 1,
      });
    } else {
      await database.createDocument(DATABASE_ID, COLLECTION_ID, ID.unique(), {
        searchTerm,
        count: 1,
        movie_id: movie.id,
        poster_url: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
      });
    }
  } catch (error) {
    console.log(`an error has occurred ! ${error}`);
  }
};

export const getTrendingMovies = async () => {
    try {
     const result = await database.listDocuments(DATABASE_ID, COLLECTION_ID, [
       Query.limit(5),
       Query.orderDesc("count")
     ])
   
     return result.documents;
    } catch (error) {
     console.error(error);
    }
   }