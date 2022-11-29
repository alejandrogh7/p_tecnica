import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import MoviesList from "./components/movies-list/MoviesList";
import DetailsMovies from "./pages/details-movies/DetailsMovies";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<MoviesList />} />
        <Route path="/movie/:id" element={<DetailsMovies />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
