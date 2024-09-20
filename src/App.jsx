import React, { useState, useEffect } from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import AuthenticatedRoutes from "./routes/AuthenticatedRoutes";
import { BrowserRouter } from "react-router-dom";
import UnAuthenticatedRoutes from "./routes/UnAuthenticatedRoutes";

const theme = extendTheme({
  components: {},
});

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
