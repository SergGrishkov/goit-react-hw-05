import { Link, useLocation } from "react-router-dom";
import css from "./MovieList.module.css";

export default function MovieList({ movies, urlPath }) {
  const location = useLocation();

  return (
    <div className={css.movieBox}>
      <ul className={css.list}>
        {movies.map((movie) => (
          <li key={movie.id} className={css.item}>
            <img
              className={css.img}
              src={`${urlPath}${movie.poster_path}`}
              alt={movie.title}
            />
            <Link
              className={css.link}
              to={`/movies/${movie.id}`}
              state={location}
            >
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
