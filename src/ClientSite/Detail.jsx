import React, { useState, useEffect } from "react";
import {
  Image,
  Heading,
  Text,
  Box,
  SimpleGrid,
  Flex,
  Button,
  Skeleton,
} from "@chakra-ui/react";
import { Colors } from "../constants/colors";
import { useParams } from "react-router-dom";
import ProductsData from "../data/product-new-data.json";

function ProductDetail() {
  const { product: productID } = useParams();
  const id = Number(productID); // Convert to number

  const [isLoading, setIsLoading] = useState(true);
  const [foundProduct, setFoundProduct] = useState(null);

  useEffect(() => {
    const fetchData = () => {
      const product = ProductsData.browsingProducts.categories
        .flatMap((category) =>
          category.subcategories.flatMap((subcategory) => subcategory.products)
        )
        .find((product) => product.id === id);

      setFoundProduct(product);
    };

    fetchData();

    // Set a timeout for at least 2 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer); // Clean up the timer
  }, [id]);

  if (isLoading) {
    return (
      <Box display={"flex"} justifyContent={"space-between"}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} p={"0"}>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            ml={{ base: "0", md: "5" }}
          >
            <Box maxW={"600px"}>
              <Skeleton height="400px" width="800px" borderRadius="md" />
            </Box>
          </Box>
          <Box
            ml={{ base: "0", md: "80px" }}
            borderLeft={{ base: "none", md: "1px solid gray" }}
            p={{ base: "0", md: "3" }}
          >
            <Box mb={4} ml={5}>
              <Skeleton height="40px" width="300px" />
              <Skeleton height="20px" width="200px" mt={4} />
              <Skeleton height="20px" width="100%" mt={10} />
              <Skeleton height="20px" width="100%" mt={4} />
              <Flex mt={10} justifyContent={"space-between"}>
                <Skeleton height="20px" width="100px" />
              </Flex>
              <Skeleton height="50px" width="100%" mt={8} />
            </Box>
          </Box>
        </SimpleGrid>
      </Box>
    );
  }

  if (!foundProduct) {
    return <Text>Product not found</Text>;
  }

  const { name, image, description, price, reviews } = foundProduct;
  return (
    <Box display={"flex"} justifyContent={"space-between"}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} p={"0"}>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          ml={{ base: "0", md: "5" }}
        >
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
        <Box
          ml={{ base: "0", md: "80px" }}
          borderLeft={{ base: "none", md: "1px solid gray" }}
          p={{ base: "0", md: "3" }}
        >
          <Box mb={4} ml={5}>
            <Heading size="xl">{name}</Heading>
            <Text mt={2} fontSize={"15px"} fontWeight={"400"}>
              Price: ${price}
            </Text>
            <Text fontSize={"15px"} fontWeight={"bold"} mt={10}>
              Description:
            </Text>
            <Text color={Colors.GREY} fontSize={14}>
              {description}
            </Text>
            <Flex mt={10} justifyContent={"space-between"}>
              <Text fontSize={"15px"} fontWeight={"bold"} m={2}>
                Reviews:
              </Text>
              {reviews.map((review, index) => (
                <Text key={index}>
                  {review.user}: {review.comment} (Rating: {review.rating})
                </Text>
              ))}
            </Flex>
            <Button
              bgGradient="linear(to-r, gray.800, gray.100,gray.800)"
              color={Colors.BLACK}
              _hover={{ bg: Colors.THEMEBUTTON }}
              w={270}
              p={3}
              borderRadius={8}
              fontWeight={"bold"}
            >
              Add to Wishlist
            </Button>
          </Box>
        </Box>
      </SimpleGrid>
    </Box>
  );
}

export default ProductDetail;
