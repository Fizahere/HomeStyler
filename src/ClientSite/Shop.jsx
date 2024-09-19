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
  SimpleGrid,
} from "@chakra-ui/react";
import CustomCard from "../components/Mist/Card";
import { Colors } from "../constants/colors";
import { useParams } from "react-router-dom";
import APP_ICONS from "../constants/icons";
import TabbedSections from "../components/Mist/TabbedSections";
import Products from '../data/products-data.json';

const Shop = () => {
  const dropdown = useDisclosure();
  const [items, setItems] = useState(["sort by price", "sort alphabetically"]);
  const [selectedItem, setSelectedItem] = useState(items[0]);

  const { category: categoryName } = useParams();
  // console.log(category,'category');

  return (
    <>
      <Box mt={4}>
        <Flex
          p={2}
          borderBottom={"1px solid grey"}
          justifyContent={"space-between"}
        >
          <Heading ml={3} fontSize={{ base: "20px", md: "30px" }}>
            {categoryName.toUpperCase()}
          </Heading>
          <Flex flexDirection={{ base: "column", md: "row" }}>
            <InputGroup display={"flex"} justifyContent={"space-between"}>
              <Input
                borderRadius={10}
                p={2}
                // onChange={filterInputHandler}
                placeholder={"Search"}
                _placeholder={{ fontSize: "15px" }}
              />
              <InputRightElement mr={3}>
                <Icon as={APP_ICONS.SEARCH} color={"grey"} fontSize={20} />
              </InputRightElement>
            </InputGroup>
            <Box ml={4} mt={{ base: 2, md: 0 }}>
              <Menu>
                <MenuButton
                  as={Button}
                  _dark={{ bg: Colors.DARKTHEME }}
                  border={"1px solid #e2e8f0"}
                // onClick={dropdown.onToggle}
                >
                  <Flex>
                    <Text
                      color={Colors.GREY}
                      fontWeight={"400"}
                      fontSize={"15px"}
                      mt={0.5}
                    >
                      {selectedItem}
                    </Text>
                    <Icon
                      as={APP_ICONS.THREEBARS}
                      transform={
                        dropdown.isOpen ? "rotate(180deg)" : "rotate(0deg)"
                      }
                      fontSize={"25px"}
                    />
                  </Flex>
                </MenuButton>
                <MenuList _dark={{ bg: Colors.DARKTHEME }}>
                  {/* {items.map((item) => (
                    <MenuItem
                      _dark={{ bg: Colors.DARKTHEME }}
                      key={item}
                      onClick={() => handleSelect(item)}
                    >
                      {item}
                    </MenuItem>
                  ))} */}
                </MenuList>
              </Menu>
            </Box>
          </Flex>
        </Flex>

        <Box py={8}
        //  className="collection"
        >
          <TabbedSections categoryName={categoryName} />

          {/* {AllProducts.map((singleItem,index) =>
              console.log(singleItem,'singleItem')
             (
              <CustomCard
                key={index}
                singlePlant={singleItem}
              />
            ))} */}
        </Box>
      </Box>
    </>
  );
};

export default Shop;