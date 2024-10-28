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
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { NavLink, useNavigate } from "react-router-dom";
import APP_ICONS from "../../constants/icons";
import { Colors } from "../../constants/colors";
import { UnAuthenticatedRoutesNames } from "../../utilities/util.constant";
import ProductSelection from "../../data/product-new-data.json";
import Cart from "../../ClientSite/Cart";

function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const cartDrawer = useDisclosure();
  const handleSearch = (e) => {
    if (e.key === "Enter" && searchQuery.trim()) {
      const searchPath = UnAuthenticatedRoutesNames.SEARCH.replace(":query", searchQuery.trim());
      navigate(searchPath);
    }
  };
  
  

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
    borderBottom: "2px solid ",
  };
  const cart = localStorage.getItem("cart");
  const cartCount = cart ? JSON.parse(cart).length : 0;

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
            display={{ base: "block", lg: "none" }}
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

          {/* search bar start */}
          <InputGroup
            w={230}
            display={{ base: "none", lg: "flex" }}
            justifyContent={"space-between"}
          >
            <Input
              borderRadius={10}
              p={2}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleSearch}
              placeholder={"Search"}
              _placeholder={{ fontSize: "15px" }}
            />
            <InputRightElement mr={3}>
              <Icon as={APP_ICONS.SEARCH} color={"grey"} fontSize={20} />
            </InputRightElement>
          </InputGroup>
          {/* search bar start */}

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
                  <MenuList
                    bg={Colors.WHITE}
                    _dark={{ bg: Colors.DASHBOARDTHEME }}
                  >
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
                          <MenuItem
                            _dark={{
                              bg: Colors.DASHBOARDTHEME,
                              _hover: {
                                bg: "#333333",
                              },
                            }}
                          >
                            {singleCategory}
                          </MenuItem>
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
                  <MenuList _dark={{ bg: Colors.DASHBOARDTHEME }}>
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
                          <MenuItem
                            _dark={{
                              bg: Colors.DASHBOARDTHEME,
                              _hover: {
                                bg: "#333333",
                              },
                            }}
                          >
                            {singleProdCategory}
                          </MenuItem>
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
            {/* <Box display={{base:'none',lg:'block'}}> */}
            <NavLink to={UnAuthenticatedRoutesNames.LOGIN}>
              <Text fontWeight={"bold"} mr={2}>
                Login
              </Text>
            </NavLink>
            {/* </Box> */}
            <NavLink to={UnAuthenticatedRoutesNames.WISHLIST}>
              <Icon
                mt={2}
                mx={2}
                as={APP_ICONS.WISHLIST}
                fontSize={{ base: 14, md: 20 }}
                color={Colors.RED}
              />
            </NavLink>
            <Divider
              orientation="vertical"
              borderColor="inherit"
              height={"20px"}
              borderWidth="0.5px"
            />
            <Box position="relative" display="inline-block">
              <Text
                position="absolute"
                top="-5px"
                right="-8px"
                border={"1px solid red"}
                px={1.4}
                fontSize={{ base: 8, md: 12 }}
                color="red"
                fontWeight="bold"
                borderRadius="50%"
                w={{ base: 4, md: 5 }}
                textAlign="center"
              >
                {cartCount}
              </Text>
              <IconButton
                icon={
                  <Icon as={APP_ICONS.CART} fontSize={{ base: 14, md: 20 }} />
                }
                onClick={cartDrawer.onOpen}
                bg="transparent"
                _hover={{
                  bg: "transparent",
                }}
              />
            </Box>

            <Divider
              ml={3}
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
            <DrawerHeader
              bg={
                colorMode === "light" ? Colors.BODYLIGHT : Colors.DASHBOARDTHEME
              }
            >
              <NavLink to={UnAuthenticatedRoutesNames.HOME}>
                <Flex px={2}>
                  <Icon as={APP_ICONS.BUILDINGS} fontSize={28} />
                  <Text
                    mt={1}
                    ml={2}
                    fontSize={{ base: 15, md: 20 }}
                    fontWeight="bold"
                  >
                    HomeStyler
                  </Text>
                </Flex>
              </NavLink>
            </DrawerHeader>
            <DrawerBody
              bg={
                colorMode === "light" ? Colors.BODYLIGHT : Colors.DASHBOARDTHEME
              }
            >
              <Stack as="nav" spacing={4}>
                <NavLink to={UnAuthenticatedRoutesNames.HOME} onClick={onClose}>
                  Home
                </NavLink>
                <Box mr={600}>
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
                              transform={
                                isOpen ? "rotate(180deg)" : "rotate(0deg)"
                              }
                              transition="transform 0.2s ease"
                            >
                              <APP_ICONS.TOGGLE />
                            </Box>
                          }
                        >
                          Designs
                        </MenuButton>
                        <MenuList
                          bg={Colors.WHITE}
                          _dark={{ bg: Colors.DASHBOARDTHEME }}
                        >
                          {categories.map((singleCategory, index) => (
                            <Box key={index} py={2}>
                              <NavLink
                                onClick={onClose}
                                to={UnAuthenticatedRoutesNames.SHOP.replace(
                                  ":category",
                                  singleCategory
                                ).toLocaleLowerCase()}
                                style={({ isActive }) =>
                                  isActive ? activeLinkStyle : undefined
                                }
                              >
                                <MenuItem
                                  _dark={{
                                    bg: Colors.DASHBOARDTHEME,
                                    _hover: {
                                      bg: "#333333",
                                    },
                                  }}
                                >
                                  {singleCategory}
                                </MenuItem>
                              </NavLink>
                            </Box>
                          ))}
                        </MenuList>
                      </>
                    )}
                  </Menu>
                </Box>
                <Box mr={600}>
                  <Menu>
                    {({ isOpen }) => (
                      <>
                        <MenuButton
                          p={0}
                          mr={200}
                          mt={1}
                          fontWeight="400"
                          _hover={{ bg: "transparent" }}
                          isActive={isOpen}
                          bg={"transparent"}
                          as={Button}
                          rightIcon={
                            <Box
                              transform={
                                isOpen ? "rotate(180deg)" : "rotate(0deg)"
                              }
                              transition="transform 0.2s ease"
                            >
                              <APP_ICONS.TOGGLE />
                            </Box>
                          }
                        >
                          Products
                        </MenuButton>
                        <MenuList _dark={{ bg: Colors.DASHBOARDTHEME }}>
                          {productCategories.map(
                            (singleProdCategory, index) => (
                              <Box key={index} py={2}>
                                <NavLink
                                  onClick={onClose}
                                  to={UnAuthenticatedRoutesNames.PRODUCTS.replace(
                                    ":prodCategory",
                                    singleProdCategory
                                  ).toLocaleLowerCase()}
                                  style={({ isActive }) =>
                                    isActive ? activeLinkStyle : undefined
                                  }
                                >
                                  <MenuItem
                                    _dark={{
                                      bg: Colors.DASHBOARDTHEME,
                                      _hover: {
                                        bg: "#333333",
                                      },
                                    }}
                                  >
                                    {singleProdCategory}
                                  </MenuItem>
                                </NavLink>
                              </Box>
                            )
                          )}
                        </MenuList>
                      </>
                    )}
                  </Menu>
                </Box>
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
      <Cart disclosure={cartDrawer} />
    </>
  );
}

export default Navbar;
