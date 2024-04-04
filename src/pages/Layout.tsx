import { Outlet } from 'react-router-dom'
import NavBar from '../components/NavBar'
import { Box } from '@chakra-ui/react'

const Layout = () => {
  return (
    <>
    <NavBar/>
    <Box padding={ 5}>
       <Outlet/>
    </Box>
    </>
  )
}

export default Layout

 

//  wrap outlet inside box and add padding