import { TextInput, Button, Box } from "@mantine/core";
import { useModalContext } from "../hooks/useModalContext";
import { GET_PATH_VETERINARY_PRACTICES } from "../constants/apiRequestPaths";
import { idColumnVeterinaryPractice } from "../constants/tableData";
import { contextTypes } from "../reducers/customReducer";

export default function VeterinaryPracticeForm({ onSubmit }) {
  const { onAddSubmit, onEditSubmit, element, setElement, isEditing } =
    useModalContext();

  const practiceNameLabel = "Practice Name";
  const locationLabel = "Location";
  const streetLabel = "Street";

  console.log("element in vetform", element);

  return (
    <Box maw={340} mx="auto">
      <form onSubmit={onSubmit}>
        <TextInput
          mt="sm"
          label={practiceNameLabel}
          placeholder={practiceNameLabel}
          onChange={(e) =>
            setElement({ ...element, PracticeName: e.target.value })
          }
          value={element?.PracticeName || ""}
        />
        <TextInput
          mt="sm"
          label={locationLabel}
          placeholder={locationLabel}
          onChange={(e) => setElement({ ...element, Location: e.target.value })}
          value={element?.Location || ""}
        />
        <TextInput
          mt="sm"
          label={streetLabel}
          placeholder={streetLabel}
          onChange={(e) => setElement({ ...element, Street: e.target.value })}
          value={element?.Street || ""}
        />
        <Button
          onClick={() =>
            isEditing
              ? onEditSubmit(
                  idColumnVeterinaryPractice,
                  GET_PATH_VETERINARY_PRACTICES,
                  contextTypes.veterinaryPracticeData
                )
              : onAddSubmit(
                  idColumnVeterinaryPractice,
                  GET_PATH_VETERINARY_PRACTICES,
                  contextTypes.veterinaryPracticeData
                )
          }
          mt="sm"
        >
          Submit
        </Button>
      </form>
    </Box>
  );
}
