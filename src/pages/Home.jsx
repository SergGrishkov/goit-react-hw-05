import { useEffect, useState } from "react";
import { getTrendingMovies } from "../api/controller";
import TrendingList from "../components/TrendingList/TrendingList";

export default function Home() {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    async function getDataMovies() {
      try {
        const data = await getTrendingMovies();
        setTrendingMovies(data);
      } catch (error) {
        console.log(error);
      }
    }

    getDataMovies();
  }, []);

  return (
    <>
      {trendingMovies ? <h2>Trending today</h2> : ""}
      <TrendingList listMovies={trendingMovies} />
    </>
  );
}
