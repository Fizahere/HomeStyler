import React from "react";
import {
  Box,
  Flex,
  Image,
  Button,
  Text,
  Icon,
  Center,
  Heading,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import APP_ICONS from "../constants/icons";
import { Colors } from "../constants/colors";
import mainimage from "../assets/images/mainimage.png";
import Services from "./Services";
import Gallery from "./Gallery";
import { UnAuthenticatedRoutesNames } from "../utilities/util.constant";
import Sitemap from "./Sitemap";
import { TypeAnimation } from "react-type-animation";
import ScrollToTopButton from "../components/Mist/ScrollToTopBtn";

const Home = () => {
  const categories = [
    "Living Room",
    "Office",
    "Bathroom",
    "Kitchen",
    "Bedroom",
  ];

  const navigate = useNavigate();
  return (
    <>
      <Box px={{ base: 2, lg: 10 }}>
        <Center>
          <Flex flexDirection={{ base: "column", md: "row" }}>
            <Box>
              {/* <Box>
            <TypeAnimation
              sequence={[
                "HOME STYLER, WHERE DREAMS TAKE SHAPE",
                1000,
              ]}
              speed={50}
              style={{
                fontSize: '3rem',
                fontWeight: "bold",
                display: "inline-block",
              }}
              repeat={Infinity}
            />
            </Box> */}
              <Heading
                fontSize={{ base: "30px", sm: "40px", md: "30px", lg: "60px" }}
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
                  bg={Colors.THEME}
                  color={Colors.WHITE}
                  _dark={{
                    bg: Colors.THEME,
                    color: Colors.WHITE,
                  }}
                  width={"150px"}
                  borderRadius={"40px"}
                  fontSize={"12px"}
                  _hover={{ color: "white" }}
                  onClick={() => navigate(UnAuthenticatedRoutesNames.GALLERY)}
                >
                  <Icon mr={2} as={APP_ICONS.RIGHTARROW} fontSize={"16px"} />
                  explore
                </Button>
                <Button
                  bg={"transparent"}
                  textDecoration={"underline"}
                  _hover={{ bg: "transparent" }}
                  width={"150px"}
                  fontSize={{ base: "18px", sm: "12px", md: "18px" }}
                  onClick={() =>
                    navigate(UnAuthenticatedRoutesNames?.DESIGNERS)
                  }
                >
                  Our Designers
                </Button>
              </Flex>
            </Box>
            <Image
              my={{ base: 8, md: 0 }}
              src={mainimage}
              width={{ base: "430px", sm: "440px", md: "560px", lg: "560px" }}
              height={{ base: "220px", sm: "250px", md: "270px", lg: "330px" }}
            />
          </Flex>
        </Center>

        <Flex
          justifyContent={"space-between"}
          flexDirection={{ base: "column", lg: "row" }}
        >
          <Box
            // mt={2}
            width={{ base: "310px", sm: "420px", md: "425px" }}
            mb={{ base: 20, lg: 0 }}
          >
            <Flex flexWrap="wrap">
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
                  onClick={() => navigate(UnAuthenticatedRoutesNames.SHOP.replace(':category', value).toLocaleLowerCase())}
                >
                  {value}
                </Button>
              ))}
            </Flex>
          </Box>
        </Flex>
        <Gallery />
        <Services />
        <Sitemap />
        <ScrollToTopButton />
      </Box>
    </>
  );
};

export default Home;
