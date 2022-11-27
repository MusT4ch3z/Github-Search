import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import FavouritesPage from "./pages/FavouritesPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="app max-h-screen">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/favourites" element={<FavouritesPage />} />
      </Routes>
    </div>
  );
}

export default App;
