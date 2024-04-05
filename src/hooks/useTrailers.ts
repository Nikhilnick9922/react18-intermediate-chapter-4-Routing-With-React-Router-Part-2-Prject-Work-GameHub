import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { Trailer } from "../entities/Trailer";


// const apiClient = new APIClient <Trailer>('/games/id')


const useTrailers = (gameId : number)=>  {
    
    const apiClient = new APIClient <Trailer>(`/games/${gameId}/movies`)

  return  useQuery({
    queryKey : ['trailers', gameId],
    queryFn : apiClient.getall
})
}

export default useTrailers;


//  we need game_id as parameter and we will use useQuery  to get the trailer and 
// cache them

//  we don't have interface for working with trailer object 
// so go to entity -> Trailer.ts add interface and comeback

//  in apiClinet endpoint we need id in address 'games/id' , but id is present in useTrailer function 
// so we have to move the line insside there , and also have to return the usequery 

//  for queryfn we use getAll becuase we get  multiple objects

//  we are done with this file and now go to GameTrailer.tsx and use this hook