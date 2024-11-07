import React from "react";
import { Star } from "lucide-react";

const ListProduct = ({ product }) => {
  const discount = product.price * 0.8;
  const getRandomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
  };

  return (
    <div className="bg-text-light rounded-lg overflow-hidden flex">
      <div className="w-48 h-48 flex-shrink-0">
        <img
          src={product.images[0].url}
          alt={product.name}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="flex-grow p-6">
        <div className="flex justify-between items-start gap-4">
          <div className="flex-grow">
            <h3 className="font-semibold text-xl mb-2">{product.name}</h3>
            <p className="text-text-secondary mb-4 line-clamp-2">
              {product.description}
            </p>

            <div className="flex items-center gap-6 text-sm text-text-secondary">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-yellow text-yellow" />
                <span>{product.rating.toFixed(1)}</span>
              </div>
              <span>{product.sell_count} Satış</span>
              <span>{product.stock} Stok</span>
            </div>
          </div>

          <div className="flex flex-col items-end gap-2">
            <div className="flex flex-col items-end">
              <p className="text-lg font-semibold text-muted line-through">
                ₺{product.price.toFixed(2)}
              </p>
              <p className="text-2xl font-bold text-primary">
                ₺{discount.toFixed(2)}
              </p>
            </div>

            <div className="flex flex-col items-end">
              <span className="text-sm text-text-secondary">Mağaza:</span>
              <span className="text-sm font-medium">
                Store {product.store_id}
              </span>
            </div>
            <div className="flex flex-col items-end">
              <span className="text-sm text-text-secondary">Kategori:</span>
              <span className="text-sm font-medium">
                Category {product.category_id}
              </span>
            </div>

            {product.showColors && (
              <div className="flex gap-2 mt-2">
                {[...Array(4)].map((_, index) => (
                  <div
                    key={index}
                    className="w-5 h-5 rounded-full border"
                    style={{ backgroundColor: getRandomColor() }}
                  ></div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListProduct;
