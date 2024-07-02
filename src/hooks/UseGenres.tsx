import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface Genres {
    id: number;
    name: string;
}
interface FetchGenresResponce {
    count: number;
    results: Genres[];
}

const UseGenres = () => {
    const [genre, setGenre] = useState<Genres[]>([]);
    const [error, setError] = useState('');
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {

        const controller = new AbortController(); // Canceltions
        setLoading(true)
        apiClient.get<FetchGenresResponce>('/genres', { signal: controller.signal })
            .then(res => {
                setGenre(res.data.results);
                setLoading(false)
            })
            .catch(err => {
                if (err instanceof CanceledError) return;
                setError(err.message);
                setLoading(false);
            });
        return () => controller.abort();
    }, []);

    return { genre, error, isLoading };
}
export default UseGenres;