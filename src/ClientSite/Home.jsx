import React from "react";
import {
  Box,
  Flex,
  Heading,
  Image,
  Button,
  Text,
  useColorMode,
  Icon,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import APP_ICONS from "../constants/icons";
import { Colors } from "../constants/colors";
import mainimage from "../assets/images/mainimage.png";
import Services from "./Services";
import Gallery from "./Gallery";

const Home = () => {
  const categories = {
    elegent: "ELEGENT",
    cozy: "COZY",
    classic: "CLASSIC",
    minimalist: "MINIMALIST",
    new_arrival: "NEW ARRIVAL",
    top_variety: "TOP",
  };

  const navigate = useNavigate();
  return (
    <>
      <Box px={{ base: 2, lg: 10 }} py={{ base: 10, md: 20 }}>
        <Flex flexDirection={{ base: "column", md: "row" }}>
          <Box>
            <Heading
              fontSize={{ base: "30px", sm: "40px", md: "30px", lg: "50px" }}
              fontWeight={{ base: "500", sm: "700", md: "600" }}
              lineHeight={1.1}
              letterSpacing={"2px"}
            >
              HOME STYLER,
              <Box display={"flex"}>
                <Text>WHERE DREAMS</Text>
              </Box>
              TAKE SHAPE
            </Heading>
            <Text
              fontSize={{ base: "14px", sm: "20px", md: "14px", lg: "20px" }}
              py={6}
              px={{ base: 0, md: 2 }}
              color={Colors.GREY}
            >
              Welcome to our world of architectural wonder, where dreams take
              shape.
            </Text>
            <Flex flexDirection={{ base: "row", sm: "column", md: "row" }}>
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
                Go To Shop
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
          </Box>
          <Image
            my={{ base: 6, md: 0 }}
            src={mainimage}
            width={{ base: "440px", sm: "440px", md: "570px", lg: "560px" }}
            height={{ base: "230px", sm: "250px", md: "280px", lg: "330px" }}
          />
        </Flex>
        <Flex
          justifyContent={"space-between"}
          flexDirection={{ base: "column", lg: "row" }}
        >
          <Box
            width={{ base: "310px", sm: "420px", md: "425px" }}
            mb={{ base: 20, lg: 0 }}
          >
            <Flex mt={{ base: 4, lg: 0 }} flexWrap="wrap">
              {Object.entries(categories).map(([key, value], index) => (
                <Button
                  key={index}
                  flex={{ sm: "calc(20% - 14px)", md: "calc(25% - 18px)" }}
                  margin={2}
                  width={"min-content"}
                  height={"30px"}
                  fontSize={{ base: "9px", md: "11px" }}
                  border="1px solid gray"
                  bg="transparent"
                  color={Colors.GREY}
                  onClick={() => navigate(`/plant-palace/${key}`)}
                >
                  {value}
                </Button>
              ))}
            </Flex>
          </Box>
        </Flex>
        <Gallery />
        <Services />
      </Box>
    </>
  );
};

export default Home;
