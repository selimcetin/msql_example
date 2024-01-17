import { TextInput, Button, Select, Box } from "@mantine/core";
import { useDataContext } from "../hooks/useDataContext";
import {
  getDropdownDataArray,
  getVeterinaryDataContext,
} from "../controllers/contextController";
import { useModalContext } from "../hooks/useModalContext";
import { idColumnCustomer } from "../constants/tableData";
import { GET_PATH_CUSTOMERS } from "../constants/apiRequestPaths";
import { contextTypes } from "../reducers/customReducer";

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

  return (
    <Box maw={340} mx="auto">
      <Select
        mt="sm"
        label={labelPracticeID}
        placeholder="Pick a Practice"
        min={0}
        max={99}
        data={veterinaryPracticeDropDownArray}
        onChange={(value) => {
          setElement({ ...element, PracticeID: parseInt(value) });
        }}
        value={element?.PracticeID.toString() || ""}
      />
      <TextInput
        mt="sm"
        label={labelCustomerName}
        placeholder={labelCustomerName}
        onChange={(e) =>
          setElement({ ...element, CustomerName: e.target.value })
        }
        value={element?.CustomerName || ""}
      />
      <TextInput
        mt="sm"
        label={labelEmail}
        placeholder={labelEmail}
        onChange={(e) => setElement({ ...element, Email: e.target.value })}
        value={element?.Email || ""}
      />
      <TextInput
        mt="sm"
        label={labelPhone}
        placeholder={labelPhone}
        onChange={(e) => setElement({ ...element, Phone: e.target.value })}
        value={element?.Phone || ""}
      />
      <Button
        onClick={() =>
          isEditing
            ? onEditSubmit(
                idColumnCustomer,
                GET_PATH_CUSTOMERS,
                contextTypes.customerData
              )
            : onAddSubmit(
                idColumnCustomer,
                GET_PATH_CUSTOMERS,
                contextTypes.customerData
              )
        }
        mt="sm"
      >
        Submit
      </Button>
    </Box>
  );
}
