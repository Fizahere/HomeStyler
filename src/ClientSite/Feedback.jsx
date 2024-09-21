import React, { useState } from "react";
import {
  Box,
  Heading,
  Text,
  Flex,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Textarea,
  Button,
  useToast,
} from "@chakra-ui/react";
import { Colors } from "../constants/colors";
import APP_ICONS from "../constants/icons";

const Feedback = () => {
  const [sliderValue, setSliderValue] = useState(3);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const toast = useToast();

  const formHandler = (e) => {
    e.preventDefault();
    if (!message) {
      setError("fill the fields!");
      return;
    }
    toast({
      title: "Feedback sent!",
      description: "Thank you for your feedback.",
      status: "success",
      duration: 3000,
      isClosable: true,
      position: "top-right",
    });

    setError("");
    setMessage("");
  };

  const emojis = [
    {
      icon: APP_ICONS.SAD,
      label: "Very Unhappy",
      e_color: "red",
      fontsize: "20px",
    },
    {
      icon: APP_ICONS.UNHAPPY,
      label: "Unhappy",
      e_color: "orange",
      fontsize: "20px",
    },
    {
      icon: APP_ICONS.SATISFY,
      label: "Medium",
      e_color: "#999900",
      fontsize: "20px",
    },
    {
      icon: APP_ICONS.HAPPY,
      label: "Happy",
      e_color: "green",
      fontsize: "20px",
    },
    {
      icon: APP_ICONS.GOOD,
      label: "Very Happy",
      e_color: "blue",
      fontsize: "20px",
    },
  ];

  return (
    <>
      <Box mt={6}>
        <Heading borderBottom={"1px solid grey"} pb={2} mb={4}>
          Feedback
        </Heading>
        <Flex
          justifyContent={"center"}
          alignItems={"center"}
          flexDirection={"column"}
        >
          <Text
            textAlign={"center"}
            letterSpacing={1}
            fontSize={"30px"}
            fontWeight={"bold"}
          >
            How Are You Feeling?
          </Text>
          <Text mt={2} color={Colors.TEXTGREY} textAlign={"center"} w={"400px"}>
            Your input is valuable in helping us better understand your needs
            and tailor our service accordingly.
          </Text>
          <Box textAlign="center" width="300px">
            <Slider
              defaultValue={3}
              min={1}
              max={5}
              step={1}
              onChange={(val) => setSliderValue(val)}
              colorScheme="teal"
            >
              <SliderTrack bg="gray.200">
                <SliderFilledTrack bg="teal.400" />
              </SliderTrack>
              <SliderThumb boxSize={10}>
                <Box
                  as={emojis[sliderValue - 1].icon}
                  color={emojis[sliderValue - 1].e_color}
                  fontSize={emojis[sliderValue - 1].fontsize}
                />
              </SliderThumb>
            </Slider>
            <Text
              mt={4}
              fontSize="sm"
              fontWeight="bold"
              bg={Colors.BLACK}
              color="white"
              width={40}
              py={2}
              borderRadius="50px"
              m={"0 auto"}
            >
              {emojis[sliderValue - 1].label}
            </Text>
            <form onSubmit={formHandler}>
              <Textarea
                value={message}
                borderRadius={"10px"}
                h={140}
                mt={5}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                placeholder="Add a comment..."
              />
              {error && (
                <Text mr={7} my={1} color={"red"}>
                  {error}
                </Text>
              )}
              <Button
                mt={4}
                bg={Colors.THEME}
                color={Colors.WHITE}
                mb={6}
                _hover={{ bg: Colors.THEMEBUTTON }}
                width={"100%"}
                type="submit"
              >
                Submit Now
              </Button>
            </form>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default Feedback;
