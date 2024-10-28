import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import { Box, Center } from "@chakra-ui/react";
import { Colors } from "../../constants/colors";
import Footer from "./Footer";
import TopHeader from "./TopHeader";

function ClientLayout() {
  return (
    <>
      <Box
        bg={Colors.BODYLIGHT}
        _dark={{
          bg: Colors.DASHBOARDTHEME,
        }}
      >
        <TopHeader/>
        <Navbar />
        <Box 
        p={4} 
        minH="100vh"
        >
          <Outlet />
        </Box>
        <Footer />
      </Box>
    </>
  );
}

export default ClientLayout;
