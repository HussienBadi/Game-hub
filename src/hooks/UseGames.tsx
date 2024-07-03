import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
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
    metacritic: number
}


const UseGames = () => UseData<Games>('/games');
export default UseGames;