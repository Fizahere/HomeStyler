import React from "react";
import notfound from "../assets/images/notfound.png";
import { Box, Image, Text } from "@chakra-ui/react";

function NotFound() {
  return (
    <>
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        height={"100vh"}
      >
        <Box>
          <Text
            fontSize={{ base: "25px", md: "30px", }}
            fontFamily={"monospace"}
            textAlign={"center"}
            borderBottom={'1px solid grey'}
          >
            404 Not Found!
          </Text>
          <Image
            src={notfound}
            height={{
              base: "200",
              md: "400",
            }}
            maxWidth={"100%"}
          />
        </Box>
      </Box>
    </>
  );
}

export default NotFound;