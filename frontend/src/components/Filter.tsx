import { Select, SelectItem, Selection } from "@nextui-org/react";
import { FilterInterface } from "@/types";
import { Icon } from "@iconify/react";
import useQueryParams from "@/hooks/useQueryParams";
import { useEffect, useState } from "react";

const Filter = ({ label, options }: FilterInterface) => {
  const { params, setParams } = useQueryParams(label);
  const [selectedValue, setSelectedValue] = useState<Selection>(new Set([]));

  useEffect(() => {
    if (params) {
      setSelectedValue(new Set([params]));
    } else {
      setSelectedValue(new Set([]));
    }
  }, [params]);

  const handleSelectionChange = (keys: Selection) => {
    setSelectedValue(keys);

    if (typeof keys !== "string") {
      setParams(keys.values().next().value);
    }
  };

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
      onSelectionChange={handleSelectionChange}
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
