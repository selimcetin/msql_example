import JsonTable from "../components/JsonTable";
import VeterinaryPracticeModal from "../components/modals/VeterinaryPracticeModal";
import ModalContextProvider from "../context/ModalContextProvider";
import { getVeterinaryDataContext } from "../controllers/contextController";

const VeterinaryPractices = () => {
  return (
    <ModalContextProvider>
      <JsonTable getContextFunction={getVeterinaryDataContext} />
      <VeterinaryPracticeModal />
    </ModalContextProvider>
  );
};

export default VeterinaryPractices;
