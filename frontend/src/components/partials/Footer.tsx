import { Icon } from "@iconify/react";
import { Link } from "@nextui-org/react";
import IconLink from "../IconLink";

const Footer = () => {
  return (
    <footer className="pt-8 pb-4 text-gray-500">
      <div className="relative grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-y-6 xs:gap-x-4 items-start justify-between mb-8">
        <section className="space-y-2 col-span-full md:col-span-1">
          <Icon
            className="text-4xl"
            icon="material-symbols:stadia-controller"
          />
          <p>Play Your Next Favorite Story.</p>
          <ul className="flex items-center space-x-2">
            <li>
              <IconLink
                label="Twitter Profile"
                className="rounded-full"
                path="https://twitter.com/oneminch"
                icon="simple-icons:twitter"
              />
            </li>
            <li>
              <IconLink
                label="GitHub Profile"
                className="rounded-full"
                path="https://github.com/oneminch"
                icon="simple-icons:github"
              />
            </li>
            <li>
              <IconLink
                label="LinkedIn Profile"
                className="rounded-full"
                path="https://linkedin.com/in/oneminch"
                icon="simple-icons:linkedin"
              />
            </li>
          </ul>
        </section>
        <section>
          <h3 className="font-semibold text-gray-700 mb-2">Company</h3>
          <ul className="text-sm">
            <li>
              <Link href="#">About</Link>
            </li>
            <li>
              <Link href="#">Blog</Link>
            </li>
            <li>
              <Link href="#">Careers</Link>
            </li>
            <li>
              <Link href="#">Press</Link>
            </li>
          </ul>
        </section>
        <section>
          <h3 className="font-semibold text-gray-700 mb-2">Customer</h3>
          <ul className="text-sm">
            <li>
              <Link href="#">Refunds</Link>
            </li>
            <li>
              <Link href="#">Payments</Link>
            </li>
            <li>
              <Link href="#">Contact Us</Link>
            </li>
          </ul>
        </section>
        <section>
          <h3 className="font-semibold text-gray-700 mb-2">Legal</h3>
          <ul className="text-sm">
            <li>
              <Link href="/terms-of-service">Terms of Service</Link>
            </li>
            <li>
              <Link href="/terms-of-service">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/terms-of-service">Cookies</Link>
            </li>
          </ul>
        </section>
        <section className="absolute top-0 right-0">
          <IconLink
            label="Scroll to the Top"
            path="#"
            icon="heroicons:arrow-up-20-solid"
          />
        </section>
      </div>
      <section className="text-sm text-gray-400">
        <p>
          &copy; {new Date().getFullYear()} PlayTales. All Rights Reserved. All
          trademarks are property of their respective owners.
        </p>
      </section>
    </footer>
  );
};

export default Footer;
