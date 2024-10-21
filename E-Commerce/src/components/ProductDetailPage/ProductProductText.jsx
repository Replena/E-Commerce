import React from "react";
import {
  StarIcon,
  EyeIcon,
  ShoppingCartIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";
import { Button } from "../ui/button.jsx";
function ProductProductText({ product }) {
  const reviewCount = parseInt(product.review.split(" ")[0], 10);
  const stars = Math.round(reviewCount / 100);
  return (
    <div className="w-full md:w-1/2  order-1 md:order-2">
      <h2 className="text-2xl font-bold mb-4 text-text-default">
        {product.productName}
      </h2>
      <div className="flex items-center gap-2 mb-4">
        {[...Array(stars)].map((_, index) => (
          <StarIcon key={index} className="w-4 h-4 text-yellow" />
        ))}
        <p className="text-lg text-text-secondary">{product.review}</p>
      </div>
      <p className="text-3xl font-bold text-text-default">
        ${product.productPrice}
      </p>
      <div className="flex">
        <p className="text-text-secondary font-bold">{product.availability}</p>
        <div className="mx-2">:</div>
        <p className="text-primary">{product.availabilityStatus}</p>
      </div>
      <p className="text-text-lightSecondary mb-6">{product.description}</p>
      <hr className="w-100 h-1  bg-muted rounded md:my-10 " />
      <div className="flex gap-4 mb-6">
        {product.colors.map((color, index) => (
          <span
            key={index}
            className="w-6 h-6 rounded-full"
            style={{ backgroundColor: color }}
          ></span>
        ))}
      </div>

      <div className="flex gap-4">
        {product.buttons.map((button, index) => (
          <Button
            key={index}
            variant={index === 0 ? "default" : "iconButton"}
            size="wopadding"
            className={
              button.label === ""
                ? "w-10 h-10 flex items-center justify-center"
                : "px-4 py-2"
            }
            onClick={() => alert(button.action)}
          >
            {button.label === "" ? (
              button.action === "like" ? (
                <HeartIcon className="w-4 h-4 " />
              ) : button.action === "shop" ? (
                <ShoppingCartIcon className="w-4 h-4 " />
              ) : (
                <EyeIcon className="w-4 h-4 " />
              )
            ) : (
              button.label
            )}
          </Button>
        ))}
      </div>
    </div>
  );
}

export default ProductProductText;
