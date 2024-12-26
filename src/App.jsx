import {
  Routes,
  Route,
  NavLink,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import clsx from "clsx";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Products from "./pages/Products/Products";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Mission from "./pages/Mission/Mission";
import Team from "./pages/Team/Team";
import Reviews from "./pages/Reviews/Reviews";
import Login from "./pages/Login/Login";
import NotFound from "./pages/NotFound/NotFound";
import "./App.css";

const buildLinkClass = ({ isActive }) => {
  return clsx("link", isActive && "active");
};

const App = () => {
  console.log("hello");
  const [searchParams] = useSearchParams();
  const name = searchParams.get("name");
  const color = searchParams.get("color");
  const maxPrice = searchParams.get("maxPrice");
  const navigate = useNavigate();
  const handleSubmit = async (values) => {
    // const response = await FakeAPI.login(values);
    // if (response.success) {
    navigate("/profile", { replace: true });
    // }
  };

  return (
    <div>
      <header>
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
          <NavLink to="/products/144">auto</NavLink>
        </nav>
      </header>
      <main className="container-main">
        <button type="button" onClick={handleSubmit}>
          buttonRenderLogin
        </button>
        <p>
          {`тут намагаюся отримати параметри рядка запиту, таких як ${
            (name, color, maxPrice)
          }`}
        </p>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="mission" element={<Mission />} />
            <Route path="team" element={<Team />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Products />} />
          <Route path="/products/:postId" element={<ProductDetails />} />
          <Route path="/profile" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
