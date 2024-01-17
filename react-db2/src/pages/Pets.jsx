import JsonTable from "../components/JsonTable";
import PetModal from "../components/modals/PetModal";
import ModalContextProvider from "../context/ModalContextProvider";
import { getPetDataContext } from "../controllers/contextController";
import { useDataContext } from "../hooks/useDataContext";
import { deleteData } from "../utils/fetchHelper";
import { actionTypes, contextTypes } from "../reducers/customReducer";
import { GET_PATH_PETS } from "../constants/apiRequestPaths";
import { idColumnPet } from "../constants/tableData";

const Pets = () => {
  const { dispatch } = useDataContext();

  const deleteElement = async (element) => {
    dispatch({
      type: actionTypes.DELETE,
      context: contextTypes.petData,
      payload: element,
      id: idColumnPet,
    });

    await deleteData(GET_PATH_PETS + element.PetID);
  };

  return (
    <ModalContextProvider>
      <JsonTable
        getContextFunction={getPetDataContext}
        deleteElement={deleteElement}
      />
      <PetModal />
    </ModalContextProvider>
  );
};

export default Pets;
