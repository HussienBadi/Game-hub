import UseData from "./UseData";
import { Genres } from "./UseGenres";

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


const UseGames = (selectedGenre: Genres | null, selectedPlatform: Platform | null) =>
    UseData<Games>('/games',
        { params: { genres: selectedGenre?.id, platforms: selectedPlatform?.id } },
        [selectedGenre?.id, selectedPlatform?.id]);
export default UseGames;