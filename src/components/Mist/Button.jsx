import React from "react";
import { Button, Icon } from "@chakra-ui/react";
import APP_ICONS from "../../constants/icons";
import { Colors } from "../../constants/colors";

function CustomButton(props) {
  const { onClickHandler, buttonText, icon, backgroundColor } = props;
  return (
    <>
      <Button
        bg={backgroundColor}
        color={Colors.WHITE}
        _hover={{ bg: '' }}
        _dark={{
          bg: backgroundColor,
          // color:Colors.WHITE,
        }}
        onClick={onClickHandler}
      >
        {icon ? <Icon fontSize={"1.2rem"} mr={"6px"} as={icon} /> : null}
        {buttonText}
      </Button>
    </>
  );
}

export default CustomButton;
