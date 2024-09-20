import React from "react";
import { Button } from "@chakra-ui/react";
import { Colors } from "../../constants/colors";

function CustomButton(props) {
  const { title,onClick ,width,bg,color} = props;
  return (
    <>
      <Button
        bgGradient={!bg&&"linear(to-r, gray.800, gray.100,gray.800)"}
        bg={bg&&bg}
        color={color?color:Colors.BLACK}
        _hover={{ bg: Colors.THEMEBUTTON }}
        w={width}
        p={3}
        borderRadius={8}
        fontWeight={"bold"}
        onClick={onClick}
      >
        {title}
      </Button>
    </>
  );
}

export default CustomButton;
