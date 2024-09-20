import React, { useState, useMemo } from "react";
import {
  ChakraProvider,
  Tab,
  TabList,
  Tabs,
  Flex,
  SimpleGrid,
  Text,
  Box,
} from "@chakra-ui/react";
import designsData from "../../data/designs-data.json";
import CustomCard from "./Card";

const TabbedSections = ({ categoryName }) => {
  const [selectedDesign, setSelectedDesign] = useState("All");
  // console.log(prodCategoryName.toLowerCase(), "prodCategoryName");
    const filteredProducts = useMemo(() => {
      return designsData.designs.filter((product) => {
        // console.log(product,'product');
        const normalizedCategory = product.category.toLowerCase();
        const normalizedDesign = product.designCategory.toLowerCase();
        return (
          normalizedCategory === categoryName.toLowerCase() &&
          (selectedDesign.toLowerCase() === "all" ||
            normalizedDesign === selectedDesign.toLowerCase())
        );
      });
    }, [categoryName, selectedDesign]);

  

  const renderContent = () => {
    switch (selectedDesign) {
      case "All":
      case "Cozy":
      case "Elegant":
      case "Minimalist":
      case "Classic":
      case "Industrial":
      case "Eclectic":
      case "Tropical":
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
      default:
        return <Text>No products available</Text>;
    }
  };

  return (
    <ChakraProvider>
      <Flex p={4}>
        <Tabs
          variant="enclosed"
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
      <Box p={4}>{renderContent()}</Box>
    </ChakraProvider>
  );
};

export default TabbedSections;
