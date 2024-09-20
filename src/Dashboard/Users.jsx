import React from "react";
import { Heading, Flex, Button, Box, Icon } from "@chakra-ui/react";
import AddDrawer from "../components/MainLayout/AddDrawer/AddDrawer";
import CustomTable from "../components/Mist/Table";
import CustomButton from "../components/Mist/Button";
import { Colors } from "../constants/colors";
import APP_ICONS from "../constants/icons";
import testImage from "../assets/images/testImage.jpeg";
import data from '../data/designers-data.json'

function Users() {
  const designers = data.homeStyler.designers;

  // const showDataMemo = [
  //   {
  //     id: 1,
  //     name: "Fiza",
  //     country: "USA",
  //     image_thumbnail_path: testImage,
  //     status: "active",
  //     network: "scsc",
  //   },
  // ];
  return (
    <>
      <Flex justify={"space-between"}>
        <Heading size={"lg"}>Users</Heading>
        <CustomButton
        width={'150px'}
          onClickHandler={()=>{}}
          title={"Add User"}
          icon={APP_ICONS.ADD}
          backgroundColor={Colors.DASHBOARDTHEME}
        />
      </Flex>
      <Box py={"2rem"}>
        <CustomTable designerData={designers} />
      </Box>
    </>
  );
}

export default Users;
