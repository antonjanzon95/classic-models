import { useState, useEffect } from "react";
import ProductRender from "../components/ProductRender";
import CategoryNav from "../components/CategoryNav";

export interface Product {
  productName: string;
  productDescription: string;
  quantityInStock: number;
  buyPrice: number;
}

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("http://localhost:3000/products");
      const data = await response.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <>
      <section className="bg-slate-200">
        <h1 className="mt-20 font-extrabold text-5xl text-center">Products</h1>
        <CategoryNav />
        <ProductRender products={products} />
      </section>
    </>
  );
};

export default Products;
