import React, { useEffect } from "react";
import { UnAuthenticatedRoutesNames } from "../utilities/util.constant";

const SignOut = () => {
  const handleSignOut = async () => {
    try {
      localStorage.removeItem("user");
      // alert("User signed out successfully!");
    } catch (error) {
      alert(error.message);
    }
  };
  useEffect(() => {
    if (confirm("are you sure?")) {
      handleSignOut();
    } else {
      return;
    }
    location.assign(`${UnAuthenticatedRoutesNames.HOME}`);
  }, []);
};

export default SignOut;
