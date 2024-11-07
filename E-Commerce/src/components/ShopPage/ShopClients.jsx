import data from "../../data/data.json";
function ShopClients() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 container py-5">
      {data.shopPage.clients.map((icon, index) => (
        <div key={index} className="flex flex-col items-center justify-center">
          <img src={icon.image} alt={icon.name} className="" />
        </div>
      ))}
    </div>
  );
}

export default ShopClients;
