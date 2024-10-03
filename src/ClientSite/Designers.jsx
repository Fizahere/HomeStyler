import React, { useState } from "react";
import {
  Card,
  CardBody,
  Heading,
  SimpleGrid,
  Text,
  Image,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Flex,
  Box,
  Icon,
  Center,
} from "@chakra-ui/react";
import { Colors } from "../constants/colors";
import data from "../data/designers-data.json";
import { designersImages } from "../constants/images";
import APP_ICONS from "../constants/icons";

function Designers() {
  const designers = data.homeStyler.designers;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedDesigner, setSelectedDesigner] = useState(null);

  const handleCardClick = (designer) => {
    setSelectedDesigner(designer);
    onOpen();
  };

  return (
    <>
      <Heading borderBottom={"1px solid grey"} fontSize={30} my={8}>
        Meet Our Designers,
        <br /> Take Expert Advice for Your Interior.
      </Heading>
      <Center>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={6}>
          {designers.map((singleData) => (
            <Card
              cursor={"pointer"}
              onClick={() => handleCardClick(singleData)}
              key={singleData.id}
              bg={"transparent"}
              _dark={{ bg: "transparent" }}
              maxW={{ base: "xs", md: "xs" }}
            >
              <CardBody bg={"transparent"} p={0}>
                <Image
                  src={designersImages[singleData.profileImage]}
                  alt={singleData.name}
                  borderRadius="md"
                  border={"1px solid blue"}
                  width={"100%"}
                  height={{ base: "250px", md: "250px" }}
                  objectFit="cover"
                />
                <Text
                  fontSize={15}
                  color={Colors.BLACK}
                  _dark={{ color: Colors.WHITE }}
                  m={2}
                  fontWeight={"500"}
                >
                  {singleData.name}
                </Text>
                <Text
                  fontSize={12}
                  color={Colors.BLACK}
                  _dark={{ color: Colors.WHITE }}
                  p={2}
                  fontWeight={"500"}
                >
                  {singleData.bio}
                </Text>
              </CardBody>
            </Card>
          ))}
        </SimpleGrid>
      </Center>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{selectedDesigner?.name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Image
              src={designersImages[selectedDesigner?.profileImage]}
              alt={selectedDesigner?.name}
              borderRadius="md"
              width={"100%"}
              objectFit="cover"
            />
            <Text fontSize={16} my={2}>
              {selectedDesigner?.bio}
            </Text>
            <Flex justifyContent={"space-between"}>
              <Text>
                <b>experience:</b> {selectedDesigner?.experience}yrs
              </Text>
              <Box>
                {[...Array(5)].map((_, index) => (
                  <Icon
                    key={index}
                    as={APP_ICONS.FIILEDSTAR}
                    color={"#ffd11a"}
                  />
                ))}
              </Box>
            </Flex>
            <Text mt={1}>
              <b>email:</b> {selectedDesigner?.contact?.email}
            </Text>
            <Text mt={1}>
              <b>phone:</b> {selectedDesigner?.contact?.phone}
            </Text>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Designers;
