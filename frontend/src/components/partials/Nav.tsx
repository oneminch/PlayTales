import { toast } from "sonner";
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
import { useAuthContext } from "@/context/auth-context";
import {
  useWishlistContext,
  wishlistQueryKey
} from "@/context/wishlist-context";
import { useCartContext } from "@/context/cart-context";
import useMutate from "@/hooks/use-mutate";
import { useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { Key } from "react";
import { userInfoQueryKey } from "@/context/user-context";

const Nav = () => {
  const queryClient = useQueryClient();
  const { mutateAsync } = useMutate("/auth/logout", queryClient);

  const { isLoggedIn, logOut } = useAuthContext();
  const { count: wishlistCount } = useWishlistContext();
  const { count: cartCount, totalPrice: cartTotalPrice } = useCartContext();

  const handleLogout = async () => {
    queryClient.invalidateQueries({
      queryKey: [wishlistQueryKey, userInfoQueryKey]
    });
    queryClient.removeQueries({
      queryKey: [wishlistQueryKey, userInfoQueryKey]
    });
    mutateAsync({})
      .then((data) => {
        logOut();
        toast.success(data.message);
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const navigate = useNavigate();
  const navigateTo = (key: Key) => {
    navigate(`/${key}`);
  };

  return (
    <nav className="flex items-center justify-end">
      <ul className="flex items-center justify-between space-x-2">
        <li>
          <Dropdown>
            <DropdownTrigger>
              <Button
                isIconOnly
                className="text-foreground bg-primary w-10 h-10 flex items-center justify-center text-lg border border-secondary rounded-lg"
                aria-label="Your Account"
                title="Your Account"
                size="sm"
              >
                <Icon icon="heroicons:user-20-solid" />
              </Button>
            </DropdownTrigger>
            {!isLoggedIn && (
              <DropdownMenu
                aria-label="Account Actions"
                className="space-y-4"
                itemClasses={{ base: "rounded-lg mb-1 last:mb-0" }}
                onAction={navigateTo}
              >
                <DropdownItem
                  key="login"
                  startContent={
                    <Icon icon="heroicons:arrow-left-end-on-rectangle-20-solid" />
                  }
                  className="bg-background text-foreground"
                >
                  Log In
                </DropdownItem>
                <DropdownItem
                  key="signup"
                  startContent={<Icon icon="heroicons:user-20-solid" />}
                  className="bg-foreground text-background"
                >
                  Sign Up
                </DropdownItem>
              </DropdownMenu>
            )}
            {isLoggedIn && (
              <DropdownMenu
                aria-label="Account Actions"
                disabledKeys={["settings", "notifications"]}
                className="space-y-4"
                itemClasses={{ base: "rounded-lg mb-1 last:mb-0" }}
                onAction={(key) => {
                  if (key === "logout") {
                    handleLogout();
                  } else if (key === "account") {
                    navigateTo(key);
                  }
                }}
              >
                <DropdownSection showDivider>
                  <DropdownItem
                    key="account"
                    startContent={<Icon icon="heroicons:user-20-solid" />}
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
                    startContent={
                      <Icon icon="heroicons:cog-6-tooth-20-solid" />
                    }
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
            )}
          </Dropdown>
        </li>
        <li>
          <Badge
            classNames={{
              badge: "text-xs bg-focus text-gray-800"
            }}
            showOutline={false}
            content={wishlistCount}
            isInvisible={wishlistCount < 1}
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
              badge: "text-xs bg-focus text-gray-800"
            }}
            showOutline={false}
            content={cartCount}
            isInvisible={cartCount < 1}
          >
            <Link
              href="/cart"
              aria-label="Your Cart"
              title="Your Cart"
              className="h-10 px-4 space-x-2 flex items-center justify-center text-lg border border-secondary rounded-lg text-foreground bg-primary"
            >
              <Icon icon="heroicons:shopping-cart-20-solid" />
              <span className="text-sm">
                ${cartTotalPrice.totalDiscountedPrice}
              </span>
            </Link>
          </Badge>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
