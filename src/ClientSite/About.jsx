import React from "react";
import { Heading, Image, Box, Text, SimpleGrid } from "@chakra-ui/react";
import { Colors } from "../constants/colors";
import about1 from '../assets/images/about1.jpg'
import about2 from "../assets/images/about2.avif";
import aboutMain from "../assets/images/aboutMain.jpg";

function About() {
  return (
    <>
      <Box>
        <Box position={"relative"}>
          <Box
            width="100%"
            height={{
              base: "70h",
              md: "100vh",
            }}
            zIndex="-1"
            objectFit="contain"
            overflow="hidden"
          >
            <Image
              h={{
                base: "300px",
                sm: "400px",
                md: "700px",
              }}
              width={"100%"}
              src={aboutMain}
            />
          </Box>

          <Box
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -40%)"
            fontWeight={"800"}
            color="white"
            p={2}
            textAlign="center"
          >
            <Text
              fontSize={{
                base: "18px",
                md: "30px",
              }}
              fontWeight={"900"}
              color={Colors.WHITE}
              // _dark={
              //   {color:Colors.BLACK}}
              sx={{
                textShadow: '2px 2px 0px rgba(0, 0, 0, 0.8)', 
              }}
             boxShadow={'md'}
            >
              Home Styler is your ultimate destination for transforming interior
              spaces with stylish design ideas, and products.
            </Text>
          </Box>
        </Box>
        <Box
          textAlign={"center"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          margin={"auto"}
          overflow={"hidden"}
        >
          <Text
            fontSize={{
              base: "15px",
              md: "20px",
            }}
            py={{
              base:20,
              md:40
            }}
            px={{
              base: "0px",
              lg:20
            }}
          >
            Home Styler is your ultimate interior design resource, featuring a
            wide array of design ideas and inspiration for every space. Explore
            curated collections and practical tips to transform your home
            effortlessly. Discover stylish designs, decor suggestions, and
            product recommendations, all tailored to elevate your living
            experience.At Home Styler, we believe that every home should reflect
            your personality and lifestyle. Join us in exploring a world of
            design possibilities and unlock the potential of your living space
            today!
          </Text>
        </Box>

        {/* <Box display={"flex"} justifyContent={"center"}>
          {/* <Image src={about} alt="about image" width={"100%"} /> */}
        {/* </Box> */}

        <Box
          display={"flex"}
          justifyContent={"center"}
          // height={'700px'}
          pb={"50px"}
          m={"0 auto"}
          width={"80vw"}
        >
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            <Box>
              <Image src={about1} height="100%" objectFit="cover" />
            </Box>
            <Box p={{ base: "0", md: "20px" }} margin={"auto"}>
              <Heading size={{ base: "md", md: "lg" }}>
                Investor Relations
              </Heading>
              <Text
                fontSize={{ base: "12px", md: "15px" }}
                mt={{ base: "10px", md: "20px" }}
              >
                Want to invest with us? Get more information about our
                governance, our latest earnings, and our long-term view on
                what’s ahead.
              </Text>
            </Box>

            <Box p={{ base: "0", md: "20px" }} margin={"auto"}>
              <Heading size={{ base: "md", md: "lg" }}>Careers</Heading>
              <Text
                fontSize={{ base: "12px", md: "15px" }}
                mt={{ base: "10px", md: "20px" }}
              >
                Want to come work with us? Get more information about our teams,
                locations, culture and to hear more from our employees.
              </Text>
            </Box>
            <Box>
              <Image src={about2} height="100%" objectFit="cover" />
            </Box>
          </SimpleGrid>
        </Box>
      </Box>
    </>
  );
}

export default About;
