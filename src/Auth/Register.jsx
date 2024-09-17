import React, { useState } from "react";
import {
  FormControl,
  Input,
  FormLabel,
  Box,
  Button,
  Heading,
  Text,
  Spinner,
  Flex,
} from "@chakra-ui/react";
import { UnAuthenticatedRoutesNames } from "../utilities/util.constant";
import { Link } from "react-router-dom";
import { Colors } from "../constants/colors";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <Box
        bg="white"
        _dark={{
          bg: "#262626",
          color: Colors.WHITE,
        }}
        width={"100%"}
      >
        <Box
          width={"80"}
          py={"40"}
          margin={"0 auto"}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
        >
          <Heading mb={"5"} ml={"1"}>
            Sign Up
          </Heading>
          {/* <form onSubmit={handleSignUp}> */}
            <FormControl m={"2"}>
              <FormLabel>Email address</FormLabel>
              <Input
                border={"1px solid grey"}
                type="email"
                value={_email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>

            <FormControl m={"2"}>
              <FormLabel>Password</FormLabel>
              <Input
                border={"1px solid grey"}
                type="password"
                value={_password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>
            <Box color={"red"} m={"2"}>
              {_error ? <Box>{_error}</Box> : null}
            </Box>
            <Button
              backgroundColor={Colors.THEME}
              m={"2"}
              w={"320px"}
              type="submit"
              _hover={{ bg: "" }}
              color={Colors.WHITE}
              _dark={{
                color: Colors.Black,
              }}
            >
              signup
              {/* {loading ? <Spinner size="sm" /> : "Sign Up"} */}
            </Button>
          {/* </form> */}
          <Flex ml={"10px"}>
            <Text>Already have an account? </Text>
            <Link to={UnAuthenticatedRoutesNames.LOGIN}>
              <Text ml={"2"} color={Colors.PRIMARYBLUE}>
                Login
              </Text>
            </Link>
          </Flex>
        </Box>
      </Box>
    </>
  );
};

export default SignUp;
