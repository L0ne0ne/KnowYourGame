import { useInfiniteQuery } from "@tanstack/react-query";
import ms from "ms";
import APIClient, { FetchResponse, Platform } from "../services/api-client";
import useGameQueryStore from "../store";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const apiClient = new APIClient<Game>("/games");

const useGames = () => {
  const gameQuery = useGameQueryStore((s) => s.gameQuery);
  return useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genreId,
          platforms: gameQuery.platformId,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam,
        },
      }),
    getNextPageParam: (lastPage, allPage) => {
      return lastPage.next ? allPage.length + 1 : undefined;
    },
    staleTime: ms("10m"), // 10s
  });
};
export default useGames;

/*
useData<Game>(
  "/games",
  {
    params: {
      genres: gameQuery.genre?.id,
      platforms: gameQuery.platform?.id,
      ordering: gameQuery.sortOrder,
      search: gameQuery.searchText,
    },
  },
  [gameQuery]
);

return apiClient
.get<FetchResponse<Game>>("/games", {
  params: {
    genres: gameQuery.genre?.id,
    parent_platforms: gameQuery.platform?.id,
    ordering: gameQuery.sortOrder,
    search: gameQuery.searchText,
  },
})
.then((res) => res.data);*/
