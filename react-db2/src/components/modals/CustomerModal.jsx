import ModalContextProvider from "../../context/ModalContextProvider";
import CustomerForm from "../CustomerForm";
import FormModal from "./FormModal";

const CustomerModal = () => {
  return (
    <ModalContextProvider>
      <FormModal title="Customer" buttonText="Add Customer">
        <CustomerForm />
      </FormModal>
    </ModalContextProvider>
  );
};

export default CustomerModal;
