import React from "react";
import { Heading, Image, Box, Text, SimpleGrid } from "@chakra-ui/react";
import { Colors } from "../constants/colors";
import about1 from "../assets/images/about1.jpg";
import about2 from "../assets/images/about2.avif";
import aboutMain from "../assets/images/aboutMain.jpg";
import aboutBannerImage from "../assets/images/aboutPageBanner.webp";

function About() {
  return (
    <Box>
      <Box position="relative" overflow="hidden">
        <Box width="100%" height="100%" zIndex="-1" overflow="hidden">
          <Image
            h={{
              base: "300px",
              sm: "400px",
              md: "600px",
              lg: "700px",
              xl: "800px",
              "2xl": "900px",
            }}
            width="100%"
            src={aboutMain}
            objectFit="cover"
          />
        </Box>

        <Box
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          fontWeight="800"
          color="white"
          p={{ base: 4, md: 6, xl: 8, "2xl": 10 }}
          textAlign="center"
          maxWidth={{ base: "90%", xl: "60%", "2xl": "50%" }}
          sx={{
            textShadow: "2px 2px 0px rgba(0, 0, 0, 0.8)",
          }}
        >
          <Text
            fontSize={{
              base: "18px",
              md: "26px",
              lg: "34px",
              xl: "40px",
              "2xl": "46px",
            }}
            fontWeight="bold"
            color={Colors.WHITE}
          >
            Home Styler is your ultimate destination for transforming interior
            spaces with stylish design ideas and products.
          </Text>
        </Box>
      </Box>

      <Box
        textAlign="center"
        py={{ base: 8, md: 16, xl: 20, "2xl": 24 }}
        px={{ base: 4, md: 8, xl: 12, "2xl": 16 }}
        maxWidth={{ base: "100%", xl: "75%", "2xl": "70%" }}
        mx="auto"
      >
        <Text
          fontSize={{ base: "14px", md: "18px", xl: "22px", "2xl": "26px" }}
          lineHeight="tall"
        >
          Home Styler is your ultimate interior design resource, featuring a
          wide array of design ideas and inspiration for every space. Explore
          curated collections and practical tips to transform your home
          effortlessly. Discover stylish designs, decor suggestions, and product
          recommendations, all tailored to elevate your living experience. At
          Home Styler, we believe that every home should reflect your
          personality and lifestyle. Join us in exploring a world of design
          possibilities and unlock the potential of your living space today!
        </Text>
      </Box>

      <Box display="flex" justifyContent="center" mb={10} overflow="hidden">
        <Image src={aboutBannerImage} alt="about image" width="100%" />
      </Box>

      <Box display="flex" justifyContent="center" width="100%" pb={10}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} maxW="90%">
          <Box margin="auto">
            <Image src={about1} height="100%" objectFit="cover" />
          </Box>

          <Box p={{ base: 4, md: 6, xl: 8, "2xl": 10 }} textAlign="center" margin="auto">
            <Heading fontSize={{ base: "lg", md: "xl", lg: "2xl", xl: "3xl", "2xl": "4xl" }}>
              Investor Relations
            </Heading>
            <Text
              fontSize={{ base: "14px", md: "16px", lg: "18px", xl: "20px", "2xl": "24px" }}
              mt={{ base: 4, md: 6, xl: 8, "2xl": 10 }}
            >
              Want to invest with us? Get more information about our governance,
              our latest earnings, and our long-term view on what’s ahead.
            </Text>
          </Box>

          <Box p={{ base: 4, md: 6, xl: 8, "2xl": 10 }} textAlign="center" margin="auto">
            <Heading fontSize={{ base: "lg", md: "xl", lg: "2xl", xl: "3xl", "2xl": "4xl" }}>
              Careers
            </Heading>
            <Text
              fontSize={{ base: "14px", md: "16px", lg: "18px", xl: "20px", "2xl": "24px" }}
              mt={{ base: 4, md: 6, xl: 8, "2xl": 10 }}
            >
              Want to come work with us? Get more information about our teams,
              locations, culture, and hear more from our employees.
            </Text>
          </Box>

          <Box margin="auto">
            <Image src={about2} height="100%" objectFit="cover" />
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
}

export default About;
