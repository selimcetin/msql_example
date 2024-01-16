import { useContext } from "react";
import { ModalContext } from "../context/ModalContextProvider";

export const useModalContext = () => {
  const context = useContext(ModalContext);

  if (!context) {
    throw Error("useModalContext must be used inside an ModalContextProvider");
  }

  return context;
};
