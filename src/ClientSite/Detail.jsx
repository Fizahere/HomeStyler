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
} from "@chakra-ui/react";
import { Colors } from "../constants/colors";
import { useParams } from "react-router-dom";
import Designs from "../data/designs-data.json";
import Products from "../data/products-data.json";
import { designImagesMap } from "../constants/images";

function Detail() {
  const { design: designId } = useParams();
  const getDesignById = Designs.designs.find((singleItem) => singleItem.id === Number(designId));

  const previewerImageUrls = getDesignById?.pictures.map((pic) => designImagesMap[pic]) || [];

  const getProductsByDesignID = Products.homeStyler.filter((singleItem) => singleItem.designID === Number(designId));

  const [showDetailLoading, setShowDetailLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowDetailLoading(false);
      setSelectedImage(designImagesMap[getDesignById?.image]); 
    }, 2000);

    return () => clearTimeout(timer);
  }, [getDesignById]);

  const handleThumbnailClick = (image) => {
    setSelectedImage(image);
  };

  if (!getDesignById) {
    return (
      <Box p={5}>
        <Heading size="lg" color="red.500">Design not found</Heading>
      </Box>
    );
  }

  return (
    <Box display={"flex"} justifyContent={"space-between"}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} p={"0"}>
        <Box display={"flex"} justifyContent={"space-between"} ml={{ base: "0", md: "5" }}>
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

            <Flex mb={4} justifyContent={"space-between"} mt="6" spacing="3">
              <Box>
                <Heading size="md">
                  {showDetailLoading ? (
                    <SkeletonText noOfLines={1} width="150px" />
                  ) : (
                    getDesignById?.name
                  )}
                </Heading>
              </Box>
              <Box>
                <Text color={Colors.PRIMARY} fontWeight={"bold"} fontSize="1xl">
                  <span>Price: $ </span>
                  {getDesignById?.price}
                </Text>
              </Box>
            </Flex>

            <Box>
              {showDetailLoading ? (
                <SkeletonText noOfLines={1} width="150px" />
              ) : (
                <Text fontSize="1xl">{getDesignById?.description}</Text>
              )}
            </Box>

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
                    <Skeleton key={index} borderRadius="md" width={{ md: "150px", base: "150px" }} height={150} />
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
                      border={selectedImage === singlePic ? "4px solid #808080" : "none"}
                      _hover={{ border: "2px solid gray" }}
                    />
                  ))}
            </SimpleGrid>
          </Box>
        </Box>

        <Box ml={{ base: "0", md: "120px" }} borderLeft={{ base: "none", md: "1px solid gray" }} p={{ base: "0", md: "3" }}>
          <Heading size={"lg"} px={"2"} py={"3"}>
            {showDetailLoading ? (
              <Skeleton width="120px" height="25px" />
            ) : (
              "Products Used In The Design"
            )}
          </Heading>
          {showDetailLoading
            ? [...Array(2)].map((_, index) => (
                <Box key={index} maxW="md" borderWidth="1px" borderRadius="lg" overflow="hidden" p="4" m={"4"} boxShadow="md">
                  <SkeletonText noOfLines={1} width="200px" mb="2" />
                  <SkeletonText noOfLines={1} width="50px" />
                  <Box display={"flex"} justifyContent={"space-between"} mt="2">
                    <Skeleton width="100px" height="20px" />
                    <Skeleton width="80px" height="20px" />
                  </Box>
                </Box>
              ))
            : getProductsByDesignID?.map((singleProduct, index) => (
                <Box key={index} maxW="xl" h={200} borderWidth="1px" borderRadius="lg" overflow="hidden" p="4" m={"4"} boxShadow="md">
                  <Box display={"flex"} justifyContent={"space-between"}>
                    <Heading as="h3" size="md" mb="2">{singleProduct?.name}</Heading>
                    <Image h={200} src={singleProduct?.image} />
                  </Box>
                </Box>
              ))}
        </Box>
      </SimpleGrid>
    </Box>
  );
}

export default Detail;
