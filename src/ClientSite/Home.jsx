import React from "react";
import { Box, Image, Heading, Text, Button, Flex } from "@chakra-ui/react";
import mainimage from "../assets/images/mainimage.png"; // Replace with your image path

function Home() {
  return (
    <Box p={10} height="100vh" overflow="hidden">
      <Flex justifyContent="space-between" flexDirection={{base:'column',sm:'row'}}>
        <Box>
          <Heading fontSize={{base:"30px",sm:'35px',md:'60px'}} fontWeight="bold">
            WHERE DREAMS
          </Heading>
          <Text fontSize={{base:"40px",sm:"40px",md:"60px"}} lineHeight={1} fontWeight="bold" color="gray.400">
            TAKE SHAPE
          </Text>
          <Text fontSize={{base:'14px',md:'20px'}} mt={4}>
            Welcome to our world of architectural wonder, where dreams take
            shape.
          </Text>
          <Text ontSize={{base:'14px',sm:"10px",md:'20px'}} fontWeight="bold" mt={2}>
            Call Us: +1 201 8577757
          </Text>
        </Box>
        <Box>
          <Box
            position="relative"
            left={{base:40,sm:90,md:10}}
            top={{base:10,sm:0,md:-40}}
            height={{base:"250px",sm:"350px",md:"700px"}}
            width={{base:"250px",sm:"300px",md:"600px"}}
            bg="gray.800"
            borderRadius={{base:"50% 0% 0% 50%",md:"50% 00% 00% 50%"}}
            overflow="hidden"
          ></Box>
          <Image
            src={mainimage}
            position="absolute"
            top={{base:540,sm:240,md:230}}
            left={{base:2,sm:40,md:200,lg:350,xl:540}}
            height={{base:"170px",sm:"240px",md:"350px",lg:"420px",xl:"470px"}}
            objectFit="cover"
            zIndex={2}
            overflow="hidden"
          />
        </Box>
      </Flex>
    </Box>
  );
}

export default Home;
