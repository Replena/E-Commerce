import { ChevronRightIcon } from "@heroicons/react/24/outline";
import data from "../../data/data.json";

function ProductDescription() {
  const productData = data.productPage.productDescription;

  return (
    <div className="bg-text-light">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-14">
        <div className="col-span-1">
          <img
            src={productData.image.src}
            alt={productData.image.alt}
            className="w-full h-auto rounded-md"
          />
        </div>

        <div className="col-span-1 md:col-span-1 flex flex-col space-y-4 mt-14 lg:mt-0 mb-8">
          <h2 className="text-2xl font-bold">{productData.title1}</h2>
          <div className="text-text-secondary font-semibold">
            {productData.descriptionContent.map((item, index) => (
              <p key={index}>
                {item.text}
                <br />
                <br />
              </p>
            ))}
          </div>
        </div>

        <div className="col-span-1 md:col-span-1 flex flex-col space-y-4">
          <div className="flex flex-col space-y-4">
            <h3 className="text-xl font-bold">{productData.title2}</h3>
            <ul className="space-y-2 my-2 text-text-secondary font-semibold">
              {productData.additionalInfo.map((info, index) => (
                <li key={index} className="flex items-center">
                  <ChevronRightIcon className="h-5 w-5 text-gray-600 mr-2" />
                  {info}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold">{productData.title3}</h3>
            <ul className="space-y-2 my-2 text-text-secondary font-semibold">
              {productData.reviews.map((review, index) => (
                <li key={index} className="flex items-center">
                  <ChevronRightIcon className="h-5 w-5 text-gray-600 mr-2" />
                  {review}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDescription;
