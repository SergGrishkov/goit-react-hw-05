// import { Route, Routes } from 'react-router-dom'
// import Navigation from './components/Navigation/Navigation'
// import HomePage from "./pages/HomePage/HomePage";
// import MoviePage from "./pages/MoviePage/MoviePage";
// import NotFound from './pages/NotFoundPage/NotFound'
// import './App.css'

// function App() {

//   return (
//     <>
//       <Navigation />

//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/movies" element={<MoviePage />} />
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//     </>
//   );
// }

// export default App;

import { Route, Routes } from "react-router-dom";
import { Navigation } from "../src/components/Navigation/Navigation";
import { Toaster } from "react-hot-toast";
import { Suspense } from "react";
import { lazy } from "react";
import Loader from "./components/Loader/Loader";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const MoviePage = lazy(() => import("./pages/MoviePage/MoviePage"));
const MovieDetailsPage = lazy(() =>
  import("./pages/MovieDetailsPage/MovieDetailsPage")
);
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));
const MovieCast = lazy(() => import("./components/MovieCast/MovieCast"));
const MovieReviews = lazy(() =>
  import("./components/MovieReviews/MovieReviews")
);

export const App = () => {
  return (
    <div>
      <Navigation />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviePage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
      <Toaster position="top-right" />
    </div>
  );
};