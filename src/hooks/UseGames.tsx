import { GameQuery } from "../App";
import UseData from "./UseData";

export interface Platform {
    id: number;
    name: string;
    slug: string
}

export interface Games {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[],
    metacritic: number,
    rating_top: number

}


const UseGames = (gameQuery: GameQuery) =>
    UseData<Games>('/games',
        {
            params: {
                genres: gameQuery.genre?.id,
                platforms: gameQuery.platform?.id,
                ordering: gameQuery.sortOrder,
                search: gameQuery.searchText
            }
        },
        [gameQuery]);
export default UseGames;