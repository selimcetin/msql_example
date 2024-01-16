import ModalContextProvider from "../../context/ModalContextProvider";
import PetForm from "../PetForm";
import FormModal from "./FormModal";

const PetModal = () => {
  return (
    <ModalContextProvider>
      <FormModal title="Pet" buttonText="Add Pet">
        <PetForm />
      </FormModal>
    </ModalContextProvider>
  );
};

export default PetModal;
