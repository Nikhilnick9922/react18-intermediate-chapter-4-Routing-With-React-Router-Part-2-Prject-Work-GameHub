import { useQuery } from "@tanstack/react-query"
import APIClient from "../services/api-client"
import { Screenshot } from "../entities/Screenshot"




const useScreenshots = (gameId : number) =>{
    const apiCleint = new APIClient<Screenshot>(`/games/${gameId}/screenshots`)
    return    useQuery({
        queryKey : ['screenshots', gameId],
        queryFn :  apiCleint.getall
    })
}

export default useScreenshots;

//  we need here screenshot interface so entities => Screenshot.ts

//  this is almost identical to previous nothing new here

//  now lets test this , first components => GameScreenshots.tsx -> rafce