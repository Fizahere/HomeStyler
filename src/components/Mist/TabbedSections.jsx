import React, { useState } from "react";
import {
  ChakraProvider,
  Box,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  Flex,
  SimpleGrid,
} from "@chakra-ui/react";
import productsData from "../../data/products-data.json";
import CustomCard from "./Card";

const TabbedSections = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts = productsData.homeStyler.filter((product) =>
    selectedCategory === "All"
      ? true
      : product.category === selectedCategory
  );

  return (
    <ChakraProvider>
      <Flex p={4} justifyContent={"center"}>
        <Tabs
          variant="enclosed"
          onChange={(index) => {
            const categories = ["All", "Cozy", "Elegant", "Minimalist", "Classic", "Contemporary"];
            setSelectedCategory(categories[index]);
          }}
        >
          <TabList>
            <Tab>All</Tab>
            <Tab>Cozy</Tab>
            <Tab>Elegant</Tab>
            <Tab>Minimalist</Tab>
            <Tab>Classic</Tab>
            <Tab>Contemporary</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <Flex wrap="wrap" justifyContent="center">
                <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }}
                  spacing={6}>
                  {filteredProducts.map((singleItem, index) => (
                    <CustomCard key={index} singleProduct={singleItem} />
                  ))}
                </SimpleGrid>
              </Flex>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
    </ChakraProvider>
  );
};

export default TabbedSections;
