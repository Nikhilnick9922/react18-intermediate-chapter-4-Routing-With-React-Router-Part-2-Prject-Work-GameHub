import { Platform } from "../entities/Platform";


export interface Game {
  id: number;
  name: string;
  slug: string; // here
  description_raw: string; // here
  background_image: string;
  parent_platforms: { platform: Platform; }[];
  metacritic: number;
  rating_top: number;
}
