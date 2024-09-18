import React from "react";
import { Box, Heading, Flex, useDisclosure } from "@chakra-ui/react";
import APP_ICONS from "../../constants/icons";
import AddDrawer from "../../components/MainLayout/AddDrawer/AddDrawer";
import { Colors } from "../../constants/colors";
import CustomButton from "../../components/Mist/Button";
import productsData from "../../data/products-data.json";
import { useParams } from "react-router-dom";
import CustomDataTable from "../../components/Mist/DataTable";

function ProductsListing() {
  const addDrawer = useDisclosure();
  const { category: categoryName, subcategory: subCategoryName } = useParams();

  const filteredProducts = productsData.homeStyler.filter(
    (product) => product.category === categoryName && product.design === subCategoryName
  );
  
  return (
    <>
      <Flex justify={"space-between"}>
        <Heading size={{ base: "md", md: "lg" }}>
          Products of {filteredProducts.category}
        </Heading>
        <CustomButton
          onClickHandler={addDrawer.onOpen}
          buttonText={"Add Show"}
          icon={APP_ICONS.ADD}
          backgroundColor={Colors.DASHBOARDTHEME}
        />
      </Flex>
      <Box py={"2rem"}>
        <CustomDataTable showDataMemo={filteredProducts} />
      </Box>
      <AddDrawer disclosure={addDrawer} headingName={"Add Show"} />
    </>
  );
}

export default ProductsListing;
