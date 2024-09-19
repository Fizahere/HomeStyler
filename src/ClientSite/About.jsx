import React from "react";
import { Box, Flex, Heading, Text, Container, } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { h3 } from "framer-motion/client";

const MotionBox = motion(Box);

const About = () => {
  const floatingBoxVariants = {
    floating: {
      y: [0, -10, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <Container maxW="container.xl" py={10}>
      <Heading as="h1" size="2xl" mb={10} textAlign="center">
        WHY US?
      </Heading>
      <Flex
        justify="space-between"
        wrap="wrap"
        mt={50}
        mb={6}
        p={10}
        borderRadius="md"
        // boxShadow="md"
        bg="#f9f9f9"
        border="1px"
        borderColor="gray.200"
        alignItems={"center"}
      >
        <Box flexBasis={{ base: "100%", md: "50%" }}>
          <Box>
            <Heading fontStyle={"italic"} as={h3} mb={5}>
              Our Vision
            </Heading>
            <Text
              fontSize={{ base: "sm", md: "lg" }}
              lineHeight="tall"
              color="gray.700"
              fontWeight="medium"
              textAlign={{ base: "center", md: "left" }}
            >
              At <b>HomeStyler,</b> we believe that every space has the
              potential to inspire. Our mission is to transform interiors into
              stunning reflections of your unique style and needs.
            </Text>
          </Box>
        </Box>
        <MotionBox
          flexBasis={{ base: "50%", md: "50%" }}
          mb={8}
          variants={floatingBoxVariants}
          animate="floating"
        >
          {/* <Image src={Chair} alt="Interior" /> */}
        </MotionBox>
      </Flex>
      <Flex
        justify="space-between"
        wrap="wrap"
        mt={50}
        mb={6}
        p={10}
        borderRadius="md"
        // boxShadow="md"
        bg="#f9f9f9"
        border="1px"
        borderColor="gray.200"
        alignItems={"center"}
      >
        <MotionBox variants={floatingBoxVariants} animate="floating">
          {/* <Image src={ClothRack} alt="Interior" /> */}
        </MotionBox>
        <Box flexBasis={{ base: "100%", md: "50%" }}>
          <Box>
            <Heading fontStyle={"italic"} as={h3} mb={5}>
              What We Do
            </Heading>
            <Text
              fontSize={{ base: "sm", md: "lg" }}
              lineHeight="tall"
              color="gray.700"
              fontWeight="medium"
              textAlign={{ base: "center", md: "left" }}
            >
              We blend creativity with functionality to design spaces that are
              not only beautiful but also practical. From residential to
              commercial projects, we ensure every detail enhances your living
              or working environment.
            </Text>
          </Box>
        </Box>
      </Flex>
      <Flex
        justify="space-between"
        wrap="wrap"
        mt={50}
        mb={6}
        p={10}
        borderRadius="md"
        bg="#f9f9f9"
        border="1px"
        borderColor="gray.200"
        alignItems={"center"}
      >
        <Box flexBasis={{ base: "100%", md: "50%" }}>
          <Box>
            <Heading fontStyle={"italic"} as={h3} mb={5}>
              Our Promise
            </Heading>
            <Text
              fontSize={{ base: "sm", md: "lg" }}
              lineHeight="tall"
              color="gray.700"
              fontWeight="medium"
              textAlign={{ base: "center", md: "left" }}
            >
              With a commitment to quality and personalized service, we work
              closely with you to bring your vision to life. Let us help you
              create spaces that are as inspiring as they are inviting.
            </Text>
          </Box>
        </Box>
        <MotionBox variants={floatingBoxVariants} animate="floating">
          {/* <Image src={Sofa} alt="Interior" /> */}
        </MotionBox>
      </Flex>
    </Container>
  );
};

export default About;
