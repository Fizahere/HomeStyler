import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import { Box } from '@chakra-ui/react'
import { Colors } from '../../constants/colors'

function ClientLayout() {
  return (
    <>
    <Box bg={Colors.BODYLIGHT}>
      <Navbar/>
      <Outlet/>
    </Box>
    </>
  )
}

export default ClientLayout
