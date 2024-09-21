import React, { useState } from "react";
import {
  Box,
  Flex,
  Heading,
  Input,
  Text,
  Textarea,
  Icon,
  Button,
  useToast,
} from "@chakra-ui/react";
import APP_ICONS from "../constants/icons";
import { Colors } from "../constants/colors";

const Contact = () => {
  const toast = useToast();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const [error, setError] = useState("");

  const formHandler = (e) => {
    e.preventDefault();

    if (!email || !message) {
      setError("Please fill in your fields!");
      return;
    } else if (!emailRegex.test(email)) {
      setError("Invalid email address!");
      return;
    }

    toast({
      title: "Message sent!",
      description: "We’ll get back to you soon.",
      status: "success",
      duration: 3000,
      isClosable: true,
      position: "top-right",
    });

    console.log("Clearing fields:", { email, message });

    setEmail("");
    setMessage("");
    setError("");
  };

  
  return (
    <>
      <Box mt={6}>
        <Heading borderBottom={"1px solid grey"} pb={2} mb={4}>
          Contact
        </Heading>
        <Flex flexDirection={{ base: "column", md: "row" }}>
          <Box w={{ base: "100%", md: "50%" }}>
            <Text mt={4} fontSize={"14"}>
              We're here to help you transform your space into a masterpiece!
              Whether you have questions about our design services, or want to
              share your HomeStyler experience, we'd love to hear from you.
            </Text>
            <Text mt={"30px"}>
              <b>
                <Icon
                  mr={2}
                  mt={1}
                  fontSize={18}
                  color={"#ff5050"}
                  as={APP_ICONS.MAIL}
                />
                Email:
              </b>{" "}
              support@homestyler.com
            </Text>
            <Text mt={2}>
              <b>
                <Icon
                  mr={2}
                  mt={1}
                  fontSize={18}
                  color={"#00cc7a"}
                  as={APP_ICONS.PHONE}
                />
                Phone:
              </b>{" "}
              +92 (312) 0832-542
            </Text>
            <Text mt={2}>
              <b>
                <Icon
                  mr={2}
                  mt={1}
                  fontSize={18}
                  color={Colors.PRIMARYBLUE}
                  as={APP_ICONS.HOME}
                />
                Address:
              </b>{" "}
              123 Design Avenue, Style City, NY 10001
            </Text>
          </Box>
          <Box
            ml={{ base: 0, md: 20 }}
            mt={{ base: 8, md: 0 }}
            w={{ base: "100%", md: "50%" }}
          >
                     <form onSubmit={formHandler}>
              <Box py={4}>
                <Text fontWeight={"bold"}>
                  <Icon
                    mr={2}
                    mt={2}
                    fontSize={20}
                    color={"#ff5050"}
                    as={APP_ICONS.MAIL}
                  />
                  Your Email:
                </Text>
                <Input
                  placeholder="email**"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (!emailRegex.test(e.target.value)) {
                      setError("Invalid email!");
                    } else {
                      setError("");
                    }
                  }}
                />
              </Box>
              <Box py={4}>
                <Text fontWeight={"bold"}>
                  <Icon
                    mr={2}
                    mt={2}
                    fontSize={20}
                    color={"#9966ff"}
                    as={APP_ICONS.MESSAGE}
                  />
                  Message:
                </Text>
                <Textarea
                  placeholder={"message**"}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </Box>
              <Text mr={7} mb={4} color={"red"}>
                {error && error}
              </Text>
              <Button
                type="submit"
                width={"100%"}
                bg={Colors.THEME}
                color={Colors.WHITE}
                _hover={{ bg: Colors.THEMEBUTTON }}
              >
                Send
              </Button>
            </form>
          </Box>
        </Flex>
        <Box
          mt={"40px"}
          mb={8}
          display={"flex"}
          justifyContent={"space-between"}
          flexDirection={{ base: "column", md: "row" }}
        >
          <Box>
            <Text fontWeight={"bold"}>
              Customer Support{" "}
              <Icon
                ml={4}
                mt={1}
                fontSize={25}
                color={"#9966ff"}
                as={APP_ICONS.SUPPORT}
              />
            </Text>
            <Text mt={2} fontSize={"12px"} color={Colors.GREY}>
              Need assistance with your home or have a question about our
              services? Don’t hesitate to reach out.
            </Text>
          </Box>
          <Box mt={{ base: 4, md: 0 }} px={{ base: 0, md: 10 }}>
            <Text fontWeight={"bold"}>
              Feedback and Suggestions{" "}
              <Icon
                ml={4}
                mt={1}
                fontSize={25}
                color={"#00cc7a"}
                as={APP_ICONS.FEEDBACK}
              />
            </Text>
            <Text mt={2} fontSize={"12px"} color={Colors.GREY}>
              At HomeStyler, Your insights help us enhance our services. you
              have feedback about your experience, we’d love to hear from you!{" "}
            </Text>
          </Box>
          <Box mt={{ base: 4, md: 0 }}>
            <Text fontWeight={"bold"}>
              Media Inqueries{" "}
              <Icon
                ml={4}
                mt={1}
                fontSize={25}
                color={Colors.PRIMARYBLUE}
                as={APP_ICONS.MEDIA}
              />
            </Text>
            <Text mt={2} fontSize={"12px"} color={Colors.GREY}>
              Are you a blogger interested in HomeStyler? We’d love to
              collaborate! Reach out, and we’ll get back to you soon.
            </Text>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Contact;
