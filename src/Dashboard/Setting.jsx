import React from "react";
import {
  Heading,
  Table,
  Tbody,
  Thead,
  Tr,
  Td,
  Th,
  useColorMode,
  TableCaption,
  Button,
  Switch,
Text
} from "@chakra-ui/react";
import { AuthenticatedRouteNames } from "../utilities/util.constant";
import { useNavigate } from "react-router-dom";

function Setting() {
  const { colorMode, toggleColorMode } = useColorMode();
  const navigate = useNavigate();
  return (
    <>
      <Heading size={"lg"}>Settings</Heading>
      <Table>
        <TableCaption color={"red"}>
          <Button
            width={121}
            _hover={{ bg: "transparent" }}
            bg={"transparent"}
            onClick={() => {
              if (confirm("are you sure you want to logout?")) {
                navigate(AuthenticatedRouteNames.LOGOUT);
              } else {
                navigate(AuthenticatedRouteNames.Dashboard);
              }
            }}
          >
            <Text color={'red'}>
              Logout from you account.
            </Text>
          </Button>
        </TableCaption>

        <Thead>
          <Tr>
            <Th> </Th>
            <Th> </Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Th>UserName</Th>
            <Td>Fizå</Td>
          </Tr>
          <Tr>
            <Th>Email Address</Th>
            <Td>fizabatool0278@gmail</Td>
          </Tr>
          <Tr>
            <Th>
              {colorMode === "light"
                ? "turn on day light"
                : "turn on night light"}
            </Th>
            <Td>
              <Switch onChange={toggleColorMode}></Switch>
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </>
  );
}

export default Setting;
