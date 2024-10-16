import ShopShopSection from "../components/ShopShopSection";
import data from "../data/data.json";
function ShopContent() {
  const shopData = data.shopPage.shopcard;
  return (
    <div>
      <ShopShopSection data={shopData} />
    </div>
  );
}

export default ShopContent;
