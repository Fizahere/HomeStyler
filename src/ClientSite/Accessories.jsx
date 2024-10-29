import React from "react";
import { Box, Heading, Flex, SimpleGrid } from "@chakra-ui/react";
import CustomBreadCrumb from "../components/Mist/CustomBreadCrumb";
import { UnAuthenticatedRoutesNames } from "../utilities/util.constant";
import CustomCard from "../components/Mist/Card";
import accessoriesDataFile from "../data/accessories-data.json";
import { useNavigate } from "react-router-dom";

const Accessories = () => {
    const accessoriesData = accessoriesDataFile.accessories;
const navigate=useNavigate()
  const breadcrumbItems = [
    {
      label: "Home".toLocaleUpperCase(),
      onClick:()=>{navigate(UnAuthenticatedRoutesNames.HOME)},
    },
    { label: "ACCESSORIES", isCurrent: true },
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
            Accessories
          </Heading>
        </Flex>

        <Box py={8}>
          <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={6}>
            {accessoriesData?.map((singleItem, index) => (
              <CustomCard key={index} singleProduct={singleItem} />
            ))}
          </SimpleGrid>
        </Box>
      </Box>
    </>
  );
};

export default Accessories;
