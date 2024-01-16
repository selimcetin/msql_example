import JsonTable from "../components/JsonTable";
import PetModal from "../components/modals/PetModal";
import ModalContextProvider from "../context/ModalContextProvider";
import { getPetDataContext } from "../controllers/contextController";

const Pets = () => {
  return (
    <ModalContextProvider>
      <JsonTable getContextFunction={getPetDataContext} />
      <PetModal />
    </ModalContextProvider>
  );
};

export default Pets;
