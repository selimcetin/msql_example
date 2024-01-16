import { useForm } from "@mantine/form";
import { TextInput, Button, Select, Box } from "@mantine/core";
import { useDataContext } from "../hooks/useDataContext";
import {
  getDropdownDataArray,
  getVeterinaryDataContext,
} from "../controllers/contextController";

export default function CustomerForm({ onSubmit }) {
  const { state } = useDataContext();
  const practiceData = getVeterinaryDataContext(state);

  const labelPracticeID = "PracticeID";
  const labelCustomerName = "Customer Name";
  const labelEmail = "Email";
  const labelPhoneNumber = "Phone Number";

  const veterinaryPracticeDropDownArray = getDropdownDataArray(
    practiceData,
    "PracticeID",
    "PracticeName"
  );

  const form = useForm({
    initialValues: {
      PracticeID: "",
      CustomerName: "",
      Email: "",
      PhoneNumber: "",
    },

    validate: {
      PracticeID: (value) =>
        typeof value !== "number" ? "ID must be a number" : null,
      "Customer Name": (value) =>
        value.length < 3 ? "Name must have at least 3 letters" : null,
      "Phone Number": (value) =>
        /0[1-9]{3}-?[1-9]\d{4,9}/.test(value) ? null : "Invalid phone number",
      Email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });

  return (
    <Box maw={340} mx="auto">
      <form onSubmit={onSubmit}>
        <Select
          mt="sm"
          label={labelPracticeID}
          placeholder="Pick a Practice"
          min={0}
          max={99}
          data={veterinaryPracticeDropDownArray}
          {...form.getInputProps(labelPracticeID)}
        />
        <TextInput
          mt="sm"
          label={labelCustomerName}
          placeholder={labelCustomerName}
          {...form.getInputProps("CustomerName")}
        />
        <TextInput
          mt="sm"
          label={labelEmail}
          placeholder={labelEmail}
          {...form.getInputProps(labelEmail)}
        />
        <TextInput
          mt="sm"
          label={labelPhoneNumber}
          placeholder={labelPhoneNumber}
          {...form.getInputProps(labelPhoneNumber)}
        />
        <Button type="submit" mt="sm">
          Submit
        </Button>
      </form>
    </Box>
  );
}
