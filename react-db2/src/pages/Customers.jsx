import JsonTable from "../components/JsonTable";
import CustomerModal from "../components/modals/CustomerModal";
import ModalContextProvider from "../context/ModalContextProvider";
import { getCustomerDataContext } from "../controllers/contextController";
import { useState } from "react";

export default function Customers() {
  const [modalOpen, setModalOpen] = useState(false);
  const [customer, setCustomer] = useState(null);

  const handleEditClick = (customer) => {
    setCustomer(customer);
    setModalOpen(!modalOpen);
  };

  return (
    <ModalContextProvider>
      <JsonTable getContextFunction={getCustomerDataContext} />
      <CustomerModal />
    </ModalContextProvider>
  );
}
