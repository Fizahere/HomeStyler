import React, { useState } from "react";
import {
  Box,
  Heading,
  Flex,
  Input,
  InputGroup,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Icon,
  useDisclosure,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import TabbedSections from "../components/Mist/TabbedSections"; // Import the TabbedSections component
import { useParams } from "react-router-dom";
import APP_ICONS from "../constants/icons";
import { Colors } from "../constants/colors";

const Shop = () => {
  const dropdown = useDisclosure();
  const [items, setItems] = useState(["sort by price", "sort alphabetically"]);
  const [selectedItem, setSelectedItem] = useState(items[0]);
  
  // Use category from URL params
  const { category: categoryName } = useParams();
  const [selectedDesign, setSelectedDesign] = useState("All"); // Add state for selected design category

  return (
    <>
      <Box mt={4}>
        <Flex p={2} borderBottom={"1px solid grey"} justifyContent={"space-between"}>
          <Heading ml={3} fontSize={{ base: "20px", md: "30px" }}>
            {categoryName?.toUpperCase() || "Shop"} {/* Use categoryName */}
          </Heading>

          <Flex flexDirection={{ base: "column", md: "row" }}>
            <InputGroup>
              <Input borderRadius={10} p={2} placeholder={"Search"} _placeholder={{ fontSize: "15px" }} />
              <InputRightElement mr={3}>
                <Icon as={APP_ICONS.SEARCH} color={"grey"} fontSize={20} />
              </InputRightElement>
            </InputGroup>

            <Box ml={4} mt={{ base: 2, md: 0 }}>
              <Menu>
                <MenuButton as={Button} _dark={{ bg: Colors.DARKTHEME }} border={"1px solid #e2e8f0"}>
                  <Flex>
                    <Text color={Colors.GREY} fontWeight={"400"} fontSize={"15px"} mt={0.5}>
                      {selectedItem}
                    </Text>
                    <Icon
                      as={APP_ICONS.THREEBARS}
                      transform={dropdown.isOpen ? "rotate(180deg)" : "rotate(0deg)"}
                      fontSize={"25px"}
                    />
                  </Flex>
                </MenuButton>
                <MenuList _dark={{ bg: Colors.DARKTHEME }}>
                  {items.map((item) => (
                    <MenuItem key={item} onClick={() => setSelectedItem(item)}>
                      {item}
                    </MenuItem>
                  ))}
                </MenuList>
              </Menu>
            </Box>
          </Flex>
        </Flex>

        <Box py={8}>
          {/* Pass selectedDesign and setSelectedDesign to TabbedSections */}
          <TabbedSections categoryName={categoryName} selectedDesign={selectedDesign} setSelectedDesign={setSelectedDesign} />
        </Box>
      </Box>
    </>
  );
};

export default Shop;
