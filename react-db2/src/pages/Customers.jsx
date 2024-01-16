import JsonTable from "../components/JsonTable";
import CustomerModal from "../components/modals/CustomerModal";
import ModalContextProvider from "../context/ModalContextProvider";
import { getCustomerDataContext } from "../controllers/contextController";

export default function Customers() {
  return (
    <ModalContextProvider>
      <JsonTable getContextFunction={getCustomerDataContext} />
      <CustomerModal />
    </ModalContextProvider>
  );
}
