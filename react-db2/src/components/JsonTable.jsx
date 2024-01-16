import { Table, Button } from "@mantine/core";
import { useDataContext } from "../hooks/useDataContext";

export default function JsonTable({
  handleEditClick,
  handleDeleteClick,
  getContextFunction,
}) {
  const { state } = useDataContext();
  const jsonData = getContextFunction(state);
  const tableHeaders = Object.keys(jsonData[0]);

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
              <Button onClick={handleEditClick}>Edit</Button>
            </Table.Td>
            <Table.Td>
              <Button onClick={handleDeleteClick}>Delete</Button>
            </Table.Td>
          </Table.Tr>
        ))}
      </Table.Tbody>
    </Table>
  );
}
