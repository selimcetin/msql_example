import JsonTable from "../components/JsonTable";
import VeterinaryPracticeModal from "../components/modals/VeterinaryPracticeModal";
import ModalContextProvider from "../context/ModalContextProvider";
import { getVeterinaryDataContext } from "../controllers/contextController";
import { useDataContext } from "../hooks/useDataContext";
import { deleteData } from "../utils/fetchHelper";
import { actionTypes, contextTypes } from "../reducers/customReducer";
import { GET_PATH_VETERINARY_PRACTICES } from "../constants/apiRequestPaths";
import { idColumnVeterinaryPractice } from "../constants/tableData";

const VeterinaryPractices = () => {
  const { dispatch } = useDataContext();

  const deleteElement = async (element) => {
    dispatch({
      type: actionTypes.DELETE,
      context: contextTypes.petData,
      payload: element,
      id: idColumnVeterinaryPractice,
    });

    await deleteData(GET_PATH_VETERINARY_PRACTICES + element.PracticeID);
  };

  return (
    <ModalContextProvider>
      <JsonTable
        getContextFunction={getVeterinaryDataContext}
        deleteElement={deleteElement}
      />
      <VeterinaryPracticeModal />
    </ModalContextProvider>
  );
};

export default VeterinaryPractices;
