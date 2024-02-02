import { Icon } from "@iconify/react";

const Search = () => {
  return (
    <form className="h-10 p-2 flex items-center justify-center text-lg border border-gray-200 rounded-lg bg-white focus-within:ring focus-within:ring-yellow-300">
      <input
        type="text"
        placeholder="Search games..."
        className="focus:outline-none px-4"
      />
      <button
        type="submit"
        aria-label="Search"
        className="bg-black text-white h-7 w-7 rounded-md flex items-center justify-center"
      >
        <Icon icon="heroicons:magnifying-glass-20-solid" />
      </button>
    </form>
  );
};

export default Search;
