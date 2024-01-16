import { useState, createContext } from "react";
import { useDisclosure } from "@mantine/hooks";
import { useDataContext } from "../hooks/useDataContext";
import { actionTypes, contextTypes } from "../reducers/customReducer";
import { postData, putData } from "../utils/fetchHelper";
import { GET_PATH_CUSTOMERS } from "../constants/apiRequestPaths";

export const ModalContext = createContext();

const ModalContextProvider = ({ children }) => {
  const { dispatch } = useDataContext();
  const [opened, { open, close }] = useDisclosure(false);
  const [element, setElement] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const onAddSubmit = async () => {
    dispatch({
      type: actionTypes.ADD,
      context: contextTypes.customerData,
      payload: element,
    });

    await postData(GET_PATH_CUSTOMERS, JSON.stringify(element));

    close();
  };

  const onEditSubmit = async () => {
    dispatch({
      type: actionTypes.UPDATE,
      context: contextTypes.customerData,
      payload: element,
    });

    const { CustomerID, ...elementWithoutCustomerID } = element;

    await putData(
      GET_PATH_CUSTOMERS + element.CustomerID,
      JSON.stringify(elementWithoutCustomerID)
    );

    setIsEditing(false);
    close();
  };

  const contextValue = {
    opened,
    open,
    close,
    element,
    setElement,
    isEditing,
    setIsEditing,
    onAddSubmit,
    onEditSubmit,
  };

  return (
    <ModalContext.Provider value={contextValue}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalContextProvider;
