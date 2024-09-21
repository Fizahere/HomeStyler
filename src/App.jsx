import React, { useState, useEffect } from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import AuthenticatedRoutes from "./routes/AuthenticatedRoutes";
import { BrowserRouter } from "react-router-dom";
import UnAuthenticatedRoutes from "./routes/UnAuthenticatedRoutes";

const theme = extendTheme({
  colors: {
    cafeAuLait: {
      50: "#f6eae1",
      100: "#ead1b8",
      200: "#ddb88e",
      300: "#d09e65",
      400: "#c4853c",
      500: "#996633", 
      600: "#7a5229",
      700: "#5c3e1f",
      800: "#3d2914",
      900: "#1f150a",
    },
  },});

function App() {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : null;
  });
  useEffect(() => {
    const handleStorageChange = () => {
      const storedUser = localStorage.getItem('user');
      setUser(storedUser ? JSON.parse(storedUser) : null); 
    };
    window.addEventListener('storage', handleStorageChange);
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        {user ? <AuthenticatedRoutes /> : <UnAuthenticatedRoutes />}
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
