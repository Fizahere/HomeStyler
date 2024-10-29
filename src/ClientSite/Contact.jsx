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
  Center,
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
        <Flex  px={{base:0,md:20}} flexDirection={{ base: "column", md: "row" }}>
          <Box w={{ base: "100%", md: "50%" }}>
            <Text mt={4} fontSize={{lg:"14px",custom2:"20px"}} >
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
         px={{base:0,md:20}}
          mt={"40px"}
          mb={8}
          display={"flex"}
          justifyContent={"space-between"}
          flexDirection={{ base: "column", md: "row" }}
        >
          <Box>
            <Text fontWeight={"bold"} fontSize={{lg:"20px",custom2:"25px"}}>
              Customer Support{" "}
              <Icon
                ml={4}
                mt={1}
                fontSize={25}
                color={"#9966ff"}
                as={APP_ICONS.SUPPORT}
              />
            </Text>
            <Text mt={2} fontSize={{lg:"14px",custom2:"20px"}} color={Colors.GREY}>
              Need assistance with your home or have a question about our
              services? Don’t hesitate to reach out.
            </Text>
          </Box>
          <Box mt={{ base: 4, md: 0 }} px={{ base: 0, md: 10 }}>
            <Text fontWeight={"bold"} fontSize={{lg:"20px",custom2:"25px"}}>
              Feedback and Suggestions{" "}
              <Icon
                ml={4}
                mt={1}
                fontSize={25}
                color={"#00cc7a"}
                as={APP_ICONS.FEEDBACK}
              />
            </Text>
            <Text mt={2} fontSize={{lg:"14px",custom2:"20px"}} color={Colors.GREY}>
              At HomeStyler, Your insights help us enhance our services. you
              have feedback about your experience, we’d love to hear from you!{" "}
            </Text>
          </Box>
          <Box mt={{ base: 4, md: 0 }}>
            <Text fontWeight={"bold"} fontSize={{lg:"20px",custom2:"25px"}}>
              Media Inqueries{" "}
              <Icon
                ml={4}
                mt={1}
                fontSize={25}
                color={Colors.PRIMARYBLUE}
                as={APP_ICONS.MEDIA}
              />
            </Text>
            <Text mt={2} fontSize={{lg:"14px",custom2:"20px"}} color={Colors.GREY}>
              Are you a blogger interested in HomeStyler? We’d love to
              collaborate! Reach out, and we’ll get back to you soon.
            </Text>
          </Box>
        </Box>
        <Box
  px={{ base: 0, md: 20 }}
  py={10}
  textAlign="center"
  width={{ base: "400px", sm: "1000px" }}
  height={{ base: "300px", md: "450px" }}
  maxWidth="100%"
  mx="auto" 
>
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.017148928814!2d67.07182317437398!3d24.8632638779274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33ea3db108f41%3A0x42acc4507358b160!2sAptech%20Learning%2C%20Shahrah%20e%20Faisal%20Center!5e0!3m2!1sen!2s!4v1730182599602!5m2!1sen!2s"
    width="100%"
    height="100%"
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</Box>
      </Box>
    </>
  );
};

export default Contact;
