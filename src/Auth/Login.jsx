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
import APP_ICONS from "../constants/icons";
import { Colors } from "../constants/colors";
import CustomInputFeild from "../components/Mist/InputFeild";
import { Link } from "react-router-dom";
import { AuthenticatedRouteNames, UnAuthenticatedRoutesNames } from "../utilities/util.constant";

function SignIn() {
  const [isShowPassword, setShowPassword] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Updated regex patterns for validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Fill the fields!");
      return;
    }
    if (!emailRegex.test(email)) {
      setError("Invalid email format!");
      return;
    }
    if (!passwordRegex.test(password)) {
      setError("Password must be at least 8 characters long and include uppercase, lowercase, and a number.");
      return;
    }

    let user = {
      email: email,
      password: password,
    };

    setError("");
    localStorage.setItem("user", JSON.stringify(user));

    location.assign(AuthenticatedRouteNames.Dashboard);
  };

  return (
    <HStack
      spacing={0}
      position="relative"
      zIndex={1}
      height="100vh"
      alignItems="stretch"
      color={Colors.font}
      bg={Colors.BODYLIGHT}
      _dark={{
        bg: Colors.DASHBOARDTHEME,
      }}
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
          <form onSubmit={handleLogin}>
            <VStack spacing={5} w={300} py={8} px={4} bg={Colors.white}>
              <CustomInputFeild
                onChangeHandler={(e) => {
                  setEmail(e.target.value);
                  if (!emailRegex.test(e.target.value)) {
                    setError("Invalid email format!");
                  } else {
                    setError("");
                  }
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
                  if (!passwordRegex.test(e.target.value)) {
                    setError("Password must be at least 8 characters long and include uppercase, lowercase, and a number.");
                  } else {
                    setError("");
                  }
                }}
                icon={isShowPassword ? APP_ICONS.CLOSEDEYE : APP_ICONS.OPENEYE}
                type={isShowPassword ? "password" : "text"}
                onClickHandler={() => setShowPassword((prev) => !prev)}
              />
              <Text textAlign={"left"} mr={7} color={"red"}>
                {error && error}
              </Text>
              <Box>
                <Button
                  color={Colors.WHITE}
                  bg={Colors.THEME}
                  _hover={{ bg: Colors.THEME }}
                  w={270}
                  p={3}
                  borderRadius={8}
                  fontWeight={"bold"}
                  type="submit"
                  onClick={handleLogin}
                >
                  Login
                </Button>
                {/* <Text textAlign={"center"}>or</Text>
                <Button
                  w={270}
                  p={2}
                  borderRadius={18}
                  fontSize={"0.8rem"}
                  color={Colors.BLACK}
                  _hover={{ bg: Colors.BODYLIGHT }}
                  bg={Colors.WHITE}
                >
                  <Flex justifyContent={"center"} textAlign={"center"}>
                    <Icon
                      fontSize={"1.2rem"}
                      mr={"6px"}
                      as={APP_ICONS.GOOGLE}
                    />
                    <Box mt={"2px"}>Continue With Google</Box>
                  </Flex>
                </Button> */}
              </Box>
            </VStack>
          </form>
          <Link to={UnAuthenticatedRoutesNames.HOME}>
            <Flex mt={20}>
              <Icon as={APP_ICONS.LEFTARROW} mt={0.6} fontSize={20} />
              <Text ml={2}>Back</Text>
            </Flex>
          </Link>
        </Box>
      </Box>
      <Box
        width={{
          base: "0%",
          md: "60%",
        }}
        bgGradient="linear(to-b, gray.600, gray.100)"
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
  );
}

export default SignIn;
