import React from "react";
import { Button } from "@chakra-ui/react";
import { Colors } from "../../constants/colors";

function CustomButton(props) {
  const { title,onClick ,width,bg,color} = props;
  return (
    <>
      <Button
        bg={bg?bg:Colors.THEME}
        color={color?color:Colors.WHITE}
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
