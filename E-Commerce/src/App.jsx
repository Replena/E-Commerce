import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import ShopPage from "./pages/ShopPage.jsx";
import ProductPage from "./pages/ProductPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import TeamPage from "./pages/TeamPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import Layout from "./layout/LayOut.jsx";
function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="shop" element={<ShopPage />} />
          <Route path="products" element={<ProductPage />} />
          <Route path="products/:id" element={<ProductPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="team" element={<TeamPage />} />
          <Route path="about" element={<AboutPage />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
