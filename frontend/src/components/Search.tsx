import { Icon } from "@iconify/react";
import { Button, Input } from "@nextui-org/react";

const Search = () => {
  return (
    <form className="w-1/3 h-10 flex items-center text-lg">
      <Input
        type="text"
        size="sm"
        radius="md"
        placeholder="Search games..."
        className="w-full  bg-white rounded-xl"
        classNames={{
          input: "px-2",
          base: "h-full p-0 border border-gray-200 bg-white ",
          mainWrapper: "p-0",
          inputWrapper:
            "h-full p-1 bg-transparent shadow-none focus-within:!bg-transparent",
          innerWrapper: "p-0"
        }}
        endContent={
          <Button
            isIconOnly
            size="sm"
            type="submit"
            aria-label="Search"
            className="focus:global-focus bg-gray-900 text-white text-lg h-8 w-8 rounded-lg flex items-center justify-center shrink-0"
          >
            <Icon icon="heroicons:magnifying-glass-20-solid" />
          </Button>
        }
      />
    </form>
  );
};

export default Search;
