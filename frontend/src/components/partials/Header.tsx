import Nav from "./Nav";
import Search from "../Search";
import IconLink from "../IconLink";

const Header = () => {
  return (
    <header className="flex items-center justify-between">
      <IconLink path="/" icon="material-symbols:stadia-controller" />
      <Search />
      <Nav />
    </header>
  );
};

export default Header;
