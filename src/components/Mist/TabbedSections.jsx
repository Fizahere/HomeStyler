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
import { Colors } from "../../constants/colors";

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
          borderTop={Colors.DASHBOARDTHEME}
          borderLeft={Colors.DASHBOARDTHEME}
          borderRight={Colors.DASHBOARDTHEME}
          _dark={{
            borderTop:Colors.GREY,
            borderLeft:Colors.GREY,
            borderRight:Colors.GREY
          }}
          overflow={"auto"}
          colorScheme="Grey" 
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
            <Tab color={'black'} _dark={{color:Colors.WHITE}}>All</Tab>
            <Tab color={'black'} _dark={{color:Colors.WHITE}}>Cozy</Tab>
            <Tab color={'black'} _dark={{color:Colors.WHITE}}>Elegant</Tab>
            <Tab color={'black'} _dark={{color:Colors.WHITE}}>Minimalist</Tab>
            <Tab color={'black'} _dark={{color:Colors.WHITE}}>Classic</Tab>
            <Tab color={'black'} _dark={{color:Colors.WHITE}}>Industrial</Tab>
            <Tab color={'black'} _dark={{color:Colors.WHITE}}>Eclectic</Tab>
            <Tab color={'black'} _dark={{color:Colors.WHITE}}>Tropical</Tab>
          </TabList>
        </Tabs>
      </Flex>

      <Box 
      p={4}
      >
        <Center>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={6}>
          {filteredProducts.length > 0 ? (
            filteredProducts.map((singleItem, index) => (
              <CustomCard key={index} singleProduct={singleItem} />
            ))
          ) : (
            <Text textAlign={'left'}>No products available</Text>
          )}
        </SimpleGrid>
        </Center>
      </Box>
    </ChakraProvider>
  );
};

export default TabbedSections;
