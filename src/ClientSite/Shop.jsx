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
import TabbedSections from "../components/Mist/TabbedSections";
import { useParams } from "react-router-dom";
import APP_ICONS from "../constants/icons";
import { Colors } from "../constants/colors";
import WishlistTable from "../components/Mist/WishlistTable";
import CustomBreadCrumb from "../components/Mist/CustomBreadCrumb";
import { UnAuthenticatedRoutesNames } from "../utilities/util.constant";

const Shop = () => {
  const dropdown = useDisclosure();
  const [items] = useState([
    "Sort by Style",
    "Sort Alphabetically",
    "Sort by Price",
  ]);
  const [selectedItem, setSelectedItem] = useState(items[0]);
  const [searchQuery, setSearchQuery] = useState("");
  const { category: categoryName } = useParams();
  const [selectedDesign, setSelectedDesign] = useState("All");
  const [sortOption, setSortOption] = useState("");

  const handleSortSelection = (item) => {
    setSelectedItem(item);
    if (item === "Sort by Alphabetically") {
      setSortOption("name");
    } else if (item === "Sort by Price") {
      setSortOption("price");
    } else {
      setSortOption("");
    }
  };

  const breadcrumbItems = [
    { label: "Home".toLocaleUpperCase(), href: UnAuthenticatedRoutesNames.HOME },
    { label: categoryName.toLocaleUpperCase() || "Shop", isCurrent:true },
  ];

  return (
    <>
      <Box mt={4}>
        <CustomBreadCrumb items={breadcrumbItems} />

        <Flex
          p={2}
          borderBottom={"1px solid grey"}
          justifyContent={"space-between"}
        >
          <Heading ml={3} fontSize={{ base: "20px", md: "30px" }}>
            {categoryName?.toUpperCase() || "Wishlist"}
          </Heading>

          <Flex flexDirection={{ base: "column", md: "row" }}>
            <InputGroup>
              <Input
                borderRadius={10}
                p={2}
                placeholder={"Search"}
                _placeholder={{ fontSize: "15px" }}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <InputRightElement mr={3}>
                <Icon as={APP_ICONS.SEARCH} color={"grey"} fontSize={20} />
              </InputRightElement>
            </InputGroup>

            <Box ml={4} mt={{ base: 2, md: 0 }}>
              <Menu isOpen={dropdown.isOpen}>
                <MenuButton
                  as={Button}
                  onClick={dropdown.onToggle}
                  _dark={{ bg: Colors.DARKTHEME }}
                  border={"1px solid #e2e8f0"}
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
                      as={APP_ICONS.TOGGLE}
                      transform={
                        dropdown.isOpen ? "rotate(180deg)" : "rotate(0deg)"
                      }
                      transition="transform 0.3s ease"
                      ml={2}
                      fontSize={"20px"}
                    />
                  </Flex>
                </MenuButton>
                <Box p={4} _dark={{ bg: Colors.DARKTHEME }}>
                  <MenuList
                    border={"1px solid grey"}
                    py={0}
                    _dark={{ bg: Colors.DARKTHEME }}
                  >
                    {items.map((item) => (
                      <MenuItem
                        _dark={{
                          bg: Colors.DASHBOARDTHEME,
                          _hover: {
                            bg: "#333333",
                          },
                        }}
                        key={item}
                        onClick={() => {
                          dropdown.onClose(); 
                          handleSortSelection(item);
                        }}
                      >
                        {item}
                      </MenuItem>
                    ))}
                  </MenuList>
                </Box>
              </Menu>
            </Box>
          </Flex>
        </Flex>

        <Box py={8}>
          {categoryName ? (
            <TabbedSections
              categoryName={categoryName}
              searchQuery={searchQuery}
              selectedItem={selectedItem}
              selectedDesign={selectedDesign}
              setSelectedDesign={setSelectedDesign}
            />
          ) : (
            <WishlistTable searchQuery={searchQuery} sortOption={sortOption} />
          )}
        </Box>
      </Box>
    </>
  );
};

export default Shop;
