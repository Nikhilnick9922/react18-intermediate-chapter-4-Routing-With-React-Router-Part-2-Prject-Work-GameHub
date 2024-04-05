import { Heading, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ExpandableText from "../components/ExpandableText";
import useGame from "../hooks/useGame";
import GameAttribuites from "../components/GameAttribuites";

const GameDetailPage = () => {
    const {slug} = useParams();
   const {data: game, isLoading ,error} =  useGame(slug!);

  if(isLoading) return  <Spinner/>    
  
  if (error || !game) throw error;



  
  return (
    <>
    <Heading>{game.name}</Heading>
     <ExpandableText>{game.description_raw}</ExpandableText>

   {/* <SimpleGrid columns={2} as="dl">
   <DefinitionItems term="Platforms">
  
      {game.parent_platforms?.map(({platform}) =><Text key={platform.id}>{ platform.name}</Text> )}
     </DefinitionItems>

    <DefinitionItems term="Metascore">
      <CriticScore score={game.metacritic} />
    </DefinitionItems>


    <DefinitionItems term="Genres">
        {game.genres.map(genre=> <Text key={ genre.id}>{genre.name}</Text>)}
    </DefinitionItems>


    <DefinitionItems term="Publishers">
      {game.publishers?.map(pubilsher=><Text key={pubilsher.id}>{pubilsher.name}</Text>)}
    </DefinitionItems>
   </SimpleGrid> */}
    <GameAttribuites game={game} />
    </>
  )
}

export default GameDetailPage



//   since p contain platofm then name like p.platform.name we destrucutre p to {platform}
// so that we can directly use platform.name

// and give key to text

//  now test it , looks good ,

// now need to repeat with other attributes

// di for scrutuc score , childre will be <CriticScore />

// now also add same for Genres
// we don't have genres , so go to Interface of Game and add in Game.ts


//  and finally we need another definition Items for publishers
// we don't have property so in Game.ts add that 
//  and now set name & key

//  and now we need to put this in 2 columns
//  we gonna use simple grid
// we gonna wrap all definationItem in simpleGrid
// in html definitionItem should render inside dl so here also do the same 
// with this we get same result as before , but html markup is far better

// now last we want to move this simpleGrid and all the component inside it to seperate
// component
//  components -> GameAttribuites.tsx
//  and move SimpleGrid to GameAttribuite.tsx

// 