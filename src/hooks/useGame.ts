import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { Game } from "./useGames";



const apiClient = new APIClient<Game>('/games');


const useGame = (slug : string)=> useQuery({
    queryKey : ['games', slug],         // slug for dynamic, everytime slug changes react-query fetch game from backend
    queryFn : () => apiClient.get(slug)   // dont forget arrow function syntax
})



export default useGame;


//  and we use useQuery to get the games from the backend

//  here we need api client another method for getting single game so 
// api-cleint.ts and create get method


//  now create apiclient instance and endpint should be `/games'
//  we are kind of haping code smell here , because in this hook we are using `Game` interface 
// that defined in another hook.
// it's little bit ugly , we don't want one hook to be dependent on another hook for getting 
// interface  , but we are not getting distracted at this point , 
// we will fix this issue next lession

//  and now pass to queryFn

//  now back to GameDetailPage.tsx