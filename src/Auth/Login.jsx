import React, { useState } from "react";
import {
  Box,
  Flex,
  HStack,
  Heading,
  Icon,
  VStack,
  Button,
  Text,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import APP_ICONS from "../constants/icons";
import { Colors } from "../constants/colors";
import CustomInputFeild from "../components/Mist/InputFeild";
import { UnAuthenticatedRoutesNames } from "../utilities/util.constant";

function SignIn() {
  const [isShowPassword, setShowPassword] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^\d{5,}$/;

  const handleLogin = () => {
    if(!email||!password){
      setError('fill the fields!')
      return
    }
    if (!emailRegex.test(email)) {
      setError("Invalid email!");
      return;
    }
    if (!passwordRegex.test(password)) {
      setError("use strong password!");
      return;
    }
    let user = {
      email: email,
      password: password,
    };
    setError("");
    localStorage.setItem("user", JSON.stringify(user));
    navigate("/");
  };

  return (
    <>
      <HStack
        spacing={0}
        position="relative"
        zIndex={1}
        height="100vh"
        alignItems="stretch"
        color={Colors.font}
      >
        <Box
          width={{
            base: "100%",
            md: "40%",
          }}
          _dark={{
            bg: Colors.DARKTHEME,
          }}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Box>
            <Box py={0} px={4}>
              <Heading
                color={Colors.BLACK}
                _dark={{ color: Colors.WHITE }}
                size={"lg"}
                fontWeight={"bold"}
              >
                Login
              </Heading>
            </Box>
            <VStack spacing={5} w={300} py={8} px={4} bg={Colors.white}>
              <CustomInputFeild
                onChangeHandler={(e) => {
                  setEmail(e.target.value);
                }}
                ivalue={email}
                text={"Email**"}
                icon={APP_ICONS.MAIL}
              />
              <CustomInputFeild
                text={"Password**"}
                ivalue={password}
                onChangeHandler={(e) => {
                  setPassword(e.target.value);
                }}
                icon={isShowPassword ? APP_ICONS.CLOSEDEYE : APP_ICONS.OPENEYE}
                type={isShowPassword ? "password" : "text"}
                onClickHandler={() =>
                  isShowPassword
                    ? setShowPassword(false)
                    : setShowPassword(true)
                }
              />
              <Text textAlign={'left'} mr={7} color={"red"}>
                {error && error}
              </Text>
              <Box>
                <Button
                  bgGradient="linear(to-r, gray.800, gray.100,gray.800)"
                  color={Colors.BLACK}
                  _hover={{ bg: Colors.THEMEBUTTON }}
                  w={270}
                  p={3}
                  borderRadius={8}
                  fontWeight={"bold"}
                  onClick={handleLogin}
                >
                  Login
                </Button>
                <Text textAlign={"center"}>or</Text>
                <Button
                  w={270}
                  p={2}
                  borderRadius={18}
                  fontSize={"0.8rem"}
                  bg={Colors.BODYLIGHT}
                >
                  <Flex justifyContent={"center"} textAlign={"center"}>
                    <Icon
                      fontSize={"1.2rem"}
                      mr={"6px"}
                      as={APP_ICONS.GOOGLE}
                    />
                    <Box mt={"2px"}>Continue With Google</Box>
                  </Flex>
                </Button>
                <Text display={'flex'} mt={2} ml={2}>Don't have an account? <Link to={UnAuthenticatedRoutesNames.SIGNUP}><Text color={Colors.PRIMARYBLUE} ml={2}>Sign up</Text></Link></Text>
              </Box>
            </VStack>
          </Box>
        </Box>
        <Box
          width={{
            base: "0%",
            md: "60%",
          }}
          bgGradient="linear(to-b, gray.800, gray.100)"
          display={{
            base: "none",
            md: "inline-flex",
          }}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Icon as={APP_ICONS.BUILDINGS} color={Colors.WHITE} fontSize={100} />
          <Text
            color={Colors.WHITE}
            mt={6}
            ml={1}
            fontSize={{ base: 25, md: 30 }}
            fontWeight="bold"
          >
            Home Styler
          </Text>
        </Box>
      </HStack>
    </>
  );
}

export default SignIn;