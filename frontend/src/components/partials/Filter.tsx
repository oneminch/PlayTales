import { Link } from "react-router-dom";

const Filter = () => {
  return (
    <section className="flex items-center">
      <h2 className="text-xl font-bold">Filter</h2>
      <ul className="flex items-center justify-between space-x-2">
        <li>
          <Link to="/wishlist">Wishlist</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
        <li>
          <Link to="/account">Account</Link>
        </li>
      </ul>
    </section>
  );
};

export default Filter;
