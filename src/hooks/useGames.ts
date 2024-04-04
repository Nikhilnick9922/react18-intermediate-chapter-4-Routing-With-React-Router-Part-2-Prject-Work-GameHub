import { useInfiniteQuery } from "@tanstack/react-query";
import ms from "ms";
import APIClient, { FetchResponse } from "../services/api-client";
import useGameQueryStore from "../store";
import { Game } from "../entities/Game";

const apiClient = new APIClient<Game>("/games");

const useGames = () => {
  const gameQuery = useGameQueryStore((s) => s.gameQuery);
  return useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getall({
        params: {
          genres: gameQuery.genreId,
          parents_platforms: gameQuery.platformId,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam,
        },
      }),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    staleTime: ms("24h"), // 24 hours here
  });
};
 

export default useGames;

 

//  here we want to extract game interface  but we are not going to select and move code 
// this will create a lot of break in 
// so right click on game -> refactor -> move to a new file
//  so it will move this to new file name Game in hooks , and there is no break ins 

//  now create new file src -> entities -> Game.ts

// we should do the same with other entity interface

// find genre Inteface and move it to entities 

// and do same for platform interface  , there platform in node_modules don't select that obivoisly


// for comfirmation that we have not brake any changes build 