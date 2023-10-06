import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PopularMovies from "./pages/PopularMovies";
import SearchMovies from "./pages/SearchMovies";
import DetailsMovies from "./pages/DetailsMovies";
import NavbarComponent from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/popular" element={<PopularMovies />} />
        <Route path="/search" element={<SearchMovies />} />
        <Route path="/details/:movieId" element={<DetailsMovies />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
