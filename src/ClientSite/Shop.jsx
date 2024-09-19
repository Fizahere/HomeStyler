
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
// import { Colors } from "../assets/constants/colors";
// import { App_Icons } from "../assets/constants/icons";
// import plantData from "../data/PlantsData.json";
import { useParams } from "react-router-dom";
import TabbedSections from '../components/Mist/TabbedSections';

const Shop = () => {
//   const { category: categoryData } = useParams();
//   const dropdown = useDisclosure();

//   const [items, setItems] = useState(["sort by price", "sort alphabetically"]);
//   const [selectedItem, setSelectedItem] = useState(items[0]);

//   const [filteredData, setFilteredData] = useState(
//     categoryData
//       ? plantData.plants[categoryData]
//       : Object.values(plantData.plants).flat()
//   );

//   const handleSelect = (item) => {
//     setSelectedItem(item);
//     setItems([item, ...items.filter((i) => i !== item)]);

//     let sortedData = [...filteredData];

//     switch (item) {
//       case "sort by price":
//         sortedData.sort((a, b) => a.price - b.price);
//         break;
//       case "sort alphabetically":
//         sortedData.sort((a, b) => a.name.localeCompare(b.name));
//         break;
//       default:
//         break;
//     }

//     setFilteredData(sortedData);
//   };

//   const filterInputHandler = (event) => {
//     const searchValue = event.target.value.toLowerCase();
//     const data = categoryData
//       ? plantData.plants[categoryData]
//       : Object.values(plantData.plants).flat();

//     const filtered = data.filter((plant) =>
//       plant.name.toLowerCase().includes(searchValue)
//     );

//     setFilteredData(filtered);
//   };

  return (
    <>
      <Box mt={4}>
        <Flex
          p={2}
          borderBottom={"1px solid grey"}
          justifyContent={"space-between"}
        >
          <Heading fontSize={{ base: "20px", md: "30px" }}>
            {/* {categoryData ? categoryData : "explore"} */}
             plants
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
                <Icon
                // as={App_Icons.SEARCH} 
                color={"grey"} fontSize={20} />
              </InputRightElement>
            </InputGroup>
            <Box ml={4} mt={{ base: 2, md: 0 }}>
              <Menu>
                <MenuButton
                  as={Button}
                //   _dark={{ bg: Colors.DARKTHEME }}
                  border={"1px solid #e2e8f0"}
                //   onClick={dropdown.onToggle}
                >
                  <Flex>
                    <Text
                    //   color={Colors.GREY}
                      fontWeight={"400"}
                      fontSize={"15px"}
                      mt={0.5}
                    >
                      {/* {selectedItem} */}
                    </Text>
                    <Icon
                    //   as={App_Icons.DROPDOWN}
                    //   transform={
                    //     dropdown.isOpen ? "rotate(180deg)" : "rotate(0deg)"
                    //   }
                      fontSize={"25px"}
                    />
                  </Flex>
                </MenuButton>
                <MenuList
                //  _dark={{ bg: Colors.DARKTHEME }}
                 >
                {/* //   {items.map((item) => ( */}
                    <MenuItem
                    //   _dark={{ bg: Colors.DARKTHEME }}
                    //   key={item}
                    //   onClick={() => handleSelect(item)}
                    >
                      {/* {item} */}
                    </MenuItem>
                  {/* ))} */}
                </MenuList>
              </Menu>
            </Box>
          </Flex>
        </Flex>

        <Box py={8} className="collection">
          <SimpleGrid
            p={"10px"}
            columns={{ base: 1, sm: 2, md: 3, lg: 4 }}
            spacing={4}
          >
            {/* {(filteredData && filteredData.length > 0
              ? filteredData
              : categoryData
              ? plantData.plants[categoryData]
              : Object.values(plantData.plants).flat()
            ).map((singlePlant, index) => ( */}
              {/* <CustomCard
                key={index}
                category={categoryData}
                singlePlant={singlePlant}
              /> */}
            {/* ))} */}
          </SimpleGrid>
        </Box>
      </Box>
    </>
  );
};

export default Shop;


