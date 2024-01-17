import VeterinaryPracticeForm from "../veterinaryPracticeForm";
import FormModal from "./FormModal";

const VeterinaryPracticeModal = () => {
  return (
    <FormModal title="Veterinary Practice" buttonText="Add Veterinary Practice">
      <VeterinaryPracticeForm />
    </FormModal>
  );
};

export default VeterinaryPracticeModal;
