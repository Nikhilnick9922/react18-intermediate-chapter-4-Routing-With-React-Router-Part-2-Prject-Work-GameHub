import { Image, SimpleGrid } from '@chakra-ui/react'
import useScreenshots from '../hooks/useScreenshots'


interface Props {
    gameId : number
}

const GameScreenshots = ({gameId}: Props) => {
    const {data, isLoading , error} = useScreenshots(gameId)
 
    if (isLoading) return null;
    if(error) throw error;

  return (
    <SimpleGrid columns={{base:1, md: 2}} spacing={ 2} >
        {data?.results.map (file=><Image key={file.id} src={file.image}/>)}
    </SimpleGrid>
  )
}

export default GameScreenshots


//  if everyting is ok then we return Simplegrid with 2 columns
//  coumns we use base 1 and medimum for 2 columns

//  in simplegrid ,  and map each file in data to Image component defined in the chakra

//  add some spacing = 2
