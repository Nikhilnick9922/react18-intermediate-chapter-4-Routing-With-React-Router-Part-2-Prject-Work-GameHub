import { useParams } from "react-router-dom"
import useGame from "../hooks/useGame";
import { Heading, Spinner, Text } from "@chakra-ui/react";

const GameDetailPage = () => {
    const {slug} = useParams();
    // useGame(slug || "")  but if there is no slug , we shouldn't get to this line
  const {data: game, isLoading ,error} =  useGame(slug!);

  if(isLoading) return  <Spinner/>   // could also create a skeleton , but happy with spinner for now 
  
  if (error || !game) throw error;



  
  return (
    <>
    <Heading>{game.name}</Heading>
    <Text>{game.description_raw}</Text>
    </>
  )
}

export default GameDetailPage



//   first we need slug 
// then next we need hook to fetch the game from backend
//  hooks -> useGame.ts


// here we call useGame and pass slug
// this component  is rendered only if slug parameter in the url or else we will have 
// invalid route
//  so lets got to routes.tsx 

// we gonna use typeScirpt tirck that slug! , means that this constantt will never be null
// now we call this hook and grab 3 propperties 
//  before going any furhter , let's test our implimentation
// if we remove slug from the url then for '/games/' error page should kick in 

//  now we will do our usual stuff , if querry is loading we will do spinner stuff
// if there is error we want to throw that error , so some errorPage will catch that and we
// want to log it . let's not worry about it.
// other wise no errror , then render some details

//  error for undefined game , so make error || !game then thorw error . with this 
// we don't have to use optional chaining milliion times in this markup
//  added headin and text ,
// but game.description_raw does not exist so 
// useGames.tex -> game Interface

// now test our implimentation
//  go to homepage -> click on game title
//  working , but need some padding aroudn the content
//  go to layout.tsx -> put Outlet inside the Box and add padding =5 
// so we don't have to use padding millions of times.