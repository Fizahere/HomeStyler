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

function CustomCard({ singleProduct, isLoading }) {
  const [isDesignMode, setIsDesignMode] = useState(false);
  const [isProductMode, setIsProductMode] = useState(false);
  // console.log(singleProduct.image,'singleProduct');
  console.log(productsImagesMap.PROD1, "productsImagesMap");

  const navigate = useNavigate();

  useEffect(() => {
    if (singleProduct?.isProduct) {
      setIsProductMode(true);
      setIsDesignMode(false);
    } else if (singleProduct?.isDesign) {
      setIsDesignMode(true);
      setIsProductMode(false);
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
        `${UnAuthenticatedRoutesNames.DETAIL.replace(
          ":design",
          singleProduct.id
        )}`
      );
    }
  };
  const { id, name, description, price, category, image } = singleProduct;
  // console.log(image,'image')
  const imageUrl = designImagesMap[image];
  // console.log(imageUrl,'image')
  const ProductsList = () => {
    return (
      <div>
        {Object.entries(productsImagesMap).map(([key, src]) => (
          <img key={key} src={src} alt={key} />
        ))}
      </div>
    );
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
    <>
    {Object.entries(productsImagesMap).map(([key, src]) => (
    <Card
    boxShadow={
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
    }
    _dark={{ bg: "transparent" }}
    maxW={{ base: "xs", md: "xs" }}
    >
      <CardBody>
        {isDesignMode ? (
          <Image
          src={imageUrl}
            alt={"image_thumbnail_path"}
            borderRadius="md"
            width={"100%"}
            height={{ base: "250px", md: "250px" }}
            />
          ):(
            <Image
            src={src}
              alt={"image_thumbnail_path"}
              borderRadius="md"
              width={"100%"}
              height={{ base: "250px", md: "250px" }}
              />
        )}
        <Divider
          orientation="horizontal"
          borderColor="inherit"
          borderWidth="1px"
          mr={3}
          />
        <Stack mt="6" spacing={{ base: "1", md: "3" }}>
          <Flex justifyContent={"space-between"} h={35}>
            <Heading size={{ base: "sm", md: "md" }}>{name}</Heading>
          </Flex>
          <Text
            mt={1}
            color="green"
            fontWeight={"bold"}
            fontSize={{ base: "12px", md: "1xl" }}
            >
            $ {price}
          </Text>

          <Button
            mt={{ base: "1", md: "0" }}
            bgGradient="linear(to-r, gray.800, gray.100,gray.800)"
            color={Colors.BLACK}
            fontWeight={"bold"}
            _hover={{
              color: "",
            }}
            fontSize={{ base: "14px", md: "1xl" }}
            onClick={handleButtonClick} // Corrected the handleButtonClick call
            >
            Show more
          </Button>
        </Stack>
      </CardBody>
    </Card>
          ))}
    </>
  );
}

export default CustomCard;
