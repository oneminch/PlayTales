import IconLink from "../IconLink";

const Nav = () => {
  return (
    <nav className="flex items-center">
      <ul className="flex items-center justify-between space-x-2">
        <li>
          <IconLink path="/wishlist" icon="heroicons:heart-20-solid" />
        </li>
        <li>
          <IconLink path="/cart" icon="heroicons:shopping-cart-20-solid" />
        </li>
        <li>
          <IconLink path="/account" icon="heroicons:user-20-solid" />
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
