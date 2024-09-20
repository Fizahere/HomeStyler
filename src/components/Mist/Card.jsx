import React, { useState } from "react";
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
  Icon,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { Colors } from "../../constants/colors";
import { UnAuthenticatedRoutesNames } from "../../utilities/util.constant";
import { designImagesMap } from "../../constants/images";
import APP_ICONS from "../../constants/icons";

function CustomCard({ singleProduct, isLoading }) {
  const [isFavorite, setFavorite] = useState(true);
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

  const { id, name, description, price, category, image } = singleProduct;
  const imageUrl = designImagesMap[image];

  const navigate = useNavigate();

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
          position={"relative"}
          src={imageUrl}
          alt={"image_thumbnail_path"}
          borderRadius="md"
          width={"100%"}
          height={{ base: "250px", md: "250px" }}
        />
        {isFavorite ? (
          <Icon
            position={"absolute"}
            top={"-430px"}
            left={"230px"}
            fontSize={26}
            cursor={"pointer"}
            _hover={{ fontSize: 28 }}
            fontWeight={"bold"}
            as={APP_ICONS.WISHLISTFILLED}
            color={Colors.RED}
            onClick={()=>setFavorite(false)}
          />
        ) : (
          <Icon
            position={"absolute"}
            top={"-430px"}
            left={"230px"}
            fontSize={21}
            cursor={"pointer"}
            _hover={{ fontSize: 24 }}
            fontWeight={"bold"}
            as={APP_ICONS.WISHLIST}
            color={Colors.RED}
            onClick={()=>setFavorite(true)}
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
            <Text mt={1} color="green" fontWeight={'bold'} fontSize={{ base: "12px", md: "1xl" }}>
              $ {price}
            </Text>
          {/* <Text fontSize={{ base: "12px", md: "1xl" }}>{category}</Text> */}

          <Button
            mt={{ base: "1", md: "0" }}
            bgGradient="linear(to-r, gray.800, gray.100,gray.800)"
            color={Colors.BLACK}
            fontWeight={"bold"}
            _hover={{
              color: "",
            }}
            fontSize={{ base: "14px", md: "1xl" }}
            onClick={() => {
              handleButtonClick(id);
            }}
          >
            Show more
          </Button>
        </Stack>
      </CardBody>
    </Card>
  );
}

export default CustomCard;
