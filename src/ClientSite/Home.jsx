import React from "react";
import {
  Box,
  Image,
  Heading,
  Text,
  Button,
  Flex,
  Icon,
} from "@chakra-ui/react";
import mainimage from "../assets/images/mainimage.png";
import { Colors } from "../constants/colors";
import APP_ICONS from "../constants/icons";
import Services from "./Services";
import Gallery from "./Gallery";

function Home() {
  const plantsCategories = {
    indoor: "ELEGENT",
    outdoor: "COZY",
    flowering_shrubs: "CLASSIC",
    herbs: "MINIMALIST",
    succulents: "NEW ARRIVAL",
    top_variety: "TOP",
  };

  return (
    <Box pt={10} pb={0} px={10} overflow="hidden">
      <Flex
        justifyContent="space-between"
        flexDirection={{ base: "column", sm: "row" }}
      >
        <Box>
          <Heading
            fontSize={{ base: "30px", sm: "35px", md: "70px" }}
            fontWeight="bold"
          >
            WHERE DREAMS
          </Heading>
          <Text
            fontSize={{ base: "40px", sm: "40px", md: "60px" }}
            lineHeight={1}
            fontWeight="bold"
            color="gray.400"
          >
            TAKE SHAPE
          </Text>
          <Text fontSize={{ base: "14px", md: "20px" }} mt={4}>
            Welcome to our world of architectural wonder, where dreams take
            shape.
          </Text>
          <Text
            fontSize={{ base: "14px", sm: "10px", md: "30px" }}
            fontWeight="bold"
            mt={2}
          >
            Call Us: +1 201 8577757
          </Text>
          <Flex
            mt={10}
            flexDirection={{ base: "row", sm: "column", md: "row" }}
          >
            <Button
              bg={Colors.BLACK}
              color={Colors.WHITE}
              _dark={{
                bg: Colors.WHITE,
                color: Colors.BLACK,
              }}
              width={"150px"}
              borderRadius={"40px"}
              fontSize={"12px"}
              _hover={{ color: "white" }}
              onClick={() => navigate("/plant-palace/explore-plants")}
            >
              <Icon mr={2} as={APP_ICONS.RIGHTARROW} fontSize={"18px"} />
              Explore
            </Button>
            <Button
              bg={"transparent"}
              textDecoration={"underline"}
              _hover={{ bg: "transparent" }}
              width={"150px"}
              fontSize={{ base: "18px", sm: "12px", md: "18px" }}
              onClick={() => navigate("/plant-palace/about-us")}
            >
              More Details
            </Button>
          </Flex>
          <Flex
            justifyContent={"space-between"}
            flexDirection={{ base: "column", lg: "row" }}
            mt={8}
            mr={5}
          >
            <Box
              width={{ base: "310px", sm: "420px", md: "425px" }}
              mb={{ base: 20, lg: 0 }}
            >
              <Flex flexWrap="wrap" mt={{base:0,sm:120,md:0}}>
                {Object.entries(plantsCategories).map(([key, value], index) => (
                  <Button
                    key={index}
                    flex={{ sm: "calc(20% - 14px)", md: "calc(25% - 18px)" }}
                    margin={2}
                    width={"min-content"}
                    height={"30px"}
                    fontSize={{ base: "9px", md: "11px" }}
                    border="1px solid gray"
                    bg="transparent"
                    color={"grey"}
                    onClick={() => navigate(`/plant-palace/${key}`)}
                  >
                    {value}
                  </Button>
                ))}
              </Flex>
            </Box>
          </Flex>
        </Box>
        <Box>
          <Box
            position="relative"
            left={{ base: 40, sm: 90, md: 10 }}
            top={{ base: 10, sm: 0, md: -40 }}
            height={{ base: "250px", sm: "350px", md: "700px" }}
            width={{ base: "250px", sm: "300px", md: "600px" }}
            bg={Colors.THEME}
            display={{base:'none',lg:'block'}}
            borderRadius={{ base: "50% 0% 0% 50%", md: "50% 00% 00% 50%" }}
            overflow="hidden"
          ></Box>
          <Image
            src={mainimage}
            position="absolute"
            top={{ base: 540, sm: 240, md: 230 }}
            left={{ base: 2, sm: 40, md: 200, lg: 350, xl: 540 }}
            height={{
              base: "170px",
              sm: "240px",
              md: "350px",
              lg: "420px",
              xl: "470px",
            }}
            objectFit="cover"
            zIndex={2}
            overflow="hidden"
          />
        </Box>
        <Box></Box>
      </Flex>

      <Gallery/>
      <Services/>
    </Box>
  );
}

export default Home;
