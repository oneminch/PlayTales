import { Select, SelectItem } from "@nextui-org/react";
import { FilterInterface } from "@/types";
import { Icon } from "@iconify/react";
import useCustomSearchParams from "@/hooks/useCustomSearchParams";

const Filter = ({ label, options }: FilterInterface) => {
  const { params: selectedValue, setParams: setSelectedValue } =
    useCustomSearchParams(label.toLowerCase());

  return (
    <Select
      label={label}
      size="sm"
      placeholder="Select an option"
      selectedKeys={selectedValue}
      className="sm:max-w-xs"
      classNames={{
        trigger: "rounded-lg border border-gray-200 bg-white",
        popoverContent: "rounded-lg"
      }}
      onSelectionChange={setSelectedValue}
      selectorIcon={<Icon icon="heroicons:chevron-up-down-20-solid" />}
    >
      {options.map((option: { label: string; value: string }) => (
        <SelectItem key={option.value} value={option.value}>
          {option.label}
        </SelectItem>
      ))}
    </Select>
  );
};

export default Filter;
