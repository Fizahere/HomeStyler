import React from "react";
import {
  Button,
  Drawer,
  DrawerOverlay,
  DrawerHeader,
  DrawerBody,
  DrawerContent,
  Card,
  CardBody,
  Text,
  Flex,
  Image,
  DrawerFooter,
  DrawerCloseButton,
  Divider,
  IconButton,
} from "@chakra-ui/react";
import { Colors } from "../constants/colors";
import APP_ICONS from "../constants/icons";
import { UnAuthenticatedRoutesNames } from "../utilities/util.constant";

const Cart = ({ disclosure }) => {
  const btnRef = React.useRef();
  const [cartItems, setCartItems] = React.useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  const deleteItem = (itemId) => {
    const updatedCart = cartItems.filter((item) => item.id !== itemId);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCartItems(updatedCart);
  };

  // console.log("Cart Items: ", cartItems);

  return (
    <>
      <Drawer
        isOpen={disclosure.isOpen}
        placement="right"
        onClose={disclosure.onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader bg={"inherit"}>Cart</DrawerHeader>

          <DrawerBody bg={"inherit"}>
            {cartItems.length > 0 ? (
              cartItems.map((item, index) => (
                <Card
                  key={index}
                  boxShadow={
                    "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
                  }
                  _dark={{ bg: Colors.DARKTHEME }}
                  border={"1px solid grey"}
                  mb={4}
                >
                  <CardBody>
                    <IconButton
                      aria-label="Delete item"
                      icon={<APP_ICONS.CLOSE />}
                      ml={"190px"}
                      bg={"transparent"}
                      onClick={() => deleteItem(item.id)}
                    />
                    <Flex flexDir={"row"} alignItems={"center"}>
                      <Image
                        src={item.image}
                        alt={item.name}
                        height={100}
                        width={100}
                      />
                      <Divider
                        orientation="vertical"
                        borderColor="inherit"
                        height={"95px"}
                        borderWidth="0.5px"
                        mr={3}
                      />
                      <Flex flexDirection={"column"}>
                        <Text fontSize={10}>Name: {item.name}</Text>
                        <Text fontSize={10}>Price: ${item.price}</Text>
                        <Text fontSize={10}>Quantity: {item.quantity}</Text>
                        <Text fontSize={10}>Total: ${item.totalPrice}</Text>
                      </Flex>
                    </Flex>
                  </CardBody>
                </Card>
              ))
            ) : (
              <Text>No items in the cart.</Text>
            )}
          </DrawerBody>

          <DrawerFooter bg={"inherit"}>
            <Button
              width={"100%"}
              color={Colors.WHITE}
              bg={Colors.THEME}
              _hover={{ bg: Colors.THEME }}
              onClick={() => {
                localStorage.removeItem("cart");
                location.assign(UnAuthenticatedRoutesNames.HOME);
              }}
            >
              Checkout
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Cart;
