import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Product } from "./Products";
import CategoryNav from "../components/CategoryNav";
import ProductRender from "../components/ProductRender";

const Categories = () => {
  const { categoryName } = useParams();
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProductsByCategory = async () => {
      const response = await fetch(
        `http://localhost:3000/products/${categoryName}`
      );
      const data = await response.json();
      setProducts(data);
    };
    fetchProductsByCategory();
  }, [categoryName]);

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

export default Categories;
