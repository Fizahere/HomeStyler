// import React from "react";
// import {
//   Box,
//   Image,
//   Heading,
//   Text,
//   Button,
//   Flex,
//   Icon,
// } from "@chakra-ui/react";
// import { Colors } from "../constants/colors";
// import APP_ICONS from "../constants/icons";
// import Services from "./Services";
// import Gallery from "./Gallery";
// import { UnAuthenticatedRoutesNames } from "../utilities/util.constant";
// import { useNavigate } from "react-router-dom";

// function Home() {
//   const plantsCategories = {
//     indoor: "ELEGENT",
//     outdoor: "COZY",
//     flowering_shrubs: "CLASSIC",
//     herbs: "MINIMALIST",
//     succulents: "NEW ARRIVAL",
//     top_variety: "TOP",
//   };
//   const navigate=useNavigate()

//   return (
//     <Box pt={{base:2,md:10}} pb={0} px={{base:0,md:10}} overflow="hidden">
//       <Flex
//         justifyContent="space-between"
//         flexDirection={{ base: "column", sm: "row" }}
//       >
//         <Box>
//           <Heading
//             fontSize={{ base: "30px", sm: "35px", md: "70px" }}
//             fontWeight="bold"
//           >
//             WHERE DREAMS
//           </Heading>
//           <Text
//             fontSize={{ base: "40px", sm: "40px", md: "60px" }}
//             lineHeight={1}
//             fontWeight="bold"
//             color="gray.400"
//           >
//             TAKE SHAPE
//           </Text>
//           <Text fontSize={{ base: "14px", md: "20px" }} mt={4}>
//             Welcome to our world of architectural wonder, where dreams take
//             shape.
//           </Text>
//           <Text
//             fontSize={{ base: "14px", sm: "10px", md: "30px" }}
//             fontWeight="bold"
//             mt={2}
//           >
//             Call Us: +1 201 8577757
//           </Text>
//           <Flex
//             mt={10}
//             flexDirection={{ base: "row", sm: "column", md: "row" }}
//           >
//             <Button
//               bg={Colors.BLACK}
//               color={Colors.WHITE}
//               _dark={{
//                 bg: Colors.WHITE,
//                 color: Colors.BLACK,
//               }}
//               width={"150px"}
//               borderRadius={"40px"}
//               fontSize={"12px"}
//               _hover={{ color: "white" }}
//               onClick={() => navigate(UnAuthenticatedRoutesNames.SHOP)}
//             >
//               <Icon mr={2} as={APP_ICONS.RIGHTARROW} fontSize={"18px"} />
//               Explore
//             </Button>
//             <Button
//               bg={"transparent"}
//               textDecoration={"underline"}
//               _hover={{ bg: "transparent" }}
//               width={"150px"}
//               fontSize={{ base: "18px", sm: "12px", md: "18px" }}
//               onClick={() => navigate(UnAuthenticatedRoutesNames.ABOUT)}
//             >
//               More Details
//             </Button>
//           </Flex>
//           <Flex
//             justifyContent={"space-between"}
//             flexDirection={{ base: "column", lg: "row" }}
//             mt={8}
//             mr={5}
//           >
//             <Box
//               width={{ base: "310px", sm: "420px", md: "425px" }}
//               mb={{ base: 20, lg: 0 }}
//             >
//               <Flex flexWrap="wrap" mt={{base:0,sm:120,md:0}}>
//                 {Object.entries(plantsCategories).map(([key, value], index) => (
//                   <Button
//                     key={index}
//                     flex={{ sm: "calc(20% - 14px)", md: "calc(25% - 18px)" }}
//                     margin={2}
//                     width={"min-content"}
//                     height={"30px"}
//                     fontSize={{ base: "9px", md: "11px" }}
//                     border="1px solid gray"
//                     bg="transparent"
//                     color={"grey"}
//                     onClick={() => navigate(`/plant-palace/${key}`)}
//                   >
//                     {value}
//                   </Button>
//                 ))}
//               </Flex>
//             </Box>
//           </Flex>
//         </Box>
//         <Box>
//           <Box
//             position="relative"
//             left={{ base: 40, sm: 90, md: 10 }}
//             top={{ base: 10, sm: 0, md: -40 }}
//             height={{ base: "250px", sm: "350px", md: "700px" }}
//             width={{ base: "250px", sm: "300px", md: "600px" }}
//             bg={Colors.THEME}
//             display={{base:'none',lg:'block'}}
//             borderRadius={{ base: "50% 0% 0% 50%", md: "50% 00% 00% 50%" }}
//             overflow="hidden"
//           ></Box>
//           <Image
//             src={mainimage}
//             position="absolute"
//             top={{ base: 500, sm: 240, md: 230 }}
//             left={{ base: 18, sm: 40, md: 200, lg: 550,}}
//             height={{
//               base: "170px",
//               sm: "250px",
//               md: "350px",
//               lg: "350px",
//             }}
//             objectFit="cover"
//             zIndex={2}
//             overflow="hidden"
//           />
//         </Box>
//       </Flex>

//       <Gallery/>
//       <Services/>
//     </Box>
//   );
// }

// export default Home;

import React from "react";
import {
  Box,
  Flex,
  Heading,
  Image,
  Button,
  Text,
  useColorMode,
  Icon,
} from "@chakra-ui/react";
// import mainImage from "../assets/images/mainImage.png";
// import mainText from "../assets/images/mainText.png";
// import mainImage2 from "../assets/images/mainImage2.png";
// import mainImage3 from "../assets/images/mainImage3.jpg";
// import { Colors } from "../assets/constants/colors";
// import { APP } from "../assets/constants/icons";
import { useNavigate } from "react-router-dom";
import APP_ICONS from "../constants/icons";
import { Colors } from "../constants/colors";
import mainimage from "../assets/images/mainimage.png";

const Home = () => {
  const categories = {
    elegent: "ELEGENT",
    cozy: "COZY",
    classic: "CLASSIC",
    minimalist: "MINIMALIST",
    new_arrival: "NEW ARRIVAL",
    top_variety: "TOP",
  };

  const navigate = useNavigate();
  return (
    <>
      <Box px={{ base: 2, lg: 10 }} py={{ base: 10, md: 20 }}>
        <Flex flexDirection={{ base: "column", md: "row" }}>
          <Box>
            <Heading
              fontSize={{ base: "30px", sm: "20px", md: "40px", lg: "50px" }}
              fontWeight={{ base: "500", sm: "700", md: "600" }}
              lineHeight={1.1}
              letterSpacing={"2px"}
            >
              HOME STYLER,
              <Box display={"flex"}>
                <Text>WHERE DREAMS</Text>
              </Box>
              TAKE SHAPE
            </Heading>
            <Text
              fontSize={{ sm: "10px", md: "20px" }}
              py={6}
              px={{ base: 0, md: 2 }}
              color={Colors.GREY}
            >
              Welcome to our world of architectural wonder, where dreams take
              shape.
            </Text>
            <Flex flexDirection={{ base: "row", sm: "column", md: "row" }}>
              <Button
                bg={Colors.BLACK}
                color={Colors.WHITE}
                _dark={{
                  bg: Colors.WHITE,
                  color: Colors.BLACK,
                }}
                width={"150px"}
                borderRadius={"40px"}
                fontSize={"12px"}
                _hover={{ color: "white" }}
                onClick={() => navigate("/plant-palace/explore-plants")}
              >
                <Icon mr={2} as={APP_ICONS.RIGHTARROW} fontSize={"18px"} />
                Go To Shop
              </Button>
              <Button
                bg={"transparent"}
                textDecoration={"underline"}
                _hover={{ bg: "transparent" }}
                width={"150px"}
                fontSize={{ base: "18px", sm: "12px", md: "18px" }}
                onClick={() => navigate("/plant-palace/about-us")}
              >
                More Details
              </Button>
            </Flex>
          </Box>
          <Image
          my={{base:6,md:0}}
            src={mainimage}
            width={'auto'}
            height={{ base: "250px", sm: "250px", md: "300px", lg: "350px" }}
          />
        </Flex>
        <Flex
          justifyContent={"space-between"}
          flexDirection={{ base: "column", lg: "row" }}
        >
          <Box
            width={{ base: "310px", sm: "420px", md: "425px" }}
            mb={{ base: 20, lg: 0 }}
          >
            <Flex flexWrap="wrap">
              {Object.entries(categories).map(([key, value], index) => (
                <Button
                  key={index}
                  flex={{ sm: "calc(20% - 14px)", md: "calc(25% - 18px)" }}
                  margin={2}
                  width={"min-content"}
                  height={"30px"}
                  fontSize={{ base: "9px", md: "11px" }}
                  border="1px solid gray"
                  bg="transparent"
                  color={Colors.GREY}
                  onClick={() => navigate(`/plant-palace/${key}`)}
                >
                  {value}
                </Button>
              ))}
            </Flex>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default Home;
