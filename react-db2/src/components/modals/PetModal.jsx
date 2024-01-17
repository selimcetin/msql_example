import PetForm from "../PetForm";
import FormModal from "./FormModal";

const PetModal = () => {
  return (
    <FormModal title="Pet" buttonText="Add Pet">
      <PetForm />
    </FormModal>
  );
};

export default PetModal;
