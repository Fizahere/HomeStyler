import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import { Box } from '@chakra-ui/react'
import { Colors } from '../../constants/colors'
import Footer from './Footer'

function ClientLayout() {
  return (
    <>
      <Box
        bg={Colors.BODYLIGHT}
        _dark={{
          bg: Colors.DASHBOARDTHEME
        }}
      >
        <Navbar />
        <Outlet />
        <Footer/>
      </Box>
    </>
  )
}

export default ClientLayout
