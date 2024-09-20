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
          <Box mb={2} width={{ base: "100%", lg: "50%" }}>
            <TypeAnimation
              sequence={[
                "WHAT KIND OF SERVICES WE PROVIDE TO OUR CLIENTS",
                1000,
              ]}
              speed={50}
              style={{
                fontSize: '3rem',
                fontWeight: "bold",
                display: "inline-block",
              }}
              repeat={1}
            />
          </Box>
          <Box width={{ base: "100%", lg: "40%" }}>
            <SimpleGrid color={Colors.BLACK} p={0} columns={{ base: 1, sm: 2 }} spacing={4}>
              <Box
                display={"flex"}
                flexDirection={{ base: "column", md: "column" }}
                alignItems={"center"}
                justifyContent={"center"}
                bg={Colors.WHITE}
                p={{ base: 4, md: 5 }}
                borderRadius={20}
              >
                <Icon color={'#ff9933'} fontSize={30} as={APP_ICONS.PENCILSCALE} fontWeight={"bold"} />
                <Text as="span" color={Colors.GREY} mt={2} textAlign={"center"}>
                  CUSTOM HOME DESIGN
                </Text>
              </Box>
              <Box
                display={"flex"}
                flexDirection={{ base: "column", md: "column" }}
                alignItems={"center"}
                justifyContent={"center"}
                bg={Colors.WHITE}
                p={{ base: 4, md: 5 }}
                borderRadius={20}
              >
                <Icon color={'#33ccff'} fontSize={30} as={APP_ICONS.HAMMER} />
                <Text as="span" color={Colors.GREY} mt={2} textAlign={"center"}>
                  INTERIOR AND EXTERIOR DESIGN
                </Text>
              </Box>
              <Box
                display={"flex"}
                flexDirection={{ base: "column", md: "column" }}
                alignItems={"center"}
                justifyContent={"center"}
                bg={Colors.WHITE}
                p={{ base: 4, md: 5 }}
                borderRadius={20}
              >
                <Icon color={'#b3b3ff'} fontSize={30} as={APP_ICONS.COMPASS} />
                <Text as="span" color={Colors.GREY} mt={2} textAlign={"center"}>
                  RENOVATION AND RESTORATION
                </Text>
              </Box>
              <Box
                display={"flex"}
                flexDirection={{ base: "column", md: "column" }}
                alignItems={"center"}
                justifyContent={"center"}
                bg={Colors.WHITE}
                p={{ base: 4, md: 5 }}
                borderRadius={20}
              >
                <Icon color={'#ff80bf'} fontSize={30} as={APP_ICONS.BUILDINGS} />
                <Text as="span" color={Colors.GREY} mt={2} textAlign={"center"}>
                  COMMERCIAL ARCHITECTURE
                </Text>
              </Box>
            </SimpleGrid>
          </Box>
        </Flex>
      </Box>
    </>
  );
}

export default Services;
