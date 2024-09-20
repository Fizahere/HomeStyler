import React, { useEffect } from "react";
import { useToast } from "@chakra-ui/react";
import { UnAuthenticatedRoutesNames } from "../utilities/util.constant";

const SignOut = () => {
  const toast = useToast();

  const handleSignOut = async () => {
    try {
      localStorage.removeItem("user");
      location.assign(UnAuthenticatedRoutesNames.HOME);
      toast({
        title: "Signed Out",
        description: "User signed out successfully!",
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "top-right",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: error.message,
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top-right",
      });
    }
  };

  useEffect(() => {
    handleSignOut();
  }, [toast]);

  return null;
};

export default SignOut;
