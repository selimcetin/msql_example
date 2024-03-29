import { Button, Modal } from "@mantine/core";
import { useModalContext } from "../../hooks/useModalContext";

export default function FormModal({ children, title, buttonText }) {
  const { opened, open, close, setIsEditing, setElement } = useModalContext();

  const handleClick = () => {
    setElement(null);
    setIsEditing(false);
    open();
  };

  return (
    <>
      <Modal opened={opened} onClose={close} title={title}>
        {children}
      </Modal>
      <Button onClick={handleClick}>{buttonText}</Button>
    </>
  );
}
