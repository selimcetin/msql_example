import { useForm } from "@mantine/form";
import { TextInput, Button, Select, Box } from "@mantine/core";
import { useDataContext } from "../hooks/useDataContext";

export default function CustomerForm({ onSubmit }) {
  const { state } = useDataContext();

  console.log("state", state);

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
      CustomerName: (value) =>
        value.length < 3 ? "Name must have at least 3 letters" : null,
      PhoneNumber: (value) =>
        /0[1-9]{3}-?[1-9]\d{4,9}/.test(value) ? null : "Invalid phone number",
      Email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });

  return (
    <Box maw={340} mx="auto">
      <form onSubmit={onSubmit}>
        <Select
          mt="sm"
          label="Practice Name"
          placeholder="Pick a Practice"
          min={0}
          max={99}
          {...form.getInputProps("PracticeID")}
        />
        <TextInput
          mt="sm"
          label="Customer Name"
          placeholder="Customer Name"
          {...form.getInputProps("CustomerName")}
        />
        <TextInput
          mt="sm"
          label="Email"
          placeholder="Email"
          {...form.getInputProps("Email")}
        />
        <TextInput
          mt="sm"
          label="Phone Number"
          placeholder="Phone Number"
          {...form.getInputProps("PhoneNumber")}
        />
        <Button type="submit" mt="sm">
          Submit
        </Button>
      </form>
    </Box>
  );
}
