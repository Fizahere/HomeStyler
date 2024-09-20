import React, { useMemo, useState } from "react";
import {
  Tab,
  TabList,
  Tabs,
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
  ChakraProvider,
} from "@chakra-ui/react";
import CustomCard from "../components/Mist/Card";
import { Colors } from "../constants/colors";
import { useParams } from "react-router-dom";
import APP_ICONS from "../constants/icons";
import ProductsData from "../data/product-new-data.json";

const Products = () => {
  const dropdown = useDisclosure();
  const [items] = useState([
    "Sort by Style",
    "Sort Alphabetically",
    "Sort by Price",
  ]);
  const [selectedItem, setSelectedItem] = useState(items[0]);
  const [searchQuery, setSearchQuery] = useState("");
  const { prodCategory: categoryName } = useParams();

  const handleSortSelection = (item) => {
    setSelectedItem(item);
  };

  return (
    <>
      <Box mt={4}>
        <Flex p={2} borderBottom={"1px solid grey"} justifyContent={"space-between"}>
          <Heading ml={3} fontSize={{ base: "20px", md: "30px" }}>
            {categoryName.toUpperCase()}
          </Heading>
          <Flex flexDirection={{ base: "column", md: "row" }}>
            <InputGroup display={"flex"} justifyContent={"space-between"}>
              <Input
                borderRadius={10}
                p={2}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={"Search"}
                _placeholder={{ fontSize: "15px" }}
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
                    <Text color={Colors.GREY} fontWeight={"400"} fontSize={"15px"} mt={0.5}>
                      {selectedItem}
                    </Text>
                    <Icon
                      as={APP_ICONS.TOGGLE}
                      transform={dropdown.isOpen ? "rotate(180deg)" : "rotate(0deg)"}
                      transition="transform 0.3s ease"
                      ml={2}
                      fontSize={"20px"}
                    />
                  </Flex>
                </MenuButton>
                <MenuList _dark={{ bg: Colors.DARKTHEME }}>
                  {items.map((item) => (
                    <MenuItem key={item} onClick={() => handleSortSelection(item)}>
                      {item}
                    </MenuItem>
                  ))}
                </MenuList>
              </Menu>
            </Box>
          </Flex>
        </Flex>

        <Box py={8}>
          {categoryName && (
            <TabbedSections
              prodCategoryName={categoryName}
              searchQuery={searchQuery}
              selectedItem={selectedItem}
            />
          )}
        </Box>
      </Box>
    </>
  );
};

export default Products;

const TabbedSections = ({ prodCategoryName, searchQuery, selectedItem }) => {
  const [selectedSubCategory, setSelectedSubCategory] = useState("All");

  const filteredProducts = useMemo(() => {
    const matchingCategory = ProductsData?.browsingProducts?.categories.find(
      (cat) => cat?.category?.toLowerCase() === prodCategoryName?.toLowerCase()
    );

    if (!matchingCategory) return [];

    const filteredSubcategories = matchingCategory.subcategories.filter(
      (subcategory) =>
        selectedSubCategory?.toLowerCase() === "all" ||
        subcategory?.name?.toLowerCase() === selectedSubCategory?.toLowerCase()
    );

    const products = filteredSubcategories?.flatMap(
      (subcategory) => subcategory?.products
    );

    // Filter by search query
    const searchedProducts = products.filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Sort the filtered products based on selectedItem
    return searchedProducts.sort((a, b) => {
      if (selectedItem === "Sort by Price") {
        return a.price - b.price;
      } else if (selectedItem === "Sort Alphabetically") {
        return a.name.localeCompare(b.name);
      }
      return 0;
    });
  }, [prodCategoryName, selectedSubCategory, searchQuery, selectedItem]);

  const subcategories = useMemo(() => {
    const category = ProductsData?.browsingProducts?.categories.find(
      (cat) => cat.category?.toLowerCase() === prodCategoryName?.toLowerCase()
    );
    return category
      ? ["All", ...category?.subcategories?.map((sub) => sub.name)]
      : [];
  }, [prodCategoryName]);

  const renderContent = () => {
    if (subcategories.includes(selectedSubCategory)) {
      return (
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={6}>
          {filteredProducts.length > 0 ? (
            filteredProducts.map((singleItem, index) => (
              <CustomCard key={index} singleProduct={singleItem} />
            ))
          ) : (
            <Text>No products available</Text>
          )}
        </SimpleGrid>
      );
    } else {
      return <Text>No products available</Text>;
    }
  };

  return (
    <ChakraProvider>
      <Flex p={4}>
        <Tabs
          variant="enclosed"
          onChange={(index) => {
            setSelectedSubCategory(subcategories[index]);
          }}
        >
          <TabList>
            {subcategories?.map((sub, index) => (
              <Tab key={index}>{sub}</Tab>
            ))}
          </TabList>
        </Tabs>
      </Flex>
      <Box p={4}>{renderContent()}</Box>
    </ChakraProvider>
  );
};
