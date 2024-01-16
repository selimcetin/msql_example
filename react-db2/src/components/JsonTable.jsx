import { Table, Button } from "@mantine/core";
import { useDataContext } from "../hooks/useDataContext";
import { useModalContext } from "../hooks/useModalContext";

export default function JsonTable({ deleteElement, getContextFunction }) {
  const { state } = useDataContext();
  const { setElement, open } = useModalContext();

  const jsonData = getContextFunction(state);
  const tableHeaders = Object.keys(jsonData[0]);

  const handleEditClick = (element) => {
    setElement(element);
    open();
  };

  const handleDeleteClick = (element) => {
    setElement(element);

    deleteElement(element);
  };

  return (
    <Table>
      <Table.Thead>
        <Table.Tr>
          {tableHeaders.map((header, index) => (
            <Table.Th key={index}>{header}</Table.Th>
          ))}
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        {jsonData.map((element, index) => (
          <Table.Tr key={index}>
            {tableHeaders.map((header, index) => (
              <Table.Td key={index}>{element[header]}</Table.Td>
            ))}
            <Table.Td>
              <Button onClick={() => handleEditClick(element)}>Edit</Button>
            </Table.Td>
            <Table.Td>
              <Button onClick={() => handleDeleteClick(element)}>Delete</Button>
            </Table.Td>
          </Table.Tr>
        ))}
      </Table.Tbody>
    </Table>
  );
}
