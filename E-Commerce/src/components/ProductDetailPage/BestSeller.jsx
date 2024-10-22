import data from "../../data/data.json";
import Products from "../Products.jsx";
function BestSeller() {
  const itemsPerPage = 8;
  const currentPage = 1;
  return (
    <div className="bg-lightGray">
      <div className="container py-16">
        <p className="text-3xl text-center lg:text-start  pb-5  text-text-default font-bold">
          {data.productPage.bestSellerTitle}
        </p>
        <hr className="w-full h-1 bg-muted rounded-md mb-5" />
        <div className="">
          <Products
            itemsPerPage={itemsPerPage}
            currentPage={currentPage}
            showColors={false}
          />
        </div>
      </div>
    </div>
  );
}

export default BestSeller;
