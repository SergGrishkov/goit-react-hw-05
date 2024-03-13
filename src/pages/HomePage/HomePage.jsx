import { useEffect, useState } from "react";
import { getTrendingMovies, getImagePath } from "../../api/controller";
import MovieList from "../../components/MovieList/MovieList";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);
  const [urlPath, setUrlPath] = useState("");

  useEffect(() => {
    const onTrend = async () => {
      try {
        const trendList = await getTrendingMovies();
        const imagePath = await getImagePath();
        const { base_url, backdrop_sizes } = imagePath;
        const imageUrl = `${base_url}${backdrop_sizes[1]}`;
        setMovies(trendList);
        setUrlPath(imageUrl);
      } catch (error) {
        setError(true);
      }
    };
    onTrend();
  }, []);
  return (
    <div>
      <h2>Trending today</h2>
      <MovieList movies={movies} urlPath={urlPath} />
      {error && <ErrorMessage />}
    </div>
  );
}
