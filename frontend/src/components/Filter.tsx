import { Button, Select, SelectItem, Selection } from "@nextui-org/react";
import type { FilterOptions } from "@/types";
import { Icon } from "@iconify/react";
import useQueryParams from "@/hooks/use-query-params";
import { useEffect, useState } from "react";

const Filter = ({ label, options }: FilterOptions) => {
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

  const handleFilterReset = () => {
    setSelectedValue(new Set([]));
    setParams("");
  };

  return (
    <div className="flex items-center w-full sm:max-w-xs rounded-lg border border-secondary bg-primary">
      <Select
        label={label}
        size="sm"
        placeholder="Select an option"
        selectedKeys={selectedValue}
        classNames={{
          trigger: "bg-primary rounded-l-lg rounded-r-none pr-1",
          popoverContent: "rounded-lg bg-primary"
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
      <Button
        isIconOnly
        isDisabled={typeof selectedValue !== "string" && selectedValue.size < 1}
        onPress={handleFilterReset}
        size="sm"
        title={`Reset ${label} Filter`}
        aria-label={`Reset ${label} Filter`}
        className="w-6 h-6 min-w-6 bg-transparent min-h-6 rounded-full mx-2 text-lg p-0"
      >
        <Icon icon="heroicons:backspace-20-solid" />
      </Button>
    </div>
  );
};

export default Filter;
