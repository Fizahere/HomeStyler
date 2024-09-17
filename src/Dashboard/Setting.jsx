import React from 'react'
import {
  Heading,
  Table,
  Tbody,
  Thead,
  Tr, Td, Th,
  useColorMode,
  TableCaption,
  Link,
  Switch,
} from '@chakra-ui/react'

function Setting() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Heading size={'lg'}>Settings</Heading>
      <Table>
        <TableCaption color={'red'} mb={'-2rem'}>
          <Link to={''}>
            Delete Your Account
          </Link>
        </TableCaption>
        <TableCaption color={'red'}>
          <Link to={''}>
            Logout From Your Account
          </Link>
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
            <Th>{colorMode === 'light' ? 'turn on day light' : 'turn on night light'}</Th>
            <Td>
              <Switch onChange={toggleColorMode}>
              </Switch>
            </Td>
          </Tr>
        </Tbody>

      </Table>

    </>
  )
}

export default Setting