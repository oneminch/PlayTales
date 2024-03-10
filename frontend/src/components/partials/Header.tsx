import Nav from "./Nav";
import SearchForm from "../forms/SearchForm";
import { Link } from "@nextui-org/react";

const Header = () => {
  return (
    <header className="grid grid-cols-2 md:grid-cols-3">
      <Link
        className="w-10 h-10"
        href="/"
        aria-label="Homepage"
        title="Homepage"
      >
        <img src="/logo.svg" alt="PlayTales Logo" />
      </Link>
      <SearchForm className="hidden md:block" />
      <Nav />
    </header>
  );
};

export default Header;
