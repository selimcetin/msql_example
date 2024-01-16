import { useState, createContext } from "react";
import { useDisclosure } from "@mantine/hooks";

export const ModalContext = createContext();

const ModalContextProvider = ({ children }) => {
  const [opened, { open, close }] = useDisclosure(false);
  const [element, setElement] = useState(null);

  const contextValue = {
    opened,
    open,
    close,
    element,
    setElement,
  };

  return (
    <ModalContext.Provider value={contextValue}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalContextProvider;
