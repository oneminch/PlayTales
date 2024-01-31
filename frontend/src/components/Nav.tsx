import { Link } from "react-router-dom";

const NAV_LINKS = {
  Home: "/",
  About: "/about",
  Cart: "/cart",
  Error: "/error",
  Product: "/products/my-product"
};

const Nav = () => {
  return (
    <nav className="flex items-center w-full">
      <ul className="flex w-full items-center justify-between">
        {Object.entries(NAV_LINKS).map(([k, v]) => (
          <li key={k}>
            <Link to={v}>{k}</Link>
          </li>
        ))}
        <li>
          <Link
            className="bg-white shadow text-slate-950 px-4 py-1.5 rounded-md"
            to={`/login`}
          >
            Log In
          </Link>
        </li>
        <li>
          <Link
            className="bg-slate-900 shadow text-white px-4 py-1.5 rounded-md"
            to={`/signup`}
          >
            Sign Up
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
