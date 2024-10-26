import React from "react";
import { Box, Flex, Text, Icon, Link } from "@chakra-ui/react";
import { Link as DomLink } from "react-router-dom";
import APP_ICONS from "../../constants/icons";
import { Colors } from "../../constants/colors";
import { UnAuthenticatedRoutesNames } from "../../utilities/util.constant";

function Footer() {
  return (
    <>
      <Box position="relative" p={2} h={{ md: "auto", custom1: "300px", custom2: "300px",custom3: "400px" }} borderTop={"1px solid grey"}>
        <DomLink to={"/"}>
          <Flex mt={4}>
            <Icon as={APP_ICONS.BUILDINGS} fontSize={{lg:28,custom3:38}} />
            <Text mt={1} ml={1} fontSize={{ base: 15, md: 20,custom3:30 }} fontWeight="bold">
              Home Styler
            </Text>
          </Flex>
        </DomLink>
        
        <Flex justifyContent={"center"} gap={"20px"} mt={4}>
          <Link href="https://www.instagram.com/" isExternal>
            <Icon border={"2px solid grey"} borderRadius={"50%"} p={"8px"} fontSize={{lg:"40px",custom1:"40px",custom2:"50px"}} color={'#884dff'} as={APP_ICONS.GITHUB} />
          </Link>
          <Link href="https://www.instagram.com/" isExternal>
            <Icon border={"2px solid grey"} borderRadius={"50%"} p={"8px"} fontSize={{lg:"40px",custom1:"40px",custom2:"50px"}} color={'#4da6ff'} as={APP_ICONS.LINKEDIN} />
          </Link>
          <Link href="https://www.instagram.com/" isExternal>
            <Icon border={"2px solid grey"} borderRadius={"50%"} p={"8px"} fontSize={{lg:"40px",custom1:"40px",custom2:"50px"}} color={'#ff66ff'} as={APP_ICONS.INSTAGRAM} />
          </Link>
          <Link href="https://www.facebook.com/" isExternal>
            <Icon border={"2px solid grey"} borderRadius={"50%"} p={"8px"} fontSize={{lg:"40px",custom1:"30px",custom2:"50px"}} color={' #4da6ff'} as={APP_ICONS.FACEBOOK} />
          </Link>
          <Link href="https://mail.google.com/mail/u/0/" isExternal>
            <Icon border={"2px solid grey"} borderRadius={"50%"} p={"6px"} fontSize={{lg:"40px",custom1:"40px",custom2:"50px"}} color={'#ff5050'} as={APP_ICONS.MAIL} />
          </Link>
        </Flex>
        
        <Flex flexDirection={{ base: 'column', md: 'row' }} mb={{lg:20,}} justifyContent={"center"} gap={"30px"} mt={"10px"}>
          <DomLink to={UnAuthenticatedRoutesNames.HOME} ><Text fontSize={{lg:10, custom2:20, custom3:25}}>Home</Text></DomLink>
          <DomLink to={UnAuthenticatedRoutesNames.ABOUT}><Text fontSize={{lg:10, custom2:20, custom3:25}}>About</Text></DomLink>
          <DomLink to={UnAuthenticatedRoutesNames.CONTACT}><Text fontSize={{lg:10, custom2:20, custom3:25}}>Contact</Text></DomLink>
          <DomLink to={UnAuthenticatedRoutesNames.FEEDBACK}><Text fontSize={{lg:10, custom2:20, custom3:25}}>Feedback</Text></DomLink>
          <DomLink to={UnAuthenticatedRoutesNames.LOGIN}><Text fontSize={{lg:10, custom2:20, custom3:25}}>Login</Text></DomLink>
          <DomLink to={UnAuthenticatedRoutesNames.SITEMAP}><Text fontSize={{lg:10, custom2:20, custom3:25}}>Sitemap</Text></DomLink>
        </Flex>
        
        {/* Footer Bottom Text */}
        <Box position="absolute" bottom="0" width="100%" borderTop="1px solid grey">
          <Text
            p={2}
            display={"flex"}
            fontSize={{ base: "10px", md: "14px",custom3:"20px" }}
            justifyContent={"center"}
            color={Colors.GREY}
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
