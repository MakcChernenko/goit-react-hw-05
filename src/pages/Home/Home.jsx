import { Link, Outlet } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <h2>Home</h2>
      <ul>
        <li>
          <Link to="mission">Mission</Link>
        </li>
        <li>
          <Link to="team">Team</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />;
    </div>
  );
};

export default Home;
