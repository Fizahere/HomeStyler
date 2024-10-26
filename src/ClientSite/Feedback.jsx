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
      setError("Please fill in the fields!");
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
      fontsize: { base: "20px", "2xl": "28px" },
    },
    {
      icon: APP_ICONS.UNHAPPY,
      label: "Unhappy",
      e_color: "orange",
      fontsize: { base: "20px", "2xl": "28px" },
    },
    {
      icon: APP_ICONS.SATISFY,
      label: "Neutral",
      e_color: "#999900",
      fontsize: { base: "20px", "2xl": "28px" },
    },
    {
      icon: APP_ICONS.HAPPY,
      label: "Happy",
      e_color: "green",
      fontsize: { base: "20px", "2xl": "28px" },
    },
    {
      icon: APP_ICONS.GOOD,
      label: "Very Happy",
      e_color: "blue",
      fontsize: { base: "20px", "2xl": "28px" },
    },
  ];

  return (
    <>
      <Box mt={6}>
        <Heading borderBottom="1px solid grey" pb={2} mb={4} >
          Feedback
        </Heading>
        <Flex
         px={{base:0,md:20}}
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
        >
          <Text
            textAlign="center"
            letterSpacing={1}
            fontSize={{ base: "30px", "2xl": "40px" }}
            fontWeight="bold"
          >
            How Are You Feeling?
          </Text>
          <Text
            mt={2}
            color={Colors.TEXTGREY}
            textAlign="center"
            w={{ base: "300px", md: "400px", "2xl": "600px" }}
            fontSize={{ base: "md", "2xl": "lg" }}
          >
            Your input is valuable in helping us better understand your needs
            and tailor our service accordingly.
          </Text>
          <Box textAlign="center" width={{ base: "300px", "2xl": "400px" }}>
            <Slider
              defaultValue={3}
              min={1}
              max={5}
              step={1}
              onChange={(val) => setSliderValue(val)}
              colorScheme="#4b5669"
            >
              <SliderTrack bg="gray.200">
                <SliderFilledTrack bg="#4b5669" />
              </SliderTrack>
              <SliderThumb boxSize={{ base: 10, "2xl": 14 }}>
                <Box
                  as={emojis[sliderValue - 1].icon}
                  color={emojis[sliderValue - 1].e_color}
                  fontSize={emojis[sliderValue - 1].fontsize}
                />
              </SliderThumb>
            </Slider>
            <Text
              mt={4}
              fontSize={{ base: "sm", "2xl": "md" }}
              fontWeight="bold"
              bg={Colors.BLACK}
              color="white"
              width={{ base: 40, "2xl": 48 }}
              py={2}
              borderRadius="50px"
              m="0 auto"
            >
              {emojis[sliderValue - 1].label}
            </Text>
            <form onSubmit={formHandler}>
              <Textarea
                value={message}
                borderRadius="10px"
                h={{ base: 140, "2xl": 180 }}
                mt={5}
                fontSize={{ base: "md", "2xl": "lg" }}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                placeholder="Add a comment..."
              />
              {error && (
                <Text mr={7} my={1} color="red" fontSize={{ base: "sm", "2xl": "md" }}>
                  {error}
                </Text>
              )}
              <Button
                mt={4}
                bg={Colors.THEME}
                color={Colors.WHITE}
                mb={6}
                _hover={{ bg: Colors.THEMEBUTTON }}
                width="100%"
                fontSize={{ base: "md", "2xl": "lg" }}
                py={{ base: 6, "2xl": 8 }}
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
