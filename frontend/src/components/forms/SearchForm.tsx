import useFetch from "@/hooks/useFetch";
import { GameItem } from "@/types";
import { Icon } from "@iconify/react";
import {
  Button,
  Input,
  Listbox,
  ListboxItem,
  ListboxSection
} from "@nextui-org/react";
import SearchItem from "../cards/SearchItem";

const SearchForm = () => {
  const { data: games } = useFetch("/data.json", []);

  return (
    <section className="w-full relative group">
      <form className="w-full h-10 flex items-center text-lg">
        <Input
          type="text"
          size="sm"
          radius="md"
          placeholder="Search games..."
          className="w-full bg-white rounded-xl"
          classNames={{
            input: "px-2",
            base: "h-full p-0 border border-gray-200 bg-white ",
            mainWrapper: "p-0",
            inputWrapper:
              "h-full p-1 bg-transparent shadow-none focus-within:!bg-transparent",
            innerWrapper: "p-0"
          }}
          startContent={
            <Icon
              className="ml-2 text-gray-500"
              icon="heroicons:magnifying-glass-20-solid"
            />
          }
        />
      </form>
      <div
        className={`w-full rounded-xl z-50 absolute top-full mt-1 shadow-lg left-0 bg-white border border-gray-200 transition-all duration-100 group-focus-within:translate-y-0 group-focus-within:opacity-100 group-focus-within:visible translate-y-2 opacity-0 invisible`}
      >
        <Listbox
          shouldFocusWrap={true}
          aria-label="Search Suggestions"
          className="p-2"
        >
          <ListboxSection showDivider>
            {games &&
              games.slice(0, 3).map((game: GameItem) => (
                <ListboxItem
                  key={game.id}
                  textValue={game.title}
                  className="*:h-16 rounded-lg"
                  href={game.id}
                >
                  <SearchItem game={game} />
                </ListboxItem>
              ))}
          </ListboxSection>
          <ListboxSection>
            <ListboxItem
              className="py-0"
              key="show-all"
              textValue="Show All Results"
            >
              <Button className="w-full">Show All Results</Button>
            </ListboxItem>
          </ListboxSection>
        </Listbox>
      </div>
    </section>
  );
};

export default SearchForm;
