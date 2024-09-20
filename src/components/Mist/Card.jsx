import React, { useEffect, useState } from "react";
import {
  Card,
  Image,
  Stack,
  CardBody,
  Heading,
  Text,
  Button,
  Divider,
  Flex,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { Colors } from "../../constants/colors";
import { UnAuthenticatedRoutesNames } from "../../utilities/util.constant";
import { designImagesMap, productsImagesMap } from "../../constants/images";
import APP_ICONS from "../../constants/icons";

function CustomCard({ singleProduct, isLoading }) {
  const [imageUrl, setImageUrl] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (singleProduct?.isProduct) {
      const imageKey = singleProduct.image?.toUpperCase(); // Safely handle potential null/undefined
      console.log("Converted image key:", imageKey); // Debugging
  
      const productImageSrc = productsImagesMap[imageKey]; // Lookup the image URL
      console.log("Fetched product image URL:", productImageSrc); // Debugging
  
      setImageUrl(productImageSrc || "fallback-image-url"); // Fallback in case image is not found
    } else if (singleProduct?.isDesign) {
      const designImageSrc = designImagesMap[singleProduct.image];
      setImageUrl(designImageSrc || "fallback-image-url");
    }
  }, [singleProduct]);
  

  const handleButtonClick = () => {
    if (singleProduct?.isProduct) {
      navigate(
        `${UnAuthenticatedRoutesNames.PRODUCTDETAIL.replace(
          ":product",
          singleProduct.id
        )}`
      );
    } else if (singleProduct?.isDesign) {
      navigate(
        `${UnAuthenticatedRoutesNames.DETAIL.replace(":design", singleProduct.id)}`
      );
    }
  };

  if (isLoading) {
    return (
      <Card
        boxShadow={
          "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
        }
        _dark={{ bg: "transparent" }}
        maxW={{ base: "xs", md: "xs" }}
      >
        <CardBody>
          <Skeleton height="200px" mb={4} />
          <SkeletonText noOfLines={2} spacing="4" />
        </CardBody>
      </Card>
    );
  }

  return (
    <Card
      boxShadow={
        "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
      }
      _dark={{ bg: "transparent" }}
      maxW={{ base: "xs", md: "xs" }}
    >
      <CardBody>
        <Image
          src={imageUrl}
          alt={"image_thumbnail_path"}
          borderRadius="md"
          width={"100%"}
          height={{ base: "250px", md: "250px" }}
        />
        <Divider
          orientation="horizontal"
          borderColor="inherit"
          borderWidth="1px"
          mr={3}
        />
        <Stack mt="6" spacing={{ base: "1", md: "3" }}>
          <Flex justifyContent={"space-between"} h={35}>
            <Heading size={{ base: "sm", md: "md" }}>{singleProduct.name}</Heading>
          </Flex>
          <Text
            mt={1}
            color="green"
            fontWeight={"bold"}
            fontSize={{ base: "12px", md: "1xl" }}
          >
            ${singleProduct.price}
          </Text>
          <Button
            mt={{ base: "1", md: "0" }}
            bgGradient="linear(to-r, gray.800, gray.100,gray.800)"
            color={Colors.BLACK}
            fontWeight={"bold"}
            _hover={{ color: "" }}
            fontSize={{ base: "14px", md: "1xl" }}
            onClick={handleButtonClick}
          >
            Show more
          </Button>
        </Stack>
      </CardBody>
    </Card>
  );
}

export default CustomCard;


