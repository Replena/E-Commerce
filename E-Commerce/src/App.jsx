import Navbar from "./components/Navbar";
import CarouselHead from "./components/CarouselHead";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import Footer from "./layout/Footer.jsx";
import NavbarDark from "./components/NavbarDark.jsx";
import ShopCardSection from "./components/ShopCardSection";
import ProductCardSection from "./components/ProductCardSection";
import FluidContainerSection from "./components/FluidContainerSection";
import data from "./data/data.json";
function App() {
  return (
    <>
      <div>
        <NavbarDark />
        <Navbar />
        <CarouselHead carouselData={data.carousel} />
        <ShopCardSection />
        <ProductCardSection />
        <CarouselHead carouselData={data.carousel2} />
        <FluidContainerSection />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
