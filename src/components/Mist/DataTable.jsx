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
} from "@chakra-ui/react";
import { Colors } from "../../constants/colors";
import CustomButton from "./Button";

function CustomDataTable(props) {
  const { showDataMemo: showDataMemoMap } = props;
  console.log(showDataMemoMap,'map')
  return (
    <Box overflow={"auto"}>
      <Table>
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>Name</Th>
            <Th>Category</Th>
            <Th>Image</Th>
            <Th>Description</Th>
            <Th>Price</Th>
            <Th>Edit</Th>
            <Th>Delete</Th>
          </Tr>
        </Thead>
        <Tbody>
          {showDataMemoMap.map((singleShow, index) => (
            <Tr key={index}>
              <Td>{singleShow.productId}</Td>
              <Td>{singleShow.name}</Td>
              <Td>{singleShow.category}</Td>
              <Td>
                <Image
                  height="100px"
                  width="100px"
                  src={singleShow.image}
                  alt={singleShow.name}
                />
              </Td>
              <Td>{singleShow.description}</Td>
              <Td>{singleShow.price}</Td>
              <Td>
                <CustomButton
                  onClickHandler={() => {}}
                  buttonText={"Edit"}
                  icon={""}
                  color={Colors.WHITE}
                  backgroundColor={Colors.PRIMARY}
                />
              </Td>
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

export default CustomDataTable;
