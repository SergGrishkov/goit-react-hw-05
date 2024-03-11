import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";

const API_TRENDING_MOVIES = "/trending/movie/day?language=en-US";

const config = {
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNTY3MzcyOGEwYTQzNDZhMWFmNGE4NTNhMjY2YTFlZiIsInN1YiI6IjY1ZWRjMzkxMjc5MGJmMDE0OTQzNjkzMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JYqOABcucmgclAxC4KU5jHXM0RhUA_ASL-F6o7pZtk8",
  },
};
// axios.create({config});

export async function getTrendingMovies() {
  const result = await axios.get(API_TRENDING_MOVIES, config);
  return result.data;
}
