import { Badge, Link } from "@nextui-org/react";
import IconLink from "../IconLink";
import { Icon } from "@iconify/react";

const Nav = () => {
  return (
    <nav className="flex items-center">
      <ul className="flex items-center justify-between space-x-2">
        <li>
          <IconLink path="/login" icon="heroicons:user-20-solid" />
        </li>
        <li>
          <Badge
            classNames={{
              badge: "text-xs"
            }}
            content="8"
          >
            <IconLink path="/wishlist" icon="heroicons:heart-20-solid" />
          </Badge>
        </li>
        <li>
          <Badge
            classNames={{
              badge: "text-xs"
            }}
            content="3"
          >
            <Link
              href="/cart"
              className="h-10 px-4 space-x-4 flex items-center justify-center text-lg border border-gray-200 rounded-xl bg-white"
            >
              <Icon icon="heroicons:shopping-cart-20-solid" />
              <span className="text-sm">$107.99</span>
            </Link>
          </Badge>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
