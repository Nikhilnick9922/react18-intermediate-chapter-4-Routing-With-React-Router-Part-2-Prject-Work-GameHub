import { SimpleGrid, Text } from '@chakra-ui/react'
import { Game } from '../entities/Game'
import CriticScore from './CriticScore'
import DefinitionItems from './DefinitionItems'

 
interface Props {
    game : Game
}

const GameAttribuites = ({game}: Props) => {
  return (
    <SimpleGrid columns={2} as="dl">
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
    </SimpleGrid>
  )
}

export default GameAttribuites


//  This component should take Game as Prop

//  and move entire SimpleGRid to here

// now this component encapsulte all game attribute and we can reuse this in other places
// in application

//  now go to GameDetailsPage.tsx