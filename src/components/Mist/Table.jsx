import React from "react";
import {
  Box,
  Table,
  Thead,
  Tbody,
  Th,
  Tr,
  Td,
  Image,
  Button,
} from "@chakra-ui/react";
import { Colors } from "../../constants/colors";
import CustomButton from "./Button";

function CustomTable(props) {
  const { showDataMemo: showDataMemoMap } = props;
  return (
    <Box overflow={"auto"}>
      <Table>
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>Name</Th>
            <Th>Email</Th>
          </Tr>
        </Thead>
        <Tbody>
          {showDataMemoMap.map((singleShow, index) => (
            <Tr key={index}>
              <Td>{singleShow.id}</Td>
              <Td>{singleShow.name}</Td>
              <Td>fiza@gmail.com</Td>
              <Td>
                <CustomButton
                  onClickHandler={() => {}}
                  buttonText={"Delete"}
                  icon={""}
                  color={Colors.WHITE}
                  backgroundColor={Colors.BUTTON}
                />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
}

export default CustomTable;
