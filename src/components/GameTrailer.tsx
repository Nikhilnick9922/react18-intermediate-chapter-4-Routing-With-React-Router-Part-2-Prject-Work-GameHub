import useTrailers from "../hooks/useTrailers";



interface Props {
  gameId : number
}

const GameTrailer = ({gameId} : Props) => {
   const {data, error, isLoading }= useTrailers(gameId)
  //  console.log(data)
  if(isLoading) return null; 

  if (error) throw error;

  const first =  data?.results[0];
//   if( !first) return null;

//  return <video src={first.data[480]} poster={first.preview} />

return (first) ?  <video src={first.data[480]} poster={first.preview} controls /> : null

 

 
};

export default GameTrailer;



//  in this component first we need to fetch game trailers from backend
// so first we need to create the hook for that
//  hooks ->  useTrailers.ts


//  now GameId should be prop in this component
//  gameId that's all we need , we don't have to pass entire Game object

//  for now just console data  , so that we can find the shape of the data that we have talked about 
// so nwo to run this go to 'GameDetailsPage.tsx and pass gameId

//  so now if there isLoading we return null, and if there is  error we throw it so react router shoulld catches it


// if everything is ok , then we will render the video player
//  we don't want to repeat this `data?.results[0].data[480]` multiple times so put them in variable 
// we don't want to use optional chaninign multile times , so we check if first is falsy then return null , with that we don't have to repeat 
// optonal chainning 

//  we also have option to use ternary operator with `first`