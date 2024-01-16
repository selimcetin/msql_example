import { useForm } from "@mantine/form";
import { Checkbox, TextInput, Button, Select, Box } from "@mantine/core";
import { DateInput } from "@mantine/dates";
import { useDataContext } from "../hooks/useDataContext";
import {
  getCustomerDataContext,
  getDropdownDataArray,
} from "../controllers/contextController";
import { species } from "../constants/tableData";

export default function PetForm({ onSubmit }) {
  const { state } = useDataContext();
  const customerData = getCustomerDataContext(state);

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

  const form = useForm({
    initialValues: {
      PracticeID: "",
      CustomerName: "",
      Email: "",
      PhoneNumber: "",
    },

    validate: {
      CustomerID: (value) =>
        typeof value !== "number" ? "ID must be a number" : null,
      "Pet Name": (value) =>
        value.length < 2 ? "Name must have at least 2 letters" : null,
      Species: (value) =>
        species.includes(value) ? null : "Invalid phone number",
      "Birth Date": (value) =>
        /^\d{2}.\d{2}.\d{4}/.test(value) ? null : "Invalid date",
      "Is Alive": (value) =>
        typeof value === "boolean" ? null : "Invalid IsAlive value",
    },
  });

  return (
    <Box maw={340} mx="auto">
      <form onSubmit={onSubmit}>
        <Select
          mt="sm"
          label={labelCustomerID}
          placeholder="Pick a Customer"
          min={0}
          max={99}
          data={customerDropDownArray}
          {...form.getInputProps(labelCustomerID)}
        />
        <TextInput
          mt="sm"
          label={labelPetName}
          placeholder={labelPetName}
          {...form.getInputProps("PetName")}
        />
        <TextInput
          mt="sm"
          label={labelSpecies}
          placeholder={labelSpecies}
          {...form.getInputProps(labelSpecies)}
        />
        <DateInput
          mt="sm"
          label={labelBirthDate}
          placeholder={labelBirthDate}
          {...form.getInputProps(labelBirthDate)}
        />
        <Checkbox
          mt="sm"
          label={labelIsAlive}
          {...form.getInputProps(labelIsAlive)}
        />
        <Button type="submit" mt="sm">
          Submit
        </Button>
      </form>
    </Box>
  );
}
