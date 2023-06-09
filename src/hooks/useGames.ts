import useData from "./useData";
import { GameQuery } from "../App";

export interface PlatForm {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: PlatForm }[];
  metacritic: number;
  rating_top: number;
}

const useGames = (gameQuery: GameQuery) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: gameQuery.genre?.id,
        platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder,
        search: gameQuery.search,
      },
    },
    [
      gameQuery.genre?.id,
      gameQuery.platform?.id,
      gameQuery.sortOrder,
      gameQuery.search,
    ]
  );

export default useGames;
