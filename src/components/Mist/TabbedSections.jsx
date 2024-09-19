import React from "react";
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
} from '@chakra-ui/react';
import productsData from '../../data/products-data.json';
import CustomCard from "./Card";

const TabbedSections = (categoryName) => {
  // console.log(categoryName, 'category');
  const filteredProducts = productsData.homeStyler.filter(
    (product) => product.category === categoryName 
  );
  return (
    <ChakraProvider>
      <Flex p={4} justifyContent={'center'}>
        <Tabs variant="enclosed">
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
              {filteredProducts.map((singleItem, index) => {
                <CustomCard
                  key={index}
                  singleProduct={singleItem}
                />
              })}
            </TabPanel>
            <TabPanel>
              <Text fontSize="lg">A sophisticated design with luxurious materials and refined color palettes.</Text>
            </TabPanel>
            <TabPanel>
              <Text fontSize="lg">A clean and uncluttered space emphasizing simplicity and functionality.</Text>
            </TabPanel>
            <TabPanel>
              <Text fontSize="lg">Timeless elegance with traditional furniture and rich fabrics.</Text>
            </TabPanel>
            <TabPanel>
              <Text fontSize="lg">A modern design featuring sleek lines and innovative materials.</Text>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
    </ChakraProvider>
  );
};

export default TabbedSections;