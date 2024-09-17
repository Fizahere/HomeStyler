import React, { useState } from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import AuthenticatedRoutes from "./routes/AuthenticatedRoutes";
import { BrowserRouter } from "react-router-dom";
import UnAuthenticatedRoutes from "./routes/UnAuthenticatedRoutes";

const theme = extendTheme({
  components: {},
});

function App() {
  const [user,setUser] = useState(true);

  return (
    <ChakraProvider theme={theme}>
      <>
        <BrowserRouter>
        {/* <AuthenticatedRoutes /> */}
<UnAuthenticatedRoutes/>
          {/* {user ? <AuthenticatedRoutes /> : <UnAuthenticatedRoutes />} */}
        </BrowserRouter>
      </>
    </ChakraProvider>
  );
}

export default App;
