import React from "react";
import { Button } from "@chakra-ui/react";
import { Colors } from "../../constants/colors";

function CustomButton(props) {
  const { title } = props;
  return (
    <>
      <Button
        bgGradient="linear(to-r, gray.800, gray.100,gray.800)"
        color={Colors.BLACK}
        _hover={{ bg: Colors.THEMEBUTTON }}
        w={270}
        p={3}
        borderRadius={8}
        fontWeight={"bold"}
      >
        {title}
      </Button>
    </>
  );
}

export default CustomButton;
