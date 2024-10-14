import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import Footer from "./layout/Footer.jsx";
import NavbarDark from "./components/NavbarDark.jsx";
function App() {
  return (
    <>
      <div>
        <NavbarDark />
        <Navbar />
        <Carousel />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
