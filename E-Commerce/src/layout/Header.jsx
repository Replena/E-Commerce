import CarouselHead from "../components/CarouselHead.jsx";
import Navbar from "../components/Navbar.jsx";
import NavbarDark from "../components/NavbarDark.jsx";
import data from "../data/data.json";
function Header() {
  return (
    <div>
      <NavbarDark />
      <Navbar />
      <CarouselHead carouselData={data.carousel} />
    </div>
  );
}

export default Header;
