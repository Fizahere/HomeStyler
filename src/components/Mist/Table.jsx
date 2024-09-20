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
import { designersImages } from "../../constants/images";

function CustomTable(props) {
  const { designerData: showDataMemoMap } = props;
  return (
    <Box overflow={"auto"}>
      <Table>
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>Name</Th>
            <Th>Contact</Th>
            <Th>Image</Th>
            <Th>Delete</Th>
          </Tr>
        </Thead>
        <Tbody>
          {showDataMemoMap?.map((singleDesigner, index) => (
            <Tr key={index}>
              <Td>{singleDesigner?.id}</Td>
              <Td>{singleDesigner?.name}</Td>
              <Td textAlign={'center'}>
                {singleDesigner?.contact?.email}
                <br/>
                {singleDesigner?.contact?.phone}
                </Td>
              <Td>
                <Image h={150} width={200} src={designersImages[singleDesigner?.profileImage]}/>
              </Td>
              <Td>
                <CustomButton
                  onClickHandler={() => {}}
                  title={"Delete"}
                  icon={""}
                  color={Colors.WHITE}
                  bg={Colors.RED}
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
