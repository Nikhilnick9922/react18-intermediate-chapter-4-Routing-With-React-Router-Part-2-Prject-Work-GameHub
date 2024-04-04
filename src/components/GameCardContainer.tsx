import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <Box
    _hover={{
      transform : 'scale(1.03)',
      transition : 'transform .15s ease-in'
    }}
    borderRadius={10} overflow="hidden">
      {children}
    </Box>
  );
};

export default GameCardContainer;



// paste that in box
// working but now let's add transition 


//  so now let's go to GameDetailsPage.tsx and fetch the page with details