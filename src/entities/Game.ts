import { Genre } from "./Genre";
import { Platform } from "./Platform";
import { Publisher } from "./Publisher";


 export interface Game {
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


 //  here we added Genres properties which is contain array of Genre object

//  back to GameDetailsPage.tsx


// this can be array of publisheers , we don't  have interface for that so create one in 
// entititeys -> publisher.ts
//  and then add publisher [ ] array here 

// back to GameDetailPage.tsx
