import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

interface Category {
  productLine: string;
}

const CategoryNav = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch(`http://localhost:3000/products/categories`);
      const data = await response.json();
      setCategories(data);
    };
    fetchCategories();
  }, []);

  return (
    <>
      <nav className="flex gap-8 justify-center items-center w-screen">
        {categories.map((category, index) => (
          <Link
            key={index}
            to={`/products/${category.productLine.toLowerCase()}`}
          >
            {category.productLine}
          </Link>
        ))}
      </nav>
    </>
  );
};

export default CategoryNav;
