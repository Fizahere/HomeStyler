import React from "react";
import {
  Card,
  Image,
  CardBody,
  Text,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { Colors } from "../../constants/colors";

function GalleryCard(props) {
 
const {cardData}=props

  return (
    <>
      <Card
        boxShadow={"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" }
        _dark={{ bg: "transparent" }}
        maxW={{ base: "xs", md: "xs" }}
      >
        <CardBody
        p={0}
        >
          <Image
            src={cardData.image}
            alt={"image_thumbnail_path"}
            borderRadius="md"
            width={"100%"}
            height={{ base: "250px", md: "250px" }}
            position={'relative'}
          />
    <Text 
    position={'absolute'} 
    top={210}
     left={4}
     color={Colors.WHITE}
     sx={{
        textShadow: '2px 2px 0px rgba(0, 0, 0, 0.8)', 
      }}
        p={2}
     boxShadow={'md'}
     fontWeight={'500'}
    >{cardData.name}</Text>
        </CardBody>
      </Card>
    </>
  );
}

export default GalleryCard;