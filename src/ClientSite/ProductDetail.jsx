import React from "react";
import {
  Image,
  Heading,
  Text,
  Box,
  SimpleGrid,
  Flex,
  Button,
} from "@chakra-ui/react";
import { Colors } from "../constants/colors";
import { useParams } from "react-router-dom";
import ProductsData from '../data/product-new-data.json';

function ProductDetail() {
  const { product: productID } = useParams();
  const id = Number(productID); // Convert to number

  // Find the product by ID
  const foundProduct = ProductsData.browsingProducts.categories.flatMap(category =>
    category.subcategories.flatMap(subcategory => subcategory.products)
  ).find(product => product.id === id);

  if (!foundProduct) {
    return <Text>Product not found</Text>; // Handle case where product is not found
  }

  const {
    name,
    image,
    description,
    price,
    reviews,
    isProduct,
  } = foundProduct;

  return (
    <Box display={"flex"} justifyContent={"space-between"}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} p={"0"}>
        <Box display={"flex"} justifyContent={"space-between"} ml={{ base: "0", md: "5" }}>
          <Box maxW={"600px"}>
            <Image
              src={image}
              alt={name}
              borderRadius="md"
              width={"800px"}
              height={{ md: "auto", base: "auto" }}
              mt={"14px"}
            />
          </Box>
        </Box>
        <Box ml={{ base: "0", md: "80px" }} borderLeft={{ base: "none", md: "1px solid gray" }} p={{ base: "0", md: "3" }}>
          <Box mb={4} ml={5}>
            <Heading size="xl">{name}</Heading>
            <Text mt={2} fontSize={"15px"} fontWeight={"400"}>Price: ${price}</Text>
            <Text fontSize={"15px"} fontWeight={"bold"} mt={10}>Description:</Text>
            <Text color={Colors.GREY} fontSize={14}>{description}</Text>
            <Flex mt={10} justifyContent={"space-between"}>
              <Text fontSize={"15px"} fontWeight={"bold"} m={2}>Reviews:</Text>
              {reviews.map((review, index) => (
                <Text key={index}>{review.user}: {review.comment} (Rating: {review.rating})</Text>
              ))}
            </Flex>
            <Button
              mt={8}
              width={"100%"}
              bgGradient="linear(to-r, #30362f, #4d5c3e)"
              color={Colors.WHITE}
              _hover={{ bg: Colors.THEMEBUTTON }}
              onClick={() => console.log('Add to cart')}
            >
              Add To Wishlist
            </Button>
          </Box>
        </Box>
      </SimpleGrid>
    </Box>
  );
}

export default ProductDetail;
