import { Button, Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

export default function FormModal({ children, title, buttonText }) {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal opened={opened} onClose={close} title={title}>
        {children}
      </Modal>
      <Button onClick={open}>{buttonText}</Button>
    </>
  );
}
