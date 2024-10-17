import ShopProductCardSection from "@/components/ShopProductCardSection";
import ShopShopSection from "../components/ShopShopSection";
import data from "../data/data.json";
import ShopClients from "@/components/ShopClients";
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
