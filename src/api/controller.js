import axios from "axios";

const config = {
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNTY3MzcyOGEwYTQzNDZhMWFmNGE4NTNhMjY2YTFlZiIsInN1YiI6IjY1ZWRjMzkxMjc5MGJmMDE0OTQzNjkzMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JYqOABcucmgclAxC4KU5jHXM0RhUA_ASL-F6o7pZtk8",
  },
};
const instance = axios.create(config);

const API_TRENDING_MOVIES = "/trending/movie/day?language=en-US";
const API_SEARCH_MOVIE = `/search/movie?query={query}&page={page}`;
const API_MOVIE_BY_ID = `/movie/{movieId}`;
const API_IMAGE_PATH = `/configuration`;
const API_CREDITS = `/movie/{movieId}/credits`;
const API_REVIEWS = `/movie/{movieId}/reviews`;

function setPathParameters(url, params) {
  let path = url;
  for (const key in params) {
    path = path.replace(`{${key}}`, params[key]);
  }
  return path;
}

export async function getTrendingMovies() {
  const result = await instance.get(API_TRENDING_MOVIES);
  return result.data.results;
}

export async function searchMovie(query, page) {
  const response = await instance.get(
    setPathParameters(API_SEARCH_MOVIE, { query, page })
  );
  return response.data;
}

export async function getMovieById(movieId) {
  const response = await instance.get(
    setPathParameters(API_MOVIE_BY_ID, { movieId })
  );
  return response.data;
}

export async function getImagePath() {
  console.log();
  const response = await instance.get(API_IMAGE_PATH);
  return response.data.images;
}

export async function getCredits(movieId) {
  const response = await instance.get(
    setPathParameters(API_CREDITS, { movieId })
  );
  return response.data.cast;
}

export async function getReviews(movieId) {
  const response = await instance.get(
    setPathParameters(API_REVIEWS, { movieId })
  );
  return response.data.results;
}
