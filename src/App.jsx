import { Routes, Route, NavLink } from "react-router-dom";
import clsx from "clsx";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Products from "./pages/Products/Products";
import NotFound from "./pages/NotFound/NotFound";
import "./App.css";

const buildLinkClass = ({ isActive }) => {
  return clsx("link", isActive && "active");
};

const App = () => {
  console.log("hello");

  return (
    <div>
      <nav>
        <NavLink to="/" className={buildLinkClass}>
          Home
        </NavLink>
        <NavLink to="/about" className={buildLinkClass}>
          About
        </NavLink>
        <NavLink to="/product" className={buildLinkClass}>
          Product
        </NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Products />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
