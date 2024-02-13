import {
  Badge,
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Link,
  DropdownSection
} from "@nextui-org/react";
import IconLink from "../IconLink";
import { Icon } from "@iconify/react";

const Nav = () => {
  return (
    <nav className="flex items-center justify-end">
      <ul className="flex items-center justify-between space-x-2">
        <li>
          <Dropdown>
            <DropdownTrigger>
              <Button
                isIconOnly
                className="text-primary w-10 h-10 flex items-center justify-center text-lg border border-gray-200 rounded-xl bg-white"
                aria-label="Your Account"
                size="sm"
              >
                <Icon icon="heroicons:user-20-solid" />
              </Button>
            </DropdownTrigger>
            {/* <DropdownMenu
              aria-label="Account Actions"
              className="space-y-4"
              itemClasses={{ base: "rounded-lg mb-1 last:mb-0" }}
            >
              <DropdownItem
                key="login"
                startContent={
                  <Icon icon="heroicons:arrow-left-end-on-rectangle-20-solid" />
                }
                href="/login"
                className="bg-gray-900 text-gray-50"
              >
                Log In
              </DropdownItem>
              <DropdownItem
                key="signup"
                startContent={<Icon icon="heroicons:user-20-solid" />}
                href="/signup"
                className="bg-gray-100 text-gray-900"
              >
                Sign Up
              </DropdownItem>
            </DropdownMenu> */}
            <DropdownMenu
              aria-label="Account Actions"
              disabledKeys={["settings", "notifications"]}
              className="space-y-4"
              itemClasses={{ base: "rounded-lg mb-1 last:mb-0" }}
            >
              <DropdownSection showDivider>
                <DropdownItem
                  key="overview"
                  startContent={<Icon icon="heroicons:user-20-solid" />}
                  href="/account"
                >
                  Overview
                </DropdownItem>
                <DropdownItem
                  key="notifications"
                  startContent={<Icon icon="heroicons:bell-20-solid" />}
                >
                  Notifications
                </DropdownItem>
                <DropdownItem
                  key="settings"
                  startContent={<Icon icon="heroicons:cog-6-tooth-20-solid" />}
                >
                  Settings
                </DropdownItem>
              </DropdownSection>
              <DropdownSection>
                <DropdownItem
                  key="logout"
                  startContent={
                    <Icon icon="heroicons:arrow-left-start-on-rectangle-20-solid" />
                  }
                >
                  Log Out
                </DropdownItem>
              </DropdownSection>
            </DropdownMenu>
          </Dropdown>
        </li>
        <li>
          <Badge
            classNames={{
              badge: "text-xs"
            }}
            content="8"
          >
            <IconLink
              label="Your Wishlist"
              path="/wishlist"
              icon="heroicons:heart-20-solid"
            />
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
