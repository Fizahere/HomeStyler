import React, { useEffect, useState } from "react";
import {
  Card,
  Image,
  Stack,
  CardBody,
  Icon,
  Text,
  Button,
  Divider,
  Flex,
  Skeleton,
  SkeletonText,
  useToast,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { Colors } from "../../constants/colors";
import { UnAuthenticatedRoutesNames } from "../../utilities/util.constant";
import { designImagesMap, productsImagesMap } from "../../constants/images";
import APP_ICONS from "../../constants/icons";

function CustomCard({ singleProduct, isLoading }) {
  const [isFav, setFav] = useState(false);
  const [imageUrl, setImageUrl] = useState(null);
  const navigate = useNavigate();
  const toast = useToast();

  useEffect(() => {
    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setFav(wishlist.some((item) => item.id === singleProduct.id));
  }, [singleProduct.id]);

  useEffect(() => {
    if (singleProduct?.isProduct) {
      const imageKey = singleProduct.image?.toUpperCase();
      const productImageSrc = productsImagesMap[imageKey];
      setImageUrl(productImageSrc || "fallback-image-url");
    } else if (singleProduct?.isDesign) {
      const designImageSrc = designImagesMap[singleProduct.image];
      setImageUrl(designImageSrc || "fallback-image-url");
    }
  }, [singleProduct]);

  const toggleWishlist = (e) => {
    e.stopPropagation();
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    if (isFav) {
      wishlist = wishlist.filter((item) => item.id !== singleProduct.id);
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
      setFav(false);

      toast({
        title: "Removed from Wishlist",
        description: `${singleProduct.name} has been removed from your wishlist.`,
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
    } else {
      wishlist.push(singleProduct);
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
      setFav(true);

      toast({
        title: "Added to Wishlist",
        description: `${singleProduct.name} has been added to your wishlist.`,
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    }
  };

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
        `${UnAuthenticatedRoutesNames.DETAIL.replace(
          ":design",
          singleProduct.id
        )}`
      );
    }
  };

  if (isLoading) {
    return (
      <Card
        // boxShadow={
        //   "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
        // }
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
      onClick={handleButtonClick}
      cursor={'pointer'}
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
          <Text fontSize={"18px"} fontWeight={"bold"} h={50}>
            {singleProduct.name}
          </Text>
          <Flex justifyContent={"space-between"}>
            {singleProduct?.isProduct && (
              isFav ? (
                <Icon
                  as={APP_ICONS.WISHLISTFILLED}
                  color={Colors.RED}
                  fontSize={"24px"}
                  _hover={{ fontSize: "26px" }}
                  cursor={"pointer"}
                  onClick={toggleWishlist}
                />
              ) : (
                <Icon
                  as={APP_ICONS.WISHLIST}
                  color={Colors.RED}
                  fontSize={"20px"}
                  _hover={{ fontSize: "22px" }}
                  cursor={"pointer"}
                  onClick={toggleWishlist}
                />
              )
            )}
            <Text mt={1} color="green" fontSize={{ base: "12px", md: "1xl" }}>
              ${singleProduct.price}
            </Text>
          </Flex>
          <Button
            mt={{ base: "1", md: "0" }}
            bg={Colors.THEME}
            color={Colors.WHITE}
            fontWeight={"bold"}
            _hover={{ color: "" }}
            fontSize={{ base: "14px", md: "1xl" }}
            // onClick={handleButtonClick}
          >
            Show more
          </Button>
        </Stack>
      </CardBody>
    </Card>
  );
}

export default CustomCard;
