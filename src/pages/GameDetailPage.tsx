import { GridItem, Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ExpandableText from "../components/ExpandableText";
import useGame from "../hooks/useGame";
import GameAttribuites from "../components/GameAttribuites";
import GameTrailer from "../components/GameTrailer";
import GameScreenshots from "../components/GameScreenshots";

const GameDetailPage = () => {
    const {slug} = useParams();
   const {data: game, isLoading ,error} =  useGame(slug!);

  if(isLoading) return  <Spinner/>    
  
  if (error || !game) throw error;



  
  return (
    <SimpleGrid columns={{base:1 , md: 2}} spacing={5}>
  
        <GridItem>
            <Heading>{game.name}</Heading>
            <ExpandableText>{game.description_raw}</ExpandableText>
            <GameAttribuites game={game} />


        </GridItem>

      <GridItem>
          <GameTrailer gameId={game.id} />
          <GameScreenshots gameId={game.id}/>
      </GridItem>    

  
 
    </SimpleGrid>
  )
}

export default GameDetailPage


 
//  instead of wrapping everything in fragment 
// we gonna wrap them in simplegrid

// for small devices we should have 1 column and medium devices we should have 2 columns

//  and here we need container for each columns , box or GridItem
// for first columns we  have Heading , text & attributes
// for second we have Trailer & screenshots
