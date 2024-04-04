import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import APIClient from "../services/api-client";
import ms from "ms";
import { Platform } from "../entities/Platform";
 
const apiClinet = new APIClient<Platform>('/platforms/lists/parents')  

 const usePlatforms = () =>  useQuery({
  queryKey : ['platforms'],
  queryFn :  apiClinet.getall,
   staleTime : ms('24h'),  // here
   initialData : platforms

}) ;

export default usePlatforms;


 