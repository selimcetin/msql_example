import { useForm } from "@mantine/form";
import { TextInput, Button, Select, Box } from "@mantine/core";
import { useDataContext } from "../hooks/useDataContext";
import {
  getDropdownDataArray,
  getVeterinaryDataContext,
} from "../controllers/contextController";
import { useModalContext } from "../hooks/useModalContext";
import { idColumnCustomer } from "../constants/tableData";
import { GET_PATH_CUSTOMERS } from "../constants/apiRequestPaths";

export default function CustomerForm() {
  const { state } = useDataContext();
  const { onAddSubmit, onEditSubmit, element, setElement, isEditing } =
    useModalContext();

  const practiceData = getVeterinaryDataContext(state);

  const labelPracticeID = "PracticeID";
  const labelCustomerName = "Customer Name";
  const labelEmail = "Email";
  const labelPhone = "Phone Number";

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

  console.log("isEditing custform", isEditing);

  return (
    <Box maw={340} mx="auto">
      <Select
        mt="sm"
        label={labelPracticeID}
        placeholder="Pick a Practice"
        min={0}
        max={99}
        data={veterinaryPracticeDropDownArray}
        {...form.getInputProps(labelPracticeID)}
        onChange={(value) => {
          setElement({ ...element, PracticeID: parseInt(value) });
        }}
        value={element?.PracticeID.toString() || ""}
      />
      <TextInput
        mt="sm"
        label={labelCustomerName}
        placeholder={labelCustomerName}
        {...form.getInputProps("CustomerName")}
        onChange={(e) =>
          setElement({ ...element, CustomerName: e.target.value })
        }
        value={element?.CustomerName || ""}
      />
      <TextInput
        mt="sm"
        label={labelEmail}
        placeholder={labelEmail}
        {...form.getInputProps(labelEmail)}
        onChange={(e) => setElement({ ...element, Email: e.target.value })}
        value={element?.Email || ""}
      />
      <TextInput
        mt="sm"
        label={labelPhone}
        placeholder={labelPhone}
        {...form.getInputProps(labelPhone)}
        onChange={(e) => setElement({ ...element, Phone: e.target.value })}
        value={element?.Phone || ""}
      />
      <Button
        onClick={() =>
          isEditing
            ? onEditSubmit(idColumnCustomer, GET_PATH_CUSTOMERS)
            : onAddSubmit(idColumnCustomer, GET_PATH_CUSTOMERS)
        }
        mt="sm"
      >
        Submit
      </Button>
    </Box>
  );
}
