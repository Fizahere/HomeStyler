import React from "react";
import { Input, InputGroup, InputRightElement, Icon } from "@chakra-ui/react";
import { Colors } from "../../constants/colors";

function CustomInputFeild(props) {
  const { text, icon, onClickHandler, type,ivalue,onChangeHandler } = props;
  return (
    <InputGroup display={"flex"} justifyContent={"space-between"}>
      <InputRightElement mr={4}>
        <Icon
          cursor={onClickHandler ? "pointer" : "default"}
          as={icon}
          color={Colors.GREY}
          fontSize={20}
          onClick={onClickHandler ? onClickHandler : null}
        />
      </InputRightElement>
      <Input
        type={type ? type : text}
        color={Colors.BLACK}
        p={3}
        w={270}
        value={ivalue}
        onChange={onChangeHandler}
        bg={Colors.lightGrey}
        _placeholder={{ color: Colors.GREY }}
        placeholder={text}
        pl={3}
      />
    </InputGroup>
  );
}

export default CustomInputFeild;