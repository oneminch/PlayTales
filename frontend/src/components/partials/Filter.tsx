import { Button } from "@nextui-org/react";
import { useSearchParams } from "react-router-dom";

const FILTERS = [
  "Action",
  "Adventure",
  "Indie",
  "Puzzle",
  "RPG",
  "Shooter",
  "Sports",
  "Strategy"
];

const Filter = () => {
  const [, setFilter] = useSearchParams();

  const handleSetFilter = (filter: string) => {
    setFilter({ category: filter });
  };

  return (
    <aside className="flex flex-row md:flex-col items-center md:items-start justify-between md:justify-start py-4 px-6 md:space-y-4 w-full md:w-1/5 shrink-0 bg-white border border-gray-200 rounded-lg">
      <h2 className="text-xl font-bold text-gray-700 mr-4">Genres</h2>
      <ul className="w-1/2 flex flex-row md:flex-col items-start justify-between md:justify-start md:space-y-2">
        {FILTERS.map((filter) => (
          <li key={filter}>
            <Button onClick={() => handleSetFilter(filter.toLowerCase())}>
              {filter}
            </Button>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Filter;
