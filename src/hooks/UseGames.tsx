import { GameQuery } from "../App";
import UseData from "./UseData";

export interface Platform {
    id: number;
    name: string;
}

export interface Games {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[],
    metacritic: number
}


const UseGames = (gameQuery : GameQuery) =>
    UseData<Games>('/games',
        { params: { genres: gameQuery.genre?.id, platforms: gameQuery.platform?.id } },
        [gameQuery]);
export default UseGames;