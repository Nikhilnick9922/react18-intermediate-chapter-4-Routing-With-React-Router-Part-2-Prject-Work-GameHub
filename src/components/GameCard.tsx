import { Card, CardBody, Heading, HStack, Image } from '@chakra-ui/react'
import { Game } from '../hooks/useGames'
import getCroppedImageUrl from '../services/image-url'
import CriticScore from './CriticScore'
import Emoji from './Emoji'
import PlatformIconList from './PlatformIconList'
import { Link } from 'react-router-dom'

interface Props {
  game: Game
}

const GameCard = ({ game }: Props) => {
  return (
    <Card 
    // _hover={{
    //   transform : 'scale(1.03)'
    // }}
    >
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <HStack justifyContent='space-between' marginBottom={3}>
          <PlatformIconList platforms={game.parent_platforms?.map(p => p.platform)} />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize='2xl'>
          <Link to={'/games/' + game.slug}>{game.name}</Link>
          <Emoji rating={game.rating_top}/></Heading>
      </CardBody>
    </Card>
  )
}

export default GameCard


//  and here we add Link(RRD) to gameDetailPage , so we wrapping game.name with Link component
//  here we don't have access to game.slug so  go to useGames -> game Interface , or use cmd + T & look for Game + interface symbol and go there

// test the implimentation at this point 
// and we can see slug in address bar , that perfect

//   now let's add hover affect to our gamecart
//  so go to GameCart.tsx 


//  here card _hover in Card 
// now we have hover effect the zoom effect applied inside the card  not on the card itself
//  so now `move` this porperty to GameCardContainer.tsx
