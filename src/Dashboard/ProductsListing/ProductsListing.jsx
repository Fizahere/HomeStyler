import React, { useMemo } from "react";
import { Box, Heading, Flex, useDisclosure } from "@chakra-ui/react";
import APP_ICONS from "../../constants/icons";
import AddDrawer from "../../components/MainLayout/AddDrawer/AddDrawer";
import { Colors } from "../../constants/colors";
import CustomButton from "../../components/Mist/Button";
import productsData from "../../data/designs-data.json";
import { useParams } from "react-router-dom";
import CustomDataTable from "../../components/Mist/DataTable";

function ProductsListing() {
  const addDrawer = useDisclosure();
  const { category: categoryName} = useParams();
  // console.log(categoryName,'categoryName');
  const normalisedCategory = categoryName.toLowerCase();
// console.log(normalisedCategory,'normalisedCategory');


const filteredProducts = useMemo(() => {
  return productsData?.designs
    .filter((product) => {
      const normalizedProdCategory = product?.category.toLowerCase();
      const matchesCategory =
        normalizedProdCategory === normalisedCategory
      return matchesCategory;
    })
  })
// console.log(filteredProducts,'filteredProducts')

  return (
    <>
      <Flex justify={"space-between"}>
        <Heading size={{ base: "md", md: "lg" }}>
          Products of {normalisedCategory?.toUpperCase()}
        </Heading>
        {/* <CustomButton
          onClickHandler={addDrawer.onOpen}
          buttonText={"Add Show"}
          icon={APP_ICONS.ADD}
          backgroundColor={Colors.DASHBOARDTHEME}
        /> */}
      </Flex>
      <Box py={"2rem"}>
        <CustomDataTable showDataMemo={filteredProducts} />
      </Box>
      <AddDrawer disclosure={addDrawer} headingName={"Add Show"} />
    </>
  );
}

export default ProductsListing;
