import { Select, SelectItem } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { FilterInterface } from "@/types";
import { Icon } from "@iconify/react";

const urlSearchParamsToObject = (searchParams: URLSearchParams) => {
  const result: Record<string, string> = {};

  searchParams.sort();
  for (const [key, value] of searchParams.entries()) {
    result[key] = value;
  }
  return result;
};

const Filter = ({ label, options }: FilterInterface) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [selectedValue, setSelectedValue] = useState(() => {
    const activeParam = searchParams.get(label.toLowerCase());
    return activeParam ? new Set([activeParam]) : new Set([]);
  });

  useEffect(() => {
    const filterLabel = label.toLowerCase();

    if (selectedValue.size > 0) {
      const currValue = Array.from(selectedValue)[0];

      setSearchParams((currentParams) => {
        currentParams.set(filterLabel, currValue);
        currentParams.sort();
        return urlSearchParamsToObject(currentParams);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedValue]);

  useEffect(() => {
    const filterLabel = label.toLowerCase();
    if (!searchParams.get(filterLabel)) {
      setSelectedValue(new Set([]));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

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
