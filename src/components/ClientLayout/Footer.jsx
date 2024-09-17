import React from "react";
import { Box, Flex, Text, Icon, Link } from "@chakra-ui/react";
import APP_ICONS from "../../constants/icons";
import { Colors } from "../../constants/colors";
import {
  UnAuthenticatedRoutesNames,
} from "../../utilities/util.constant";
import { Link as DomLink } from "react-router-dom";

function Footer() {
  return (
    <>
      <Box h={"250"} borderTop={"1px solid grey"} position="relative">
        <Flex p={4}>
          <APP_ICONS.WEBSITE fontSize={"1.8rem"} />
          <Text
            fontSize="2xl"
            ml="2"
            color="brand.500"
            _dark={{
              color: "white",
            }}
            fontWeight="semibold"
          >
            TVVerse
          </Text>
        </Flex>
        <Flex justifyContent={"center"} gap={"20px"} mt={4}>
          <Link href="https://github.com/Fizahere" isExternal>
            <Icon
              border={"2px solid grey"}
              borderRadius={"50%"}
              p={"8px"}
              fontSize={"40px"}
              as={APP_ICONS.GITHUB}
            />
          </Link>
          <Link href="https://www.linkedin.com/in/fizabatool027/" isExternal>
            <Icon
              border={"2px solid grey"}
              borderRadius={"50%"}
              p={"8px"}
              fontSize={"40px"}
              as={APP_ICONS.LINKEDIN}
            />
          </Link>
          <Link href="https://chakra-ui-navy.vercel.app/" isExternal>
            <Icon
              border={"2px solid grey"}
              borderRadius={"50%"}
              p={"6px"}
              fontSize={"40px"}
              as={APP_ICONS.WEBSITE}
            />
          </Link>
        </Flex>
        <Flex justifyContent={"center"} gap={"30px"} mt={"10px"}>
          <DomLink to={UnAuthenticatedRoutesNames.HOME}>
            <Text>Home</Text>
          </DomLink>
          <DomLink to={UnAuthenticatedRoutesNames.ABOUT}>
            <Text>About</Text>
          </DomLink>
          <DomLink to={UnAuthenticatedRoutesNames.LOGIN}>
            <Text>Login</Text>
          </DomLink>
          <DomLink to={UnAuthenticatedRoutesNames.REGISTER}>
            <Text>Singup</Text>
          </DomLink>
        </Flex>
        <Box position="absolute" bottom="0" width="100%">
          <Text
            p={2}
            display={"flex"}
            fontSize={{
              base: "12px",
              md: "14px",
            }}
            justifyContent={"center"}
            color={Colors.GREY}
            borderTop={"1px solid grey"}
          >
            © 2024 TVVerse. All Rights Reserved. | Developed By <Link ml={1} color={'#0080ff'} href="https://fiza-portfolio.vercel.app/" isExternal>Fiza</Link>.
          </Text>
        </Box>
      </Box>
    </>
  );
}

export default Footer;

