import React, { useMemo } from "react";
import {
  Box,
  Heading,
  Flex,
  Text,
  Center,
  SimpleGrid,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import DesignsData from '../data/designs-data.json';
import CustomCard from "../components/Mist/Card";

const SearchedDesigns = () => {
  const { query } = useParams();

  const filteredProducts = useMemo(() => {
    if (!query) return [];
    const normalizeQuery = query.toLowerCase();
    return DesignsData?.designs.filter(singleItem => {
      const normalizedDesignName = singleItem?.name.toLowerCase();
      return normalizedDesignName.includes(normalizeQuery);
    });
  }, [query]);

  return (
    <Box mt={4}>
      <Flex
        p={2}
        borderBottom={"1px solid grey"}
        justifyContent={"space-between"}
      >
        <Heading ml={3} fontSize={{ base: "20px", md: "30px" }}>
          Search Results For{" "}
          <Text as="span" fontWeight="bold">
            {query?.toUpperCase() || "YOUR SEARCH"}
          </Text>
        </Heading>
      </Flex>
      <Box p={4}>
        <Center>
          <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={6}>
            {filteredProducts.length > 0 ? (
              filteredProducts.map((singleItem, index) => (
                <CustomCard key={index} singleProduct={singleItem} />
              ))
            ) : (
              <Text textAlign={"left"}>No products available</Text>
            )}
          </SimpleGrid>
        </Center>
      </Box>
    </Box>
  );
};

export default SearchedDesigns;
