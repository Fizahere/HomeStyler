import React, { useState, useEffect } from "react";
import {
  Image,
  Heading,
  Text,
  Box,
  SimpleGrid,
  Flex,
  Skeleton,
  Avatar,
  Icon,
} from "@chakra-ui/react";
import { Colors } from "../constants/colors";
import { useParams } from "react-router-dom";
import ProductsData from "../data/product-new-data.json";
import CustomButton from "../components/Mist/Button";
import { productsImagesMap } from "../constants/images";
import APP_ICONS from "../constants/icons";
import { UnAuthenticatedRoutesNames } from "../utilities/util.constant";

function ProductDetail() {
  const { product: productID } = useParams();
  const id = Number(productID);
  const [imageUrl, setImageUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [foundProduct, setFoundProduct] = useState(null);

  useEffect(() => {
    const fetchData = () => {
      const product = ProductsData.browsingProducts.categories
        .flatMap((category) =>
          category.subcategories.flatMap((subcategory) => subcategory.products)
        )
        .find((product) => product.id === id);
      const imageKey = product.image?.toUpperCase();
      const productImageSrc = productsImagesMap[imageKey];
      setImageUrl(productImageSrc || "fallback-image-url");

      setFoundProduct(product);
      setIsLoading(false);
    };

    fetchData();
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
  const reviewsArr = reviews.length;

  const addToCart = () => {
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    const itemIndex = existingCart.findIndex((item) => item.id === id);
  
    if (itemIndex > -1) {
      alert(`${foundProduct.name} is already in your cart!`);
    } else {
      existingCart.push({
        id,
        name,
        price,
        quantity: 1,
        totalPrice: price,
        image: imageUrl,
        description,
        reviews,
      });
      localStorage.setItem("cart", JSON.stringify(existingCart));
      alert(`${name} has been added to your cart!`);
      location.assign(UnAuthenticatedRoutesNames.HOME)
    }
  
    console.log("Current Cart:", existingCart);
  };
  

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
              src={imageUrl}
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
            <Text fontSize={"15px"} fontWeight={"bold"} mt={10}>
              Description:
            </Text>
            <Text color={Colors.GREY} fontSize={14}>
              {description}
            </Text>
            <Flex justifyContent={'space-between'} alignItems={'center'}>
              <Text mt={6} fontSize={"15px"} color={'green'} fontWeight={"400"}>
                Price: ${price}
              </Text>
              <Box>
                {[...Array(5)].map((_, index) => (
                  <Icon key={index} as={APP_ICONS.FIILEDSTAR} color={'#ffd11a'}/>
                ))}
              </Box>
            </Flex>
            <Box mt={8}>
              <CustomButton title={"Add to Cart"} onClick={addToCart} width={'100%'}/>
            </Box>
            <Box mt={10} mb={5}>
              <Text fontSize={"25px"} fontWeight={"bold"}>
                Review ({reviewsArr + 1})
              </Text>
              {reviews?.map((singlereview, index) => (
                <Flex key={index} p={1} mt={6} borderBottom={"1px solid grey"}>
                  <Avatar name="Ali" />
                  <Box ml={2}>
                    <Text ml={"2"} fontWeight={"bold"}>
                      {singlereview.user}
                    </Text>
                    <Text>{singlereview.comment}!! </Text>
                  </Box>
                </Flex>
              ))}
              <Flex p={1} mt={6} borderBottom={"1px solid grey"}>
                <Avatar name="Selena" />
                <Box ml={2}>
                  <Text ml={"2"} fontWeight={"bold"}>
                    Selena
                  </Text>
                  <Text ml={1}>Stunning!! </Text>
                </Box>
              </Flex>
            </Box>
          </Box>
        </Box>
      </SimpleGrid>
    </Box>
  );
}

export default ProductDetail;
