import { Checkbox, TextInput, Button, Select, Box } from "@mantine/core";
import { DateInput } from "@mantine/dates";
import { useDataContext } from "../hooks/useDataContext";
import {
  getCustomerDataContext,
  getDropdownDataArray,
} from "../controllers/contextController";
import { idColumnPet } from "../constants/tableData";
import { useModalContext } from "../hooks/useModalContext";
import { useState } from "react";
import { GET_PATH_PETS } from "../constants/apiRequestPaths";

export default function PetForm() {
  const { state } = useDataContext();
  const { onAddSubmit, onEditSubmit, element, setElement, isEditing } =
    useModalContext();
  const customerData = getCustomerDataContext(state);
  const [, setDate] = useState(null);

  const handleDateChange = (date) => {
    setDate(date);
    const dateString = `${date.getFullYear()}-${
      date.getMonth() + 1
    }-${date.getDate()}`;
    element.BirthDate = dateString;
  };

  const labelCustomerID = "CustomerID";
  const labelPetName = "Pet Name";
  const labelSpecies = "Species";
  const labelBirthDate = "Birth Date";
  const labelIsAlive = "Is Alive";

  const customerDropDownArray = getDropdownDataArray(
    customerData,
    "CustomerID",
    "CustomerName"
  );

  console.log("element", element);

  return (
    <Box maw={340} mx="auto">
      <Select
        mt="sm"
        label={labelCustomerID}
        placeholder="Pick a Customer"
        min={0}
        max={99}
        data={customerDropDownArray}
        onChange={(value) => {
          setElement({ ...element, CustomerID: parseInt(value) });
        }}
        value={element?.CustomerID.toString() || ""}
      />
      <TextInput
        mt="sm"
        label={labelPetName}
        placeholder={labelPetName}
        onChange={(e) => setElement({ ...element, PetName: e.target.value })}
        value={element?.PetName || ""}
      />
      <TextInput
        mt="sm"
        label={labelSpecies}
        placeholder={labelSpecies}
        onChange={(e) => setElement({ ...element, Species: e.target.value })}
        value={element?.Species || ""}
      />
      <DateInput
        mt="sm"
        label={labelBirthDate}
        placeholder={labelBirthDate}
        onChange={(value) => handleDateChange(value)}
        value={new Date(element?.BirthDate) || ""}
      />
      <Checkbox mt="sm" label={labelIsAlive} />
      <Button
        onClick={() =>
          isEditing
            ? onEditSubmit(idColumnPet, GET_PATH_PETS)
            : onAddSubmit(idColumnPet, GET_PATH_PETS)
        }
        mt="sm"
      >
        Submit
      </Button>
    </Box>
  );
}
