import React from "react";
import { Heading, Box, Image } from "@chakra-ui/react";
import notfound from "../assets/images/notfound.png";

function NotFound() {
  return (
    <>
      <Box
        display={"flex"}
        justifyContent={"center"}
        py={"60"}
        px={"20px"}
        flexDirection={{
          base: "column",
          md: "row",
        }}
      >
        <Heading>404 Not Found!</Heading>
        {/* <Image src={notfound} alt="Error 404" height={200} /> */}
      </Box>
    </>
  );
}

export default NotFound;
