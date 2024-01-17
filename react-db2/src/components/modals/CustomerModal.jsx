import CustomerForm from "../CustomerForm";
import FormModal from "./FormModal";

const CustomerModal = () => {
  return (
    <FormModal title="Customer" buttonText="Add Customer">
      <CustomerForm />
    </FormModal>
  );
};

export default CustomerModal;
