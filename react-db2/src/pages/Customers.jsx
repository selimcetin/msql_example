import JsonTable from "../components/JsonTable";
import CustomerModal from "../components/modals/CustomerModal";
import ModalContextProvider from "../context/ModalContextProvider";
import { getCustomerDataContext } from "../controllers/contextController";
import { useDataContext } from "../hooks/useDataContext";
import { deleteData } from "../utils/fetchHelper";
import { actionTypes, contextTypes } from "../reducers/customReducer";
import { GET_PATH_CUSTOMERS } from "../constants/apiRequestPaths";
import { idColumnCustomer } from "../constants/tableData";

export default function Customers() {
  const { dispatch } = useDataContext();

  const deleteElement = async (element) => {
    dispatch({
      type: actionTypes.DELETE,
      context: contextTypes.customerData,
      payload: element,
      id: idColumnCustomer,
    });

    await deleteData(GET_PATH_CUSTOMERS + element.CustomerID);
  };

  return (
    <ModalContextProvider>
      <JsonTable
        getContextFunction={getCustomerDataContext}
        deleteElement={deleteElement}
      />
      <CustomerModal />
    </ModalContextProvider>
  );
}
