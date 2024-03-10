import { Link } from "@nextui-org/react";
import IconLink from "../IconLink";
import ThemeToggle from "../ThemeToggle";

const Footer = () => {
  return (
    <footer className="pt-8 pb-4 text-primary-foreground">
      <div className="relative grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-y-6 xs:gap-x-4 items-start justify-between mb-8">
        <section className="space-y-3 col-span-full md:col-span-1">
          <Link className="w-12 h-12" href="/" aria-label="Homepage">
            <img src="/logo.svg" alt="PlayTales Logo" />
          </Link>
          <p>Play Your Next Tale.</p>
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
          <ThemeToggle />
        </section>
        <section>
          <h3 className="font-semibold text-foreground mb-2">Company</h3>
          <ul className="text-sm text-primary-foreground">
            <li>
              <Link className="text-current" href="#">
                About
              </Link>
            </li>
            <li>
              <Link className="text-current" href="#">
                Blog
              </Link>
            </li>
            <li>
              <Link className="text-current" href="#">
                Careers
              </Link>
            </li>
            <li>
              <Link className="text-current" href="#">
                Press
              </Link>
            </li>
          </ul>
        </section>
        <section>
          <h3 className="font-semibold text-foreground mb-2">Customer</h3>
          <ul className="text-sm text-primary-foreground">
            <li>
              <Link className="text-current" href="#">
                Refunds
              </Link>
            </li>
            <li>
              <Link className="text-current" href="#">
                Payments
              </Link>
            </li>
            <li>
              <Link className="text-current" href="#">
                Contact Us
              </Link>
            </li>
          </ul>
        </section>
        <section>
          <h3 className="font-semibold text-foreground mb-2">Legal</h3>
          <ul className="text-sm text-primary-foreground">
            <li>
              <Link className="text-current" href="/terms-of-service">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link className="text-current" href="/terms-of-service">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link className="text-current" href="/terms-of-service">
                Cookies
              </Link>
            </li>
          </ul>
        </section>
      </div>
      <section className="text-sm text-primary-foreground/50">
        <p>
          &copy; {new Date().getFullYear()} PlayTales. All Rights Reserved. All
          trademarks are property of their respective owners.
        </p>
        <p>
          Game data is provided by [IGDB](https://igdb.com) and
          [RAWG](https://rawg.io)
        </p>
      </section>
    </footer>
  );
};

export default Footer;
