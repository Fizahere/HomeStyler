import React, { useState } from "react";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  useDisclosure,
  Stack,
  Icon,
  useColorMode,
  Divider,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import APP_ICONS from "../../constants/icons";
import { Colors } from "../../constants/colors";

function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const cartDrawer = useDisclosure();
  const [user, setUser] = useState(localStorage.getItem("user"));
  // const navigate=useNavigate()

  return (
    <>
      <Box>
        <Flex h={16} alignItems="center" justifyContent="space-between">
          <IconButton
            size="md"
            icon={
              isOpen ? (
                <Icon as={APP_ICONS.CLOSE} />
              ) : (
                <Icon as={APP_ICONS.THREEBARS} />
              )
            }
            aria-label="Open Menu"
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <Link to={"/"}>
            <Flex>
              {/* <Icon as={APP_ICONS.WEBSITE} fontSize={{ base: 20, md: 25 }} />{" "} */}
              <Text
                mt={1}
                ml={1}
                fontSize={{ base: 15, md: 20 }}
                fontWeight="bold"
              >
                HomeStyler
              </Text>
            </Flex>
          </Link>
          <HStack spacing={8} alignItems="center">
            <HStack
              fontSize={15}
              fontWeight={"400"}
              as="nav"
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              <Link
                px={2}
                py={1}
                rounded="md"
                _hover={{ textDecoration: "none" }}
                to="/"
              >
                Home
              </Link>
              <Link
                px={2}
                py={1}
                rounded="md"
                _hover={{ textDecoration: "none" }}
                // to="/plant-palace/about-us"
              >
                About
              </Link>
              <Link
                px={2}
                py={1}
                rounded="md"
                _hover={{ textDecoration: "none" }}
                // to={"/plant-palace/feedback"}
              >
                Feedback
              </Link>
              <Link
                px={2}
                py={1}
                rounded="md"
                _hover={{ textDecoration: "none" }}
                // to="/plant-palace/contact-us"
              >
                Contact
              </Link>
            </HStack>
          </HStack>
          <Flex alignItems="center">
            {user ? (
              <Button
                bg={"transparent"}
                _hover={{ bg: "transparent" }}
                mr={3}
                fontSize={"15px"}
                fontWeight={"bold"}
                onClick={() => {
                  if (confirm("are you sure?")) {
                    localStorage.removeItem("user");
                    location.href = "/";
                  }
                }}
              >
                Logout
              </Button>
            ) : (
              <Link
                // to={"/plant-palace/login"}
                colorScheme="teal"
                variant=""
                size="sm"
              >
                <Text fontWeight={"bold"} mr={2}>
                  Login
                </Text>
              </Link>
            )}
            {/* <IconButton
              icon={<Icon as={App_Icons.CART} fontSize={22} />}
              onClick={cartDrawer.onOpen}
              bg={"transparent"}
            />
            <Divider */}
              {/* orientation="vertical"
              borderColor="inherit"
              height={"20px"}
              borderWidth="0.5px"
            /> */}
            <IconButton
              ml={3}
              bg={"transparent"}
              icon={
                colorMode === "light" ? (
                  <Icon
                    as={APP_ICONS.MOON}
                    fontSize={22}
                    color={Colors.BLACK}
                  />
                ) : (
                  <Icon
                    as={APP_ICONS.SUN}
                    color={Colors.WHITE}
                    fontSize={26}
                    fontWeight={"bold"}
                  />
                )
              }
              onClick={toggleColorMode}
            />
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as="nav" spacing={4}>
              <Link to={"/"}>Home</Link>
              <Link to={"/plant-palace/about-us"}>About</Link>
              <Link to={"/plant-palace/feedback"}>Feedback</Link>
              <Link to={"/plant-palace/contact-us"}>Contact</Link>
            </Stack>
          </Box>
        ) : null}
      </Box>
      {/* <Cart disclosure={cartDrawer} /> */}
    </>
  );
}

export default Navbar;
