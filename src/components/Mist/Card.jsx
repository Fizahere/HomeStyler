import React from "react";
import {
  Card,
  Image,
  Stack,
  CardBody,
  Heading,
  Text,
  Button,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { UnAuthenticatedRoutesNames } from "../../utilities/util.constant";
import { Colors } from "../../constants/colors";

function CustomCard({ singleCardData }) {
  const { name } = singleCardData;
  const { image_thumbnail_path } = singleCardData;
  const { network } = singleCardData;
  const { status } = singleCardData;
  const { id } = singleCardData;
  const { start_date } = singleCardData;
  const { end_date } = singleCardData;
  const { country } = singleCardData;

  const navigate = useNavigate();
  return (
    <>
      <Card maxW={{base:'md',md:'sm'}}>
        <CardBody>
          <Image
            src={image_thumbnail_path}
            alt={image_thumbnail_path}
            borderRadius="md"
            width={"100%"}
            height={{base:'400',md:'300'}}
          />
          <Stack mt="6" spacing={{base:'1',md:'3'}}>
            <Heading size={{base:'sm',md:'md'}} h={'35px'}>{name}</Heading>
            <Text fontSize={{base:'12px',md:'1xl'}}>{network}</Text>
            <Text color="blue.600" fontSize={{base:'12px',md:'1xl'}}>
              {status}
            </Text>
            <Button
            mt={{base:'1',md:'0'}}
            bg={Colors.THEME}
            color={Colors.WHITE}
            _hover={{
              color:''
            }}
            fontSize={{base:'12px',md:'1xl'}}
              onClick={() => {
                navigate(UnAuthenticatedRoutesNames.DETAIL.replace(":id", id));
              }}
            >
              Show more
            </Button>
          </Stack>
        </CardBody>
      </Card>
    </>
  );
}

export default CustomCard;
