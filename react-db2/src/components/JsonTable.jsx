import { useLoaderData } from "react-router-dom";
import { Table, Button } from "@mantine/core";
import { useDataContext } from "../hooks/useDataContext";
import { useEffect } from "react";

export default function JsonTable({ context }) {
  const { dispatch } = useDataContext();
  const jsonData = useLoaderData();
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
              <Button>Edit</Button>
            </Table.Td>
            <Table.Td>
              <Button>Delete</Button>
            </Table.Td>
          </Table.Tr>
        ))}
      </Table.Tbody>
    </Table>
  );
}
