import Nav from "./Nav";
import SearchForm from "../forms/SearchForm";
import IconLink from "../IconLink";

const Header = () => {
  return (
    <header className="grid grid-cols-3">
      <IconLink
        label="Homepage"
        path="/"
        icon="material-symbols:stadia-controller"
      />
      <SearchForm />
      <Nav />
    </header>
  );
};

export default Header;
