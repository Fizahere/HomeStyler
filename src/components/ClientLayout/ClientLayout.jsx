import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import { Box } from '@chakra-ui/react'

function ClientLayout() {
  return (
    <>
    <Box  bg="gray.100">
      <Navbar/>
      <Outlet/>
    </Box>
    </>
  )
}

export default ClientLayout
