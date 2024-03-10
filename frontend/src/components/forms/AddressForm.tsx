import { useUserContext } from "@/context/user-context";
import useValidate from "@/hooks/use-validate";
import { Icon } from "@iconify/react";
import { Button, Input, Select, SelectItem } from "@nextui-org/react";
import { useState } from "react";

const AddressForm = ({
  addressSaved,
  setAddressSaved
}: {
  addressSaved: boolean;
  setAddressSaved: React.Dispatch<boolean>;
}) => {
  const { userInfo } = useUserContext();

  const [addressDetails, setAddressDetails] = useState({
    firstNameInput: userInfo ? userInfo.firstname : "",
    lastNameInput: userInfo ? userInfo.lastname : "",
    countryInput: new Set(["United States"]),
    streetAddressInput: "101 Forest Path Rd",
    cityInput: "Night City",
    stateInput: new Set(["AB"]),
    zipCodeInput: "12345"
  });

  const { isInvalid: isZipCodeInvalid, errorMessage: invalidZipCodeMessage } =
    useValidate(addressDetails.zipCodeInput, "zip code");

  const handleInputChange = (value: any, inputState: string) => {
    setAddressDetails((addressDetails) => ({
      ...addressDetails,
      [inputState]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setAddressSaved(true);
  };

  return !addressSaved ? (
    <form onSubmit={handleSubmit} className="w-full py-6 flex flex-col gap-y-6">
      <div className="flex gap-x-2">
        <Input
          classNames={{
            input: "text-base"
          }}
          labelPlacement="outside"
          type="text"
          label="First Name"
          placeholder="Jane"
          value={addressDetails.firstNameInput}
          onChange={(e) => handleInputChange(e.target.value, "firstNameInput")}
        />
        <Input
          classNames={{
            input: "text-base"
          }}
          labelPlacement="outside"
          type="text"
          label="Last Name"
          placeholder="Doe"
          value={addressDetails.lastNameInput}
          onChange={(e) => handleInputChange(e.target.value, "lastNameInput")}
        />
      </div>
      <Select
        isRequired
        selectedKeys={addressDetails.countryInput}
        className="text-base"
        labelPlacement="outside"
        label="Country"
        placeholder="Country"
        selectorIcon={<Icon icon="heroicons:chevron-up-down-20-solid" />}
      >
        <SelectItem
          key="United States"
          value="United States"
          startContent={<Icon icon="twemoji:flag-united-states" />}
        >
          United States
        </SelectItem>
      </Select>
      <Input
        isRequired
        classNames={{
          input: "text-base"
        }}
        labelPlacement="outside"
        type="address"
        label="Street Address"
        placeholder="101 Forest Path Rd"
        value={addressDetails.streetAddressInput}
        onChange={(e) =>
          handleInputChange(e.target.value, "streetAddressInput")
        }
      />
      <div className="flex items-start gap-x-4">
        <Input
          isRequired
          classNames={{
            input: "text-base"
          }}
          labelPlacement="outside"
          type="text"
          label="City"
          placeholder="Night City"
          value={addressDetails.cityInput}
          onChange={(e) => handleInputChange(e.target.value, "cityInput")}
        />
        <Select
          isRequired
          labelPlacement="outside"
          label="State"
          placeholder="State"
          selectedKeys={addressDetails.stateInput}
          onSelectionChange={(keys) => handleInputChange(keys, "stateInput")}
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
          classNames={{
            input: "text-base"
          }}
          labelPlacement="outside"
          type="text"
          label="Zip Code"
          placeholder="12345"
          isInvalid={isZipCodeInvalid}
          errorMessage={invalidZipCodeMessage}
          value={addressDetails.zipCodeInput}
          onChange={(e) => handleInputChange(e.target.value, "zipCodeInput")}
        />
      </div>
      <Button
        type="submit"
        className="w-32 font-medium text-foreground bg-background px-4 py-1 rounded-xl"
      >
        Save Address
      </Button>
    </form>
  ) : (
    <div className="w-full py-6 flex flex-col gap-y-2">
      <p>
        <strong className="text-primary-foreground/85 font-bold">
          First Name:{" "}
        </strong>
        {addressDetails.firstNameInput}
      </p>
      <p>
        <strong className="text-primary-foreground/85 font-bold">
          Last Name:{" "}
        </strong>
        {addressDetails.lastNameInput}
      </p>
      <p>
        <strong className="text-primary-foreground/85 font-bold">
          Street Address:{" "}
        </strong>
        {addressDetails.streetAddressInput}
      </p>
      <p>
        <strong className="text-primary-foreground/85 font-bold">City: </strong>
        {addressDetails.cityInput}
      </p>
      <p>
        <strong className="text-primary-foreground/85 font-bold">
          State:{" "}
        </strong>
        {addressDetails.stateInput}
      </p>
      <p>
        <strong className="text-primary-foreground/85 font-bold">
          Zip Code:{" "}
        </strong>
        {addressDetails.zipCodeInput}
      </p>
      <p>
        <strong className="text-primary-foreground/85 font-bold">
          Country:{" "}
        </strong>
        {addressDetails.countryInput}
      </p>
      <Button
        className="w-32 mt-4 font-medium text-foreground bg-background px-4 py-1 rounded-xl"
        onPress={() => setAddressSaved(false)}
      >
        Edit Address
      </Button>
    </div>
  );
};

export default AddressForm;
