import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import Game from "../entities/Game";
 


const apiClient = new APIClient<Game>('/games');


const useGame = (slug : string)=> useQuery({
    queryKey : ['games', slug],         
    queryFn : () => apiClient.get(slug)  
})



export default useGame;


 // here Game is interface we are trying to access here which is from another 
 // hook which is ugly 

//   create entity folder and move all thie entity `interfaces` like game , platfrom , genre there

//  go to useGames.ts