import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="flex w-screen justify-center items-center gap-8 fixed top-0 h-20 bg-gray-900 text-red-500">
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
};

export default Navigation;
