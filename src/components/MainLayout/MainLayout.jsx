import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  useDisclosure,
  useColorModeValue,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  Flex,
  Icon,
  Avatar,
  Collapse,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import { AuthenticatedRouteNames } from "../../utilities/util.constant";
import APP_ICONS from "../../constants/icons";
import { Colors } from "../../constants/colors";
import DesignsData from '../../data/designs-data.json';

function MainLayout() {
  const { colorMode, toggleColorMode } = useColorMode();
  const sidebar = useDisclosure();
  const color = useColorModeValue("gray.600", "gray.300");
  const [searchKey, setSearchKey] = useState("");
  const navigate = useNavigate();
  const integrations = useDisclosure();
  const [openSubCat, setOpenSubCat] = useState(null);
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setUserEmail(user.email);
    } else {
      setUserEmail("User");
    }
  }, []);

  // const handleSubCategoryToggle = (index) => {
  //   setOpenSubCat(openSubCat === index ? null : index);
  // };

  const categories = [
    "Living Room",
    "Office",
    "Kitchen",
    "Bedroom",
    "Bathroom",
  ];
  // const filteredProducts =  DesignsData?.designs?.category;
  // console.log(filteredProducts,'filteredProducts')

  // const subCategories = ["Cozy", "Elegant", "Classic", "Minimalist"];

  // const categoriedData = productsData.homeStyler.map((designs) =>
  //   console.log(designs.designs)
  // );
  const NavItem = (props) => {
    const { icon, children, ...rest } = props;
    return (
      <Flex
        align="center"
        px="4"
        pl="4"
        py="3"
        cursor="pointer"
        color="white"
        _dark={{
          color: Colors.WHITE,
        }}
        _hover={{
          bg: "black",
          _dark: {
            bg: "black",
            color: "white",
          },
          color: "white",
        }}
        role="group"
        fontWeight="semibold"
        transition=".15s ease"
        {...rest}
      >
        {icon && (
          <Icon
            mx="2"
            boxSize="4"
            _groupHover={{
              color: color,
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    );
  };

  const SidebarContent = (props) => (
    <Box
      as="nav"
      pos="fixed"
      top="0"
      left="0"
      zIndex="sticky"
      h="full"
      pb="10"
      overflowX="hidden"
      overflowY="auto"
      bg={Colors.DASHBOARDTHEME}
      _dark={{
        bg: Colors.DASHBOARDTHEME,
      }}
      border
      color={Colors.White}
      borderRightWidth="1px"
      w="60"
      {...props}
    >
      <Flex
        borderBottom={{
          base: "1px solid white",
          md: "none",
        }}
        px="4"
        py="4"
        mb="2"
        color={Colors.WHITE}
        justifyContent={"space-between"}
      >
        <Flex>
          <APP_ICONS.DASHBOARD fontSize={"1.8rem"} />
          <Text
            fontSize="2xl"
            ml="2"
            color="brand.500"
            _dark={{
              color: "white",
            }}
            fontWeight="semibold"
          >
            Dashboard
          </Text>
        </Flex>
        <Icon
          as={APP_ICONS.CLOSE}
          fontSize={"25px"}
          onClick={sidebar.onClose}
          display={{
            base: "inline-flex",
            md: "none",
          }}
        />
      </Flex>
      <Flex
        direction="column"
        as="nav"
        fontSize="sm"
        color={Colors.WHITE}
        aria-label="Main Navigation"
      >
        <Link to={AuthenticatedRouteNames.Dashboard}>
          <NavItem>
            <Icon
              fontSize={"1.2rem"}
              ml={"7px"}
              mr={"6px"}
              as={APP_ICONS.HOME}
            />
            Home
          </NavItem>
        </Link>

        <Link to={AuthenticatedRouteNames.USERS}>
          <NavItem>
            <Icon
              fontSize={"1.2rem"}
              ml={"7px"}
              mr={"6px"}
              as={APP_ICONS.USERS}
            />
            Designers
          </NavItem>
        </Link>

        <NavItem
          icon={APP_ICONS.CATEGORY}
          _hover={{ color: "inherit" }}
          onClick={integrations.onToggle}
        >
          Categories
          <Icon
            as={APP_ICONS.TOGGLE}
            ml="auto"
            transform={integrations.isOpen ? "rotate(180deg)" : "rotate(0deg)"}
          />
        </NavItem>

        <Collapse in={integrations.isOpen}>
          {categories.map((singleCategory, index) => (
            <Box key={index}>
              <NavItem
               onClick={() =>
                navigate(
                  AuthenticatedRouteNames?.DESIGNS.replace(
                    ":category",
                    `${singleCategory}`
                  ).toLocaleLowerCase()
                )
              }
              // onClick={() => handleSubCategoryToggle(index)}
              >
                {singleCategory}
                {/* <Icon
                  as={APP_ICONS.TOGGLE}
                  ml="auto"
                  // transform={
                  //   openSubCat === index ? "rotate(180deg)" : "rotate(0deg)"
                  // }
                /> */}
              </NavItem>
              {/* <Collapse in={openSubCat === index}>
                {subCategories.map((singleSubCategory, subIndex) => (
                  <Box key={`${index}-${subIndex}`}>
                    <NavItem
                      onClick={() =>
                        navigate(
                          AuthenticatedRouteNames.PRODUCTS.replace(
                            ":category/:subcategory",
                            `${singleCategory}/${singleSubCategory}`
                          ).toLocaleLowerCase()
                        )
                      }
                    >
                      {singleSubCategory}
                    </NavItem>
                  </Box>
                ))}
              </Collapse> */}
            </Box>
          ))}
        </Collapse>

        <Link to={AuthenticatedRouteNames.SETTING}>
          <NavItem>
            <Icon
              fontSize={"1.2rem"}
              ml={"7px"}
              mr={"6px"}
              as={APP_ICONS.SETTING}
            />
            Setting
          </NavItem>
        </Link>
        <Box _hover={{ bg: "black" }}
        >
        <Button
        width={121}
        _hover={{ bg: "transparent" }}
          bg={"transparent"}
          onClick={() => {
            if (confirm("are you sure you want to logout?")) {
              navigate(AuthenticatedRouteNames.LOGOUT);
            } else {
              navigate(AuthenticatedRouteNames.Dashboard);
            }
          }}
        >
          <NavItem>
            <Icon
              transform={"rotate(180deg)"}
              fontSize={"1.4rem"}
              ml={"4px"}
              mr={"6px"}
              as={APP_ICONS.LOGOUT}
            />
            Logout
          </NavItem>
        </Button>
        </Box>
      </Flex>
    </Box>
  );

  return (
    <Box
      as="section"
      bg="gray.50"
      _dark={{
        bg: "#262626",
      }}
      minH="100vh"
    >
      <SidebarContent
        display={{
          base: "none",
          md: "unset",
        }}
      />
      <Drawer
        isOpen={sidebar.isOpen}
        onClose={sidebar.onClose}
        placement="left"
      >
        <DrawerOverlay />
        <DrawerContent>
          <SidebarContent w="full" borderRight="none" />
        </DrawerContent>
      </Drawer>
      <Box
        ml={{
          base: 0,
          md: 60,
        }}
        transition=".3s ease"
      >
        <Flex
          as="header"
          align="center"
          justify="space-between"
          w="full"
          px="4"
          bg={Colors.DASHBOARDTHEME}
          _dark={{
            bg: Colors.DASHBOARDTHEME,
          }}
          borderBottomWidth="1px"
          color="inherit"
          h="14"
        >
          <Icon
            as={APP_ICONS.THREEBARS}
            fontSize={"25px"}
            display={{
              base: "inline-flex",
              md: "none",
            }}
            color={Colors.WHITE}
            aria-label="Menu"
            onClick={sidebar.onOpen}
          />
          <form
            method="post"
            onSubmit={(event) => {
              event.preventDefault();
              navigate(
                AuthenticatedRouteNames.SEARCH.replace(":pageno", searchKey)
              );
            }}
          >
          </form>

          <Flex align="center">
            <Button
              bg={"transparent"}
              fontSize={"1.7rem"}
              onClick={toggleColorMode}
            >
              <Icon
                color={Colors.WHITE}
                as={colorMode == "light" ? APP_ICONS.MOON : APP_ICONS.SUN}
                cursor="pointer"
              />
            </Button>
            <Avatar ml="4" size="sm" name={userEmail}/>
          </Flex>
        </Flex>

        <Box as="main" p="4">
          <Box borderWidth="4px" p={"1rem"} borderStyle="dashed" rounded="md">
            <Outlet />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default MainLayout;
