import React, { useMemo } from "react";
import {
  ChakraProvider,
  Tab,
  TabList,
  Tabs,
  Flex,
  SimpleGrid,
  Text,
  Box,
  Center,
} from "@chakra-ui/react";
import designsData from "../../data/designs-data.json";
import CustomCard from "./Card";

const TabbedSections = ({
  categoryName,
  searchQuery,
  selectedItem,
  selectedDesign,
  setSelectedDesign,
}) => {
  const filteredProducts = useMemo(() => {
    return designsData.designs
      .filter((product) => {
        const normalizedCategory = product.category.toLowerCase();
        const normalizedDesign = product.designCategory.toLowerCase();
        const matchesCategory =
          normalizedCategory === categoryName.toLowerCase() &&
          (selectedDesign.toLowerCase() === "all" ||
            normalizedDesign === selectedDesign.toLowerCase());
        const matchesSearch = product.name
          .toLowerCase()
          .includes(searchQuery.toLowerCase());

        return matchesCategory && matchesSearch;
      })
      .sort((a, b) => {
        if (selectedItem === "Sort by Price") {
          return a.price - b.price;
        } else if (selectedItem === "Sort Alphabetically") {
          return a.name.localeCompare(b.name);
        } else if (selectedItem === "Sort by Style") {
          return a.designCategory.localeCompare(b.designCategory);
        }
        return 0;
      });
  }, [categoryName, selectedDesign, searchQuery, selectedItem]);

  return (
    <ChakraProvider>
      <Flex p={4}>
        <Tabs
          variant="enclosed"
          overflow={"auto"}
          colorScheme="White" 
          onChange={(index) => {
            const categories = [
              "All",
              "Cozy",
              "Elegant",
              "Minimalist",
              "Classic",
              "Industrial",
              "Eclectic",
              "Tropical",
            ];
            setSelectedDesign(categories[index]);
          }}
        >
          <TabList>
            <Tab>All</Tab>
            <Tab>Cozy</Tab>
            <Tab>Elegant</Tab>
            <Tab>Minimalist</Tab>
            <Tab>Classic</Tab>
            <Tab>Industrial</Tab>
            <Tab>Eclectic</Tab>
            <Tab>Tropical</Tab>
          </TabList>
        </Tabs>
      </Flex>

      <Box p={4}>
        <Center>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={6}>
          {filteredProducts.length > 0 ? (
            filteredProducts.map((singleItem, index) => (
              <CustomCard key={index} singleProduct={singleItem} />
            ))
          ) : (
            <Text>No products available</Text>
          )}
        </SimpleGrid>
        </Center>
      </Box>
    </ChakraProvider>
  );
};

export default TabbedSections;
