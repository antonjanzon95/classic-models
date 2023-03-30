import React from "react";
import { Product } from "../pages/Products";

interface Props {
  products: Product[];
}

const ProductRender: React.FC<Props> = ({ products }) => {
  return (
    <>
      <div className="flex flex-wrap gap-6 justify-center">
        {products.map((product, index) => (
          <article
            key={index}
            className="p-8 bg-slate-50 shadow-xl text-gray-900 w-[300px] flex flex-col gap-4"
          >
            <span>Name: {product.productName}</span>
            <span>Description: {product.productDescription}</span>
            <span>Price: {product.buyPrice}</span>
            <span>Stock: {product.quantityInStock}</span>
          </article>
        ))}
      </div>
    </>
  );
};

export default ProductRender;
