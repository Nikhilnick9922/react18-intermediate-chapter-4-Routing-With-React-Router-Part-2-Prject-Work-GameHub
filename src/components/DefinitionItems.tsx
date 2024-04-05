import { Box, Heading } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface Props {
    term : string;
    children : ReactNode | ReactNode[];
}

const DefinitionItems = ({term ,children} : Props) => {
  return (
    <Box marginY={ 5}>
        {/* <dt></dt> */}
        <Heading as='dt' fontSize={'md'} color={'gray.600'}>
            {term}
        </Heading>
        <dd>{children}</dd>
    </Box>
  )
}

export default DefinitionItems


//  we gonna use html elements to define game attribuites which dd & dt
//  define props - term , children : Reactnode | ReactNode[] so that we can pass multiple itmes here

//  in this we need Box so that we can apply the verticle margin , so that we can seperate  multiple 
// definition items 

// then we use dt and dd , but in pllace of dt we have use heading because of stying and 
// rednered it as dt using `as`


//  now to test the , go to gameDetialsPage.tsx