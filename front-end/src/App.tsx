import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Categories from "./pages/Categories";
import Offices from "./pages/Offices";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="products" element={<Products />} />
            <Route path="contact" element={<Contact />} />
            <Route path="products/:categoryName" element={<Categories />} />
            <Route path="contact/:officeCode" element={<Offices />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
