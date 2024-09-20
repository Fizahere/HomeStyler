import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  FormLabel,
  Input,
  Textarea,
  VStack,
  Flex,
  FormControl,
} from "@chakra-ui/react";
import { Colors } from "../../../constants/colors";
import { color } from "chart.js/helpers";

function AddDrawer(props) {
  const { disclosure, headingName } = props;
  return (
    <Drawer
      isOpen={disclosure?.isOpen}
      onClose={disclosure?.onClose}
      size={"lg"}
    >
      <DrawerOverlay />
      <DrawerContent
        bg={Colors.DASHBOARDTHEME}
        color={Colors.WHITE}
        _dark={{
          bg: Colors.DASHBOARDTHEME,
        }}
      >
        <DrawerCloseButton />
        <DrawerHeader>{headingName}</DrawerHeader>
        <DrawerBody>
          <VStack align="stretch" spacing={6}>
            <FormControl>
              <FormLabel>Name:</FormLabel>
              <Input
                color={Colors.WHITE}
                border={"1px solid grey"}
                _dark={{
                  border: "1px solid grey",
                }}
                _placeholder={{ color: Colors.PLACEHOLDER }}
                placeholder="Name"
              />
            </FormControl>

            <FormControl>
              <FormLabel>Description:</FormLabel>
              <Textarea
                color={Colors.WHITE}
                border={"1px solid grey"}
                _dark={{
                  border: "1px solid grey",
                }}
                _placeholder={{ color: Colors.PLACEHOLDER }}
                placeholder={"Description"}
              ></Textarea>
            </FormControl>
          </VStack>
        </DrawerBody>
        <DrawerFooter></DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

export default AddDrawer;
