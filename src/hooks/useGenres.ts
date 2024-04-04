import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import APIClient from "../services/api-client";


import ms from 'ms';
import { Genre } from "../entities/Genre";
// this library is written in pure js , and does not required type declaration 
//required for typescript

 const apiClient = new APIClient<Genre>('/genres')   
 

 const useGenres = () =>  useQuery({
  queryKey : ['genres'],  
   queryFn : apiClient.getall ,    
  staleTime : ms('24h') , // 24 hours
  initialData :  genres 
 
})

export default useGenres;  
 


//  moved the genre interface to entities folder