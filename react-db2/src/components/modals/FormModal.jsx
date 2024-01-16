import { Button, Modal } from "@mantine/core";
import { useModalContext } from "../../hooks/useModalContext";

export default function FormModal({ children, title, buttonText }) {
  const { opened, open, close } = useModalContext();

  return (
    <>
      <Modal opened={opened} onClose={close} title={title}>
        {children}
      </Modal>
      <Button onClick={open}>{buttonText}</Button>
    </>
  );
}
