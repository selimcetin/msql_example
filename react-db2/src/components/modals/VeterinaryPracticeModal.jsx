import ModalContextProvider from "../../context/ModalContextProvider";
import VeterinaryPracticeForm from "../veterinaryPracticeForm";
import FormModal from "./FormModal";

const VeterinaryPracticeModal = () => {
  return (
    <ModalContextProvider>
      <FormModal
        title="Veterinary Practice"
        buttonText="Add Veterinary Practice"
      >
        <VeterinaryPracticeForm />
      </FormModal>
    </ModalContextProvider>
  );
};

export default VeterinaryPracticeModal;
