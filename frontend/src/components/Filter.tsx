import { Button, Select, SelectItem, Selection } from "@nextui-org/react";
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

  const handleFilterReset = () => {
    setSelectedValue(new Set([]));
    setParams(null);
  };

  return (
    <div className="flex items-center w-full sm:max-w-xs rounded-xl border border-gray-200 bg-white">
      <Select
        label={label}
        size="sm"
        placeholder="Select an option"
        selectedKeys={selectedValue}
        classNames={{
          trigger: "bg-white rounded-l-xl rounded-r-none pr-1",
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
      <Button
        isIconOnly
        isDisabled={selectedValue.size < 1}
        onPress={handleFilterReset}
        size="sm"
        title={`Reset ${label} Filter`}
        aria-label={`Reset ${label} Filter`}
        className="w-6 h-6 min-w-6 min-h-6 rounded-full mx-2 text-lg p-0"
      >
        <Icon icon="heroicons:x-mark-20-solid" />
      </Button>
    </div>
  );
};

export default Filter;
