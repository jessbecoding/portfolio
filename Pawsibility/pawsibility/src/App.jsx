import { Route, Routes } from "react-router-dom";
import "../src/style/index.css";
import Homepage from "./components/Homepage";
import NavBar from "./components/NavBar";
import Search from "./components/Search";
import FavPets from "./components/FavPets";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="page-container">
      <div className="content-wrap">
        <div className="navBar">
          <NavBar />
        </div>

        <div>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/search" element={<Search />} />
            <Route path="/about/:pet/:petId" element={<About />} />
            <Route path="/favoritePets" element={<FavPets />} />
          </Routes>
        </div>

        <div className="footer">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
