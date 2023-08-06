// @chakra-ui
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/table";

/**
 * @returns {JSX.Element}
 * @param column is a reference between column title and object value
 * @param data is a value based that will be displayed on table
 * @param showIndex is an option for table to showing index or not
 */
export default function StaticTable({ column, data, showIndex }: any) {
  if (!column || !data) return <p>Loading...</p>;
  return (
    <TableContainer marginBottom={5} overflowX="auto">
      <Table variant='striped' colorScheme='gray'>
        <Thead>
          <Tr>
            {showIndex && <Th key="index-header">No</Th>}
            {column.map((col: any, index: any) => {
              if (col.title) {
                return <Th key={col?.title + index}>{col?.title}</Th>;
              }
              return <Th key={`col${index}`}>{col?.titleAction(data)}</Th>;
            })}
          </Tr>
        </Thead>
        <Tbody>
          {data?.map((data: any, index: any) => (
            <Tr key={`data-body-${index}`}>
              {showIndex && <Td key="index-body">{index + 1}</Td>}
              {column?.map((col: any, index: any) => (
                <Td key={col + index} fontSize="xs">
                  {col?.value
                    ? data[col?.value]
                    : col?.row
                    ? col?.row(data)
                    : null}
                </Td>
              ))}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
