import { Icon } from "@iconify/react";
import { Button, Input, Select, SelectItem } from "@nextui-org/react";

const AddressForm = () => {
  return (
    <form className="w-full py-6 flex flex-col gap-y-6">
      <div className="flex gap-x-2">
        <Input
          isReadOnly
          value="Jane"
          labelPlacement="outside"
          type="text"
          label="First Name"
          placeholder="Jane"
        />
        <Input
          isReadOnly
          value="Doe"
          labelPlacement="outside"
          type="text"
          label="Last Name"
          placeholder="Doe"
        />
      </div>
      <Select
        isRequired
        defaultSelectedKeys={["united-states"]}
        labelPlacement="outside"
        label="Country"
        placeholder="Country"
        selectorIcon={<Icon icon="heroicons:chevron-up-down-20-solid" />}
      >
        <SelectItem
          key="united-states"
          value="united-states"
          startContent={<Icon icon="twemoji:flag-united-states" />}
        >
          United States
        </SelectItem>
      </Select>
      <Input
        isRequired
        labelPlacement="outside"
        type="address"
        label="Street Address"
        placeholder="123 Gamer Street"
      />
      <div className="flex gap-x-2">
        <Input
          isRequired
          labelPlacement="outside"
          type="text"
          label="City"
          placeholder="Night City"
        />
        <Select
          isRequired
          labelPlacement="outside"
          label="State"
          placeholder="State"
          selectorIcon={<Icon icon="heroicons:chevron-up-down-20-solid" />}
        >
          {[
            { label: "AB", value: "AB" },
            { label: "CD", value: "CD" },
            { label: "EF", value: "EF" }
          ].map((option: { label: string; value: string }) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </Select>
        <Input
          isRequired
          labelPlacement="outside"
          type="number"
          label="Zip Code"
          placeholder="12345"
        />
      </div>
      <Button className="w-32 font-medium bg-gray-900 text-gray-50 px-4 py-1 rounded-xl">
        Save Address
      </Button>
    </form>
  );
};

export default AddressForm;
