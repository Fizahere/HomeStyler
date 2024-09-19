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
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { Colors } from "../../constants/colors";
// import { imageMap } from "../../assets/constants/images";

function CustomCard({ singleCardData }) {
  const { name } = singleCardData;
  const { image_thumbnail_path } = singleCardData;
  const { network } = singleCardData;
  const { status } = singleCardData;
  const { id } = singleCardData;
  const { start_date } = singleCardData;
  const { end_date } = singleCardData;
  const { country } = singleCardData;

  const navigate = useNavigate();
  return (
    <>
      <Card
        boxShadow={
          "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
        }
        _dark={{ bg: "transparent" }}
        maxW={{ base: "xs", md: "xs" }}
      >
        <CardBody>
          <Image
            // src={imageSrc}
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
              <Heading size={{ base: "sm", md: "md" }}>
                {/* {name} */}
Fiza              </Heading>
              <Text mt={1} color="green" fontSize={{ base: "12px", md: "1xl" }}>
                {/* $ {price} */}$ 500
              </Text>
            </Flex>
            <Text fontSize={{ base: "12px", md: "1xl" }}>category</Text>

            <Button
              mt={{ base: "1", md: "0" }}
              bgGradient="linear(to-r, #30362f, #4d5c3e)"
              color={Colors.WHITE}
              _hover={{
                color: "",
              }}
              fontSize={{ base: "12px", md: "1xl" }}
              // onClick={() => navigate(`/plant-palace/detail/${categoryName||category}/${id}`)}
            >
              Show more
            </Button>
          </Stack>
        </CardBody>
      </Card>
    </>
  );
}

export default CustomCard;