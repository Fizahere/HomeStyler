import React from "react";
import { Box, Flex, Text, Icon, Link } from "@chakra-ui/react";
import { Link as DomLink } from "react-router-dom";
import APP_ICONS from "../../constants/icons";
import { Colors } from "../../constants/colors";
import { UnAuthenticatedRoutesNames } from "../../utilities/util.constant";

function Footer() {
  return (
    <>
      <Box h={"auto"} borderTop={"1px solid grey"} px={2}>
        <DomLink to={"/"}>
          <Flex mt={4}>
            <Icon as={APP_ICONS.BUILDINGS} fontSize={{ base: 20, md: 25 }} />{" "}
            <Text
              mt={1}
              ml={1}
              fontSize={{ base: 15, md: 20 }}
              fontWeight="bold"
            >
              HomeStyler
            </Text>
          </Flex>
        </DomLink>
        <Flex justifyContent={"center"} gap={"20px"} mt={4}>
          <Link href="https://www.instagram.com/" isExternal>
            <Icon
              border={"2px solid grey"}
              borderRadius={"50%"}
              p={"8px"}
              fontSize={"40px"}
              color={'#ff66cc'}
              as={APP_ICONS.INSTAGRAM}
            />
          </Link>
          <Link href="https://www.facebook.com/" isExternal>
            <Icon
              border={"2px solid grey"}
              borderRadius={"50%"}
              p={"8px"}
              fontSize={"40px"}
              color={Colors.PRIMARYBLUE}
              as={APP_ICONS.FACEBOOK}
            />
          </Link>
          <Link href="https://mail.google.com/mail/u/0/" isExternal>
            <Icon
              border={"2px solid grey"}
              borderRadius={"50%"}
              p={"6px"}
              fontSize={"40px"}
              color={'red'}
              as={APP_ICONS.MAIL}
            />
          </Link>
          <Link href="https://github.com/Fizahere/" isExternal>
            <Icon
              border={"2px solid grey"}
              borderRadius={"50%"}
              p={"6px"}
              fontSize={"40px"}
              color={'#9999ff'}
              as={APP_ICONS.GITHUB}
            />
          </Link>
          <Link href="https://www.linkedin.com/in/fizabatool027/" isExternal>
            <Icon
              border={"2px solid grey"}
              borderRadius={"50%"}
              p={"6px"}
              fontSize={"40px"}
              color={Colors.PRIMARYBLUE}
              as={APP_ICONS.LINKEDIN}
            />
          </Link>
        </Flex>
        <Flex
          flexDirection={{ base: "column", md: "row" }}
          mb={10}
          justifyContent={"center"}
          gap={"30px"}
          mt={"10px"}
        >
          <DomLink to={UnAuthenticatedRoutesNames.HOME}>
            <Text>Home</Text>
          </DomLink>
          <DomLink to={UnAuthenticatedRoutesNames.ABOUT}>
            <Text>About</Text>
          </DomLink>
          <DomLink to={UnAuthenticatedRoutesNames.CONTACT}>
            <Text>Contact</Text>
          </DomLink>
          <DomLink to={UnAuthenticatedRoutesNames.FEEDBACK}>
            <Text>Feedback</Text>
          </DomLink>
          <DomLink to={UnAuthenticatedRoutesNames.LOGIN}>
            <Text>Login</Text>
          </DomLink>
          <DomLink to={UnAuthenticatedRoutesNames.SITEMAP}>
            <Text>Sitemap</Text>
          </DomLink>
        </Flex>
        <Box width="100%">
          <Text
            p={2}
            display={"flex"}
            fontSize={{
              base: "10px",
              md: "14px",
            }}
            justifyContent={"center"}
            color={Colors.GREY}
            borderTop={"1px solid grey"}
          >
            © 2024 Home Styler. All Rights Reserved. | Developed By
            <Text ml={2}>SFC-Callback</Text>.
          </Text>
        </Box>
      </Box>
    </>
  );
}

export default Footer;
