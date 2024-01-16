import { useForm } from "@mantine/form";
import { TextInput, Button, Select, Box } from "@mantine/core";

export default function VeterinaryPracticeForm({ onSubmit }) {
  const practiceNameLabel = "Practice Name";
  const locationLabel = "Location";
  const streetLabel = "Street";

  const form = useForm({
    initialValues: {
      PracticeName: "",
      Location: "",
      Street: "",
    },

    validate: {
      PracticeID: (value) =>
        typeof value !== "number" ? "ID must be a number" : null,
      "Practice Name": (value) =>
        value.length < 3
          ? `${practiceNameLabel} must have at least 3 letters`
          : null,
      Location: (value) =>
        value.length < 3
          ? `${locationLabel} must have at least 3 letters`
          : null,
      Street: (value) =>
        value.length < 3 ? `${streetLabel} must have at least 3 letters` : null,
    },
  });

  return (
    <Box maw={340} mx="auto">
      <form onSubmit={onSubmit}>
        <TextInput
          mt="sm"
          label={practiceNameLabel}
          placeholder={practiceNameLabel}
          {...form.getInputProps(practiceNameLabel)}
        />
        <TextInput
          mt="sm"
          label={locationLabel}
          placeholder={locationLabel}
          {...form.getInputProps(locationLabel)}
        />
        <TextInput
          mt="sm"
          label={streetLabel}
          placeholder={streetLabel}
          {...form.getInputProps(streetLabel)}
        />
        <Button type="submit" mt="sm">
          Submit
        </Button>
      </form>
    </Box>
  );
}
