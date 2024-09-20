import React, { useState, useEffect } from "react";
import {
  Image,
  Heading,
  Text,
  Box,
  SimpleGrid,
  Skeleton,
  SkeletonText,
  Flex,
  Avatar,
} from "@chakra-ui/react";
import { Colors } from "../constants/colors";
import { useParams } from "react-router-dom";
import Designs from "../data/designs-data.json";
import ProductsData from "../data/product-new-data.json";
import { designImagesMap, productsImagesMap } from "../constants/images";
import GalleryCard from "../components/Mist/GalleryCard";

function Detail() {
  const { design: designId } = useParams();
  const [relatedProducts, setRelatedProducts] = useState([]);
  // console.log(relatedProducts, "");

  const getDesignById = Designs.designs.find((singleItem) => {
    return singleItem.id === Number(designId);
  });

  const previewerImageUrls =
    getDesignById?.pictures.map((pic) => designImagesMap[pic]) || [];

  useEffect(() => {
    const fetchData = () => {
      const related = ProductsData.browsingProducts.categories
        .flatMap((category) =>
          category.subcategories.flatMap((subcategory) => subcategory.products)
        )
        .filter((product) => product.designID === Number(designId))
        .map((product) => {
          const prodName = product?.name;
          const imageKey = product.image?.toUpperCase();
          const productImageSrc = productsImagesMap[imageKey];
          return {
            relatedProdName: prodName,
            relatedProdImage: productImageSrc,
          };
        });

      setRelatedProducts(related);
    };

    fetchData();
  }, [designId]);

  const [showDetailLoading, setShowDetailLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowDetailLoading(false);
      setSelectedImage(designImagesMap[getDesignById?.image]);
    }, 1500);

    return () => clearTimeout(timer);
  }, [getDesignById]);

  const handleThumbnailClick = (image) => {
    setSelectedImage(image);
  };

  if (!getDesignById) {
    return (
      <Box p={5}>
        <Heading size="lg" color="red.500">
          Design not found
        </Heading>
      </Box>
    );
  }

  return (
    <Box px={{ base: 1, lg: 10 }}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} p={"0"}>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          ml={{ base: "0", md: "5" }}
        >
          <Box maxW={"800px"}>
            {showDetailLoading ? (
              <Skeleton
                borderRadius="md"
                width={{ md: "400px", base: "300px" }}
                height={{ md: "400px", base: "300px" }}
                mt={"14px"}
              />
            ) : (
              <Image
                src={selectedImage || designImagesMap[getDesignById?.image]}
                alt={getDesignById?.name}
                borderRadius="md"
                width={{ md: "600px", base: "500px" }}
                height={{ md: "400px", base: "300px" }}
                mt={"14px"}
              />
            )}

            <Heading size={"md"} py={"4"} px={"1"}>
              {showDetailLoading ? (
                <Skeleton width="100px" height="20px" />
              ) : (
                "Images"
              )}
            </Heading>
            <SimpleGrid columns={{ base: 2, md: 3 }} spacing={2}>
              {showDetailLoading
                ? [...Array(3)].map((_, index) => (
                    <Skeleton
                      key={index}
                      borderRadius="md"
                      width={{ md: "150px", base: "150px" }}
                      height={150}
                    />
                  ))
                : previewerImageUrls?.map((singlePic, index) => (
                    <Image
                      key={index}
                      src={singlePic}
                      alt={`Thumbnail ${index}`}
                      borderRadius="md"
                      width={{ md: "150px", base: "200px" }}
                      height={150}
                      onClick={() => handleThumbnailClick(singlePic)}
                      cursor="pointer"
                      border={
                        selectedImage === singlePic
                          ? "4px solid #808080"
                          : "none"
                      }
                      _hover={{ border: "2px solid gray" }}
                    />
                  ))}
            </SimpleGrid>
          </Box>
        </Box>
        <Box borderLeft={{ base: "none", md: "1px solid grey" }} pl={6} mt={6}>
          <Box>
            <Heading size="lg">
              {showDetailLoading ? (
                <SkeletonText noOfLines={1} width="150px" />
              ) : (
                getDesignById?.name
              )}
            </Heading>
          </Box>
          <Box mt={10}>
            <Text fontWeight={"bold"}>Description:</Text>
            {showDetailLoading ? (
              <SkeletonText noOfLines={1} width="150px" />
            ) : (
              <Text color={Colors.GREY} fontSize="1xl">
                {getDesignById?.description}
              </Text>
            )}
          </Box>
          <Box mt={4}>
            <Text color={"green"} fontSize="1xl">
              <span>Total Cost: $ </span>
              {getDesignById?.price}
            </Text>
          </Box>
          <Box mt={10}>
            <Text fontSize={"25px"} fontWeight={"bold"}>
              Review (3)
            </Text>
            {[...Array(3)].map((_, index) => (
              <Flex key={index} p={1} mt={6} borderBottom={"1px solid grey"}>
                <Avatar name="Ali" />
                <Box ml={2}>
                  <Text ml={"2"} fontWeight={"bold"}>
                    Ali
                  </Text>
                  <Text>very mindful, very demure!! </Text>
                </Box>
              </Flex>
            ))}
          </Box>
        </Box>
      </SimpleGrid>
      <Box mt={4}>
        <Text
          fontSize={"22px"}
          fontWeight={"bold"}
          px={"2"}
          py={"3"}
          borderBottom={"1px solid grey"}
        >
          {showDetailLoading ? (
            <Skeleton width="120px" height="25px" />
          ) : (
            "Products Used In The Design"
          )}
        </Text>
        {/* <Flex justifyContent={"space-evenly"} mt={5}> */}
          <SimpleGrid
          mt={4}
              columns={{ base: 1, sm: 1, md: 2, lg: 4 }}
              spacing={6}
          >
          {showDetailLoading
            ? [...Array(2)].map((_, index) => (
                <Box
                  key={index}
                  maxW="md"
                  borderWidth="1px"
                  borderRadius="lg"
                  overflow="hidden"
                  p="4"
                  m={"4"}
                  boxShadow="md"
                >
                  <SkeletonText noOfLines={1} width="200px" mb="2" />
                  <SkeletonText noOfLines={1} width="50px" />
                  <Box display={"flex"} justifyContent={"space-between"} mt="2">
                    <Skeleton width="100px" height="20px" />
                    <Skeleton width="80px" height="20px" />
                  </Box>
                </Box>
              ))
            : relatedProducts.map((singleProduct, index) => (
                  <GalleryCard
                    key={index}
                    cardData={{
                      name: singleProduct?.relatedProdName,
                      image: singleProduct?.relatedProdImage,
                    }}
                  />
              ))}
                </SimpleGrid>
        {/* </Flex> */}
      </Box>
    </Box>
  );
}

export default Detail;
