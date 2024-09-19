import React from "react";
import { Box, Flex, Icon, SimpleGrid, Text } from "@chakra-ui/react";
import { TypeAnimation } from "react-type-animation";
import APP_ICONS from "../constants/icons";
import { Colors } from "../constants/colors";

function Services() {
  return (
    <>
      <Box mt={10}>
        <Flex
          flexDirection={{ base: "column", md: "row" }}
          justifyContent={"space-between"}
        >
          <Box mb={2} width={{base:"100%",lg:"50%"}}>
            <TypeAnimation
              sequence={[
                "WHAT KIND OF SERVICES WE PROVIDE TO OUR CLIENTS",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{
                fontSize: {base:"1rem",sm:"3rem"},
                fontWeight: "bold",
                display: "inline-block",
              }}
              repeat={1}
            />
          </Box>
          <Box width={{base:"100%",lg:"50%"}}>
            <SimpleGrid color={Colors.BLACK} p={0} columns={{ base: 1, sm: 2 }} spacing={4}>
              <Box
                display={"flex"}
                flexDirection={{base:"row",md:"column"}}
                alignItems={"center"}
                justifyContent={"center"}
                bg={Colors.WHITE}
                // height={{base:'160px',md:'200px'}}
                // width={}
                p={2}
                borderRadius={20}
              >
                <Icon fontSize={30} as={APP_ICONS.PENCILSCALE} fontWeight={"bold"} />
                <Text ml={{base:2,md:0}} mt={5} textAlign={"center"}>CUSTOM HOME DESIGN</Text>
              </Box>
              <Box
                display={"flex"}
                flexDirection={{base:"row",md:"column"}}
                alignItems={"center"}
                justifyContent={"center"}
                bg={Colors.WHITE}
                // height={'200px'}
                // width={210}
                p={5}
                borderRadius={20}
              >
                <Icon fontSize={30} as={APP_ICONS.HAMMER} />
                <Text mt={5} textAlign={"center"}>INTERIOR AND EXTERIOR DESIGN</Text>
              </Box>
              <Box
                display={"flex"}
                flexDirection={{base:"row",md:"column"}}
                alignItems={"center"}
                justifyContent={"center"}
                bg={Colors.WHITE}
                // height={'200px'}
                // width={210}
                p={5}
                borderRadius={20}
              >
                <Icon fontSize={30} as={APP_ICONS.COMPASS} />
                <Text mt={5} textAlign={"center"}>RENOVATION AND RESTORATION</Text>
              </Box>

              <Box
                display={"flex"}
                flexDirection={{base:"row",md:"column"}}
                alignItems={"center"}
                justifyContent={"center"}
                bg={Colors.WHITE}
                // height={'200px'}
                // width={210}
                p={5}
                borderRadius={20}
              >
                <Icon fontSize={30} as={APP_ICONS.BUILDINGS} />
                <Text mt={5} textAlign={"center"}>COMMERCIAL ARCHITECHTURE</Text>
              </Box>
            </SimpleGrid>
          </Box>
        </Flex>
      </Box>
    </>
  );
}

export default Services;

