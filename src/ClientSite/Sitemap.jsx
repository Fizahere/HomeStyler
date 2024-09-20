import React from "react";
import { Box, Text, Heading, Flex, Icon } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Colors } from "../constants/colors";
import APP_ICONS from "../constants/icons";

const Sitemap = () => {
  return (
    <>
      <Box mt={6}>
        <Heading borderBottom={"1px solid grey"} pb={2} mb={4}>
          Sitemap
        </Heading>
        <Flex py={"10"} flexDirection={"column"}>
          <Box display={"flex"} mb={2}>
            <Text fontSize={"14px"} fontWeight={"bold"}>
              <Icon
                mr={1}
                color={"#33ccff"}
                fontSize={15}
                as={APP_ICONS.HOME}
              />
              Home:
            </Text>
            <Link to={"/"}>
              <Text fontSize={14} color={Colors.PRIMARYBLUE} ml={2}>
                https://home-styler.vercel.app/
              </Text>
            </Link>
          </Box>

          <Box display={"flex"} mb={2}>
            <Text display={"flex"} fontSize={"14px"} fontWeight={"bold"}>
              <Icon
                mr={1}
                color={"orange"}
                fontSize={15}
                as={APP_ICONS.ABOUT}
              />
              About:
            </Text>
            <Link to={"/plant-palace/about-us"}>
              <Text fontSize={14} color={Colors.PRIMARYBLUE} ml={2}>
                https://home-styler.vercel.app/home-styler/about
              </Text>
            </Link>
          </Box>
          <Box display={"flex"} mb={2}>
            <Text display={"flex"} fontSize={"14px"} fontWeight={"bold"}>
              <Icon
                mr={1}
                mt={1}
                color={"#00cc7a"}
                fontSize={15}
                as={APP_ICONS.PHONE}
              />
              Contact:
            </Text>
            <Link to={"/plant-palace/contact-us"}>
              <Text fontSize={14} color={Colors.PRIMARYBLUE} ml={2}>
                https://home-styler.vercel.app/home-styler/contact-us
              </Text>
            </Link>
          </Box>

          <Box display={"flex"} mb={2}>
            <Text display={"flex"} fontSize={"14px"} fontWeight={"bold"}>
              <Icon
                mr={1}
                mt={1}
                color={"#9966ff"}
                fontSize={15}
                as={APP_ICONS.FEEDBACK}
              />
              Feedback:
            </Text>
            <Link to={"/plant-palace/feedback"}>
              <Text fontSize={14} color={Colors.PRIMARYBLUE} ml={2}>
                https://home-styler.vercel.app/home-styler/feedback
              </Text>
            </Link>
          </Box>

          <Box display={"flex"} mb={2}>
            <Text display={"flex"} fontSize={"14px"} fontWeight={"bold"}>
              <Icon
                mr={1}
                mt={1}
                color={"#ff80bf"}
                fontSize={15}
                as={APP_ICONS.LOGIN}
              />
              Login:
            </Text>
            <Link to={"/plant-palace/login"}>
              <Text fontSize={14} color={Colors.PRIMARYBLUE} ml={2}>
                https://home-styler.vercel.app/home-styler/login
              </Text>
            </Link>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default Sitemap;
