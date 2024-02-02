import { Link } from "react-router-dom";
import Nav from "./Nav";
import Search from "./Search";

const Header = () => {
  return (
    <header className="flex items-center justify-between">
      <Link to="/">🎮</Link>
      <Search />
      <Nav />
    </header>
  );
};

export default Header;
