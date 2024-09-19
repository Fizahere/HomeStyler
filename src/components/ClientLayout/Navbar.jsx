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
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import APP_ICONS from "../../constants/icons";
import { Colors } from "../../constants/colors";
import { UnAuthenticatedRoutesNames } from "../../utilities/util.constant";

function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const [user, setUser] = useState(localStorage.getItem("user"));

  const categories = [
    "Living Room",
    "Office",
    "Kitchen",
    "Bedroom",
    "Bathroom",
  ];

  return (
    <>
      <Box zIndex={1}>
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
            onClick={onOpen}
          />
          <Link to={UnAuthenticatedRoutesNames.HOME}>
            <Flex>
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

          <HStack
            spacing={8}
            alignItems="center"
            display={{ base: "none", md: "flex" }}
          >
            <Link to={UnAuthenticatedRoutesNames.HOME}>Home</Link>
            <Menu>
              {({ isOpen }) => (
                <>
                  <MenuButton
                    mt={1}
                    fontWeight="400"
                    _hover={{ bg: "transparent" }}
                    isActive={isOpen}
                    as={Button}
                    rightIcon={
                      <Box
                        transform={isOpen ? "rotate(180deg)" : "rotate(0deg)"}
                        transition="transform 0.2s ease"
                      >
                        <APP_ICONS.TOGGLE />
                      </Box>
                    }
                  >
                    Categories
                  </MenuButton>
                  <MenuList>
                    {categories.map((singleCategory, index) => (
                      <Box key={index} py={2}>
                        <Link
                          to={UnAuthenticatedRoutesNames.SHOP.replace(
                            ":category",
                            singleCategory
                          ).toLocaleLowerCase()}
                        >
                          <MenuItem>{singleCategory}</MenuItem>
                        </Link>
                      </Box>
                    ))}
                  </MenuList>
                </>
              )}
            </Menu>
            <Link to={UnAuthenticatedRoutesNames.ABOUT}>About</Link>
            <Link to={UnAuthenticatedRoutesNames.FEEDBACK}>Feedback</Link>
            <Link to={UnAuthenticatedRoutesNames.CONTACT}>Contact</Link>
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
                  if (confirm("Are you sure?")) {
                    localStorage.removeItem("user");
                    location.href = "/";
                  }
                }}
              >
                Logout
              </Button>
            ) : (
              <Link to={UnAuthenticatedRoutesNames.LOGIN}>
                <Text fontWeight={"bold"} mr={2}>
                  Login
                </Text>
              </Link>
            )}
            <IconButton
              icon={<Icon as={APP_ICONS.WISHLIST} fontSize={22} />}
              bg={"transparent"}
            />
            <Divider
              orientation="vertical"
              borderColor="inherit"
              height={"20px"}
              borderWidth="0.5px"
            />
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
                  <Icon as={APP_ICONS.SUN} fontSize={26} color={Colors.WHITE} />
                )
              }
              onClick={toggleColorMode}
            />
          </Flex>
        </Flex>
        <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Menu</DrawerHeader>
            <DrawerBody>
              <Stack as="nav" spacing={4}>
                <Link to={UnAuthenticatedRoutesNames.HOME} onClick={onClose}>
                  Home
                </Link>
                <Link to={UnAuthenticatedRoutesNames.ABOUT} onClick={onClose}>
                  About
                </Link>
                <Link
                  to={UnAuthenticatedRoutesNames.FEEDBACK}
                  onClick={onClose}
                >
                  Feedback
                </Link>
                <Link to={UnAuthenticatedRoutesNames.CONTACT} onClick={onClose}>
                  Contact
                </Link>
              </Stack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>
    </>
  );
}

export default Navbar;
