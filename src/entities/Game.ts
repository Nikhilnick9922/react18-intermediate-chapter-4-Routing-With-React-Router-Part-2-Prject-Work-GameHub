import { Genre } from "./Genre";
import { Platform } from "./Platform";
import { Publisher } from "./Publisher";


 export default interface Game {
  id: number;
  name: string;
  slug: string;
  genres : Genre[];  // here
  publishers  : Publisher[] // here 
  description_raw: string;
  background_image: string;
  parent_platforms: { platform: Platform; }[];
  metacritic: number;
  rating_top: number;
}


//   right click and find all refrences 
//   so impact is 5 which is minimal , so 
// use default export and fix all files one by one
// with default export we don't need extra curly braches in imports