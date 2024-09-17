import React, { useState } from "react";
import {
  Heading,
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Spinner,
  Flex,
  Text,
  Icon,
} from "@chakra-ui/react";
import { UnAuthenticatedRoutesNames } from "../utilities/util.constant";
import { Colors } from "../constants/colors";
import { Link } from "react-router-dom";
import APP_ICONS from "../constants/icons";

const SignIn = () => {
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
            Login
          </Heading>
          {/* <form onSubmit={handleSignIn}> */}
          <FormControl m={"2"}>
            <FormLabel>Email address</FormLabel>
            <Input
              border={"1px solid grey"}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>

          <FormControl m={"2"}>
            <FormLabel>Password</FormLabel>
            <Input
              border={"1px solid grey"}
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>
          {/* {error ||
              (_error && (
                <Box color={"red"} m={"2"}>
                  <Box>{error}</Box>
                </Box>
              ))} */}
          <Button
            backgroundColor={Colors.THEME}
            m={"2"}
            w={"320px"}
            fontSize={"0.9rem"}
            type="submit"
            _hover={{ bg: "" }}
            color={Colors.WHITE}
            _dark={{
              color: Colors.Black,
            }}
          >
            login
            {/* {loading ? <Spinner size="sm" /> : "Sign In"} */}
          </Button>
          {/* </form> */}
          <Box textAlign={"center"}>or</Box>

          <Flex mt={"3"} ml={"10px"}>
            <Text>Don't have an account? </Text>
            <Link to={UnAuthenticatedRoutesNames.REGISTER}>
              <Text ml={"2"} color={Colors.PRIMARYBLUE}>
                SignUp
              </Text>
            </Link>
          </Flex>
        </Box>
      </Box>
    </>
  );
};

export default SignIn;
