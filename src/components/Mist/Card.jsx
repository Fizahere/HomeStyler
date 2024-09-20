import React from "react";
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
import { designImagesMap } from "../../constants/images";

function CustomCard({ singleProduct, isLoading }) {
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
          <Flex justifyContent={"space-between"}>
            <Heading size={{ base: "sm", md: "md" }}>{name}</Heading>
            <Text mt={1} color="green" fontSize={{ base: "12px", md: "1xl" }}>
              $ {price}
            </Text>
          </Flex>
          <Text fontSize={{ base: "12px", md: "1xl" }}>{category}</Text>

          <Button
            mt={{ base: "1", md: "0" }}
            bgGradient="linear(to-r, #30362f, #4d5c3e)"
            color={Colors.WHITE}
            _hover={{
              color: "",
            }}
            fontSize={{ base: "12px", md: "1xl" }}
            onClick={() =>
              navigate(
                `${UnAuthenticatedRoutesNames.DETAIL.replace(":design", id)}`
              )
            }
          >
            Show more
          </Button>
        </Stack>
      </CardBody>
    </Card>
  );
}

export default CustomCard;
