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

  const onAddSubmit = async (idColumnName, path) => {
    setIsEditing(false);

    dispatch({
      type: actionTypes.ADD,
      context: contextTypes.customerData,
      payload: element,
      id: idColumnName,
    });

    await postData(path, JSON.stringify(element));

    close();
  };

  const onEditSubmit = async (idColumnName, path) => {
    dispatch({
      type: actionTypes.UPDATE,
      context: contextTypes.petData,
      payload: element,
      id: idColumnName,
    });

    const { [idColumnName]: value, ...elementWithoutCustomerID } = element;

    await putData(
      path + element[idColumnName],
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
