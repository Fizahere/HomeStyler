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
  useColorModeValue,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import APP_ICONS from "../../constants/icons";
import { Colors } from "../../constants/colors";
import { UnAuthenticatedRoutesNames } from "../../utilities/util.constant";
import ProductSelection from "../../data/product-new-data.json";

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

  const productCategories =
    ProductSelection.productSelection.filters.categories;

  const activeLinkStyle = {
    borderBottom: "2px solid grey",
  };

  return (
    <>
      <Box
        zIndex={1}
        position="fixed"
        top={0}
        left={0}
        right={0}
        bg={colorMode === "light" ? Colors.BODYLIGHT : Colors.DASHBOARDTHEME}
        boxShadow="sm"
      >
        <Flex h={16} alignItems="center" justifyContent="space-between" px={4}>
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
            display={{ md: "block" }}
            onClick={onOpen}
          />
          <NavLink to={UnAuthenticatedRoutesNames.HOME}>
            <Flex px={2}>
              <Icon as={APP_ICONS.BUILDINGS} fontSize={28} />
              <Text
                mt={1}
                ml={1}
                fontSize={{ base: 15, md: 20 }}
                fontWeight="bold"
              >
                HomeStyler
              </Text>
            </Flex>
          </NavLink>

          <HStack
            spacing={8}
            alignItems="center"
            display={{ base: "none", lg: "flex" }}
          >
            <NavLink
              to={UnAuthenticatedRoutesNames.HOME}
              style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
            >
              Home
            </NavLink>

            <Menu>
              {({ isOpen }) => (
                <>
                  <MenuButton
                  p={0}
                    mt={1}
                    fontWeight="400"
                    _hover={{ bg: "transparent" }}
                    bg={"transparent"}
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
                    Designs
                  </MenuButton>
                  <MenuList>
                    {categories.map((singleCategory, index) => (
                      <Box key={index} py={2}>
                        <NavLink
                          to={UnAuthenticatedRoutesNames.SHOP.replace(
                            ":category",
                            singleCategory
                          ).toLocaleLowerCase()}
                          style={({ isActive }) =>
                            isActive ? activeLinkStyle : undefined
                          }
                        >
                          <MenuItem>{singleCategory}</MenuItem>
                        </NavLink>
                      </Box>
                    ))}
                  </MenuList>
                </>
              )}
            </Menu>

            <Menu>
              {({ isOpen }) => (
                <>
                  <MenuButton
                  p={0}
                    mt={1}
                    fontWeight="400"
                    _hover={{ bg: "transparent" }}
                    isActive={isOpen}
                    bg={"transparent"}
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
                    Products
                  </MenuButton>
                  <MenuList>
                    {productCategories.map((singleProdCategory, index) => (
                      <Box key={index} py={2}>
                        <NavLink
                          to={UnAuthenticatedRoutesNames.PRODUCTS.replace(
                            ":prodCategory",
                            singleProdCategory
                          ).toLocaleLowerCase()}
                          style={({ isActive }) =>
                            isActive ? activeLinkStyle : undefined
                          }
                        >
                          <MenuItem>{singleProdCategory}</MenuItem>
                        </NavLink>
                      </Box>
                    ))}
                  </MenuList>
                </>
              )}
            </Menu>

            <NavLink
              to={UnAuthenticatedRoutesNames.ABOUT}
              style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
            >
              About
            </NavLink>
            <NavLink
              to={UnAuthenticatedRoutesNames.FEEDBACK}
              style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
            >
              Feedback
            </NavLink>
            <NavLink
              to={UnAuthenticatedRoutesNames.CONTACT}
              style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
            >
              Contact
            </NavLink>
          </HStack>

          <Flex alignItems="center">
            <NavLink to={UnAuthenticatedRoutesNames.LOGIN}>
              <Text fontWeight={"bold"} mr={2}>
                Login
              </Text>
            </NavLink>
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
                <NavLink to={UnAuthenticatedRoutesNames.HOME} onClick={onClose}>
                  Home
                </NavLink>
                <NavLink
                  to={UnAuthenticatedRoutesNames.ABOUT}
                  onClick={onClose}
                >
                  About
                </NavLink>
                <NavLink
                  to={UnAuthenticatedRoutesNames.FEEDBACK}
                  onClick={onClose}
                >
                  Feedback
                </NavLink>
                <NavLink
                  to={UnAuthenticatedRoutesNames.CONTACT}
                  onClick={onClose}
                >
                  Contact
                </NavLink>
              </Stack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>
      <Box mt="65px"></Box>
    </>
  );
}

export default Navbar;
