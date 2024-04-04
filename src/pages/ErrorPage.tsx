import { Box, Heading, Text } from '@chakra-ui/react'
import { isRouteErrorResponse, useRouteError } from 'react-router-dom'
import NavBar from '../components/NavBar'

const ErrorPage = () => {
     const error =   useRouteError()
  return (
     <>
     <NavBar/>  
    <Box padding={5}>
    <Heading>Ooops</Heading>
     <Text> {isRouteErrorResponse(error)? 'This page does not exist' : 'An unexpted Error occured'}</Text>
    </Box>
     </>
  )
}

export default ErrorPage



//  it's nice to differentiate between routes errors and application errors
// for that we call useRouteError ()
// if there is route error then we show - This page does not exist else other



//  we done with this page now go to routes files

//  added Navbar , Later , in this future we can always comeback and revisit this implimentation

//  now we have Navbar , only issue is text is so close to the screen
//  so lets place content area inside the box and give som padding