import ShopProductCardSection from "../components/ShopPage/ShopProductCardSection.jsx";
import ShopShopSection from "../components/ShopPage/ShopShopSection";
import data from "../data/data.json";
import ShopClients from "../components/ShopPage/ShopClients.jsx";
function ShopContent() {
  const shopData = data.shopPage;
  return (
    <div>
      <ShopShopSection data={shopData} />
      <ShopProductCardSection />
      <ShopClients />
    </div>
  );
}

export default ShopContent;
