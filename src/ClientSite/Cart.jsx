import React, { useState } from "react";
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
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  ModalHeader,
  ModalBody,
  Modal,
  useDisclosure,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Select,
  useToast,
} from "@chakra-ui/react";
import { Colors } from "../constants/colors";
import APP_ICONS from "../constants/icons";

const Cart = ({ disclosure }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const [cartItems, setCartItems] = React.useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    cardNumber: "",
    paymentMethod: "cash",
  });
  const [errors, setErrors] = useState({});
  const toast = useToast();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!/^[a-zA-Z\s]{3,}$/.test(formData.name)) {
      newErrors.name = "use valid name";
    }
    if (!/^[0-9]{11}$/.test(formData.phone)) {
      newErrors.phone = "invalid phone number";
    }
    if (formData.address.length < 3) {
      newErrors.address = "address too short";
    }
    if (formData.paymentMethod === "card" && !/^[a-zA-Z0-9]{5,}$/.test(formData.cardNumber)) {
      newErrors.cardNumber = "invalid card number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      localStorage.removeItem("cart");
      setCartItems([]);
      onClose();
      disclosure.onClose();
      toast({
        title: "Payment successful",
        description: "Your order has been placed.",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "right",
      });
    } else {
      console.log("Form validation failed.");
    }
  };
  const deleteItem = (itemId) => {
    const updatedCart = cartItems.filter((item) => item.id !== itemId);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCartItems(updatedCart);
  };

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
          <DrawerHeader bg={Colors.BODYLIGHT} _dark={{ bg: Colors.DASHBOARDTHEME }}>Cart</DrawerHeader>

          <DrawerBody bg={Colors.BODYLIGHT} _dark={{ bg: Colors.DASHBOARDTHEME }}>
            {cartItems.length > 0 ? (
              cartItems.map((item, index) => (
                <Card
                  key={index}
                  boxShadow={"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}
                  _dark={{ bg: '#252525' }}
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
                        <Text fontSize={10}>Price: PKR {item.price}</Text>
                        <Text fontSize={10}>Quantity: {item.quantity}</Text>
                        <Text fontSize={10}>Total: PKR {item.totalPrice}</Text>
                      </Flex>
                    </Flex>
                  </CardBody>
                </Card>
              ))
            ) : (
              <Text>No items in the cart.</Text>
            )}
          </DrawerBody>

          <DrawerFooter bg={Colors.BODYLIGHT} _dark={{ bg: Colors.DASHBOARDTHEME }}>
            <Button
              width={"100%"}
              color={Colors.WHITE}
              bg={Colors.THEME}
              _hover={{ bg: Colors.THEME }}
              onClick={onOpen}
              isDisabled={cartItems.length === 0}
            >
              Checkout
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bg={Colors.BODYLIGHT} _dark={{ bg: Colors.DASHBOARDTHEME }}>
          <ModalHeader>You are almost there,</ModalHeader>
          <ModalCloseButton />
          <ModalBody overflowY="auto">
            <form onSubmit={handleSubmit}>
              <VStack mb={5} spacing={4}>
                {["name", "phone", "address"].map((field) => (
                  <FormControl key={field} id={field}>
                    <FormLabel>{field.charAt(0).toUpperCase() + field.slice(1)}</FormLabel>
                    <Input
                      name={field}
                      placeholder={`${field}**`}
                      value={formData[field]}
                      onChange={handleChange}
                      borderColor={errors[field] ? "red.500" : "inherit"}
                    />
                  </FormControl>
                ))}

                <FormControl id="paymentMethod">
                  <FormLabel>Payment Method</FormLabel>
                  <Select
                    name="paymentMethod"
                    value={formData.paymentMethod}
                    onChange={handleChange}
                  >
                    <option value="cash">Cash on Delivery</option>
                    <option value="card">Card Payment</option>
                  </Select>
                </FormControl>

                {formData.paymentMethod === "card" && (
                  <FormControl id="cardNumber">
                    <FormLabel>Card Number</FormLabel>
                    <Input
                      name="cardNumber"
                      placeholder="Card Number"
                      value={formData.cardNumber}
                      onChange={handleChange}
                      borderColor={errors.cardNumber ? "red.500" : "inherit"}
                    />
                  </FormControl>
                )}

                {Object.keys(errors).length > 0 && (
                  <Text textAlign="center" color="red.500" mb={4}>
                    {Object.values(errors)[0]}
                  </Text>
                )}
                <Button bg={Colors.BUTTON} type="submit" width="full">
                  Order Now
                </Button>
              </VStack>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Cart;
