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
  } from '@chakra-ui/react';
  

const TabbedSections = () => {
    return (
      <ChakraProvider>
        <Box p={4}>
          <Tabs variant="enclosed">
            <TabList>
              <Tab>Cozy</Tab>
              <Tab>Elegant</Tab>
              <Tab>Minimalist</Tab>
              <Tab>Classic</Tab>
              <Tab>Contemporary</Tab>
            </TabList>
  
            <TabPanels>
              <TabPanel>
                <Text fontSize="lg">A warm and inviting space featuring soft textiles and earthy tones.</Text>
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
        </Box>
      </ChakraProvider>
    );
  };

  export default TabbedSections;