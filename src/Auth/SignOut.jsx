// import React, { useEffect } from "react";
// import { auth } from "../config/firebaseConfig";
// import { signOut } from "firebase/auth";
// import { UnAuthenticatedRoutesNames } from "../utilities/util.constant";

// const SignOut = () => {
//   const handleSignOut = async () => {
//     try {
//       await signOut(auth);
//       localStorage.removeItem("user");
//       // alert("User signed out successfully!");
//     } catch (error) {
//       alert(error.message);
//     }
//   };
//   useEffect(() => {
//     if (confirm("are you sure?")) {
//       handleSignOut();
//     } else {
//       return;
//     }
//     location.assign(`${UnAuthenticatedRoutesNames.HOME}`);
//   }, []);
// };

// export default SignOut;
