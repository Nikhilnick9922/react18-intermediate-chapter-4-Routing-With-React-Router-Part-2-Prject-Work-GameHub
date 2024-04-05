import { Heading, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ExpandableText from "../components/ExpandableText";
import useGame from "../hooks/useGame";
import GameAttribuites from "../components/GameAttribuites";
import GameTrailer from "../components/GameTrailer";

const GameDetailPage = () => {
    const {slug} = useParams();
   const {data: game, isLoading ,error} =  useGame(slug!);

  if(isLoading) return  <Spinner/>    
  
  if (error || !game) throw error;



  
  return (
    <>
    <Heading>{game.name}</Heading>
     <ExpandableText>{game.description_raw}</ExpandableText>

  
    <GameAttribuites game={game} />
    <GameTrailer gameId={game.id} />
    </>
  )
}

export default GameDetailPage


//   we want to render the single trailer , even though we have multiple trailer at backend
//  so after running , we can see data propety in this we have - 2  key value , 480 and max
// so go to Trailer.ts and redefine the data interface 