import { SimpleGrid, Text } from '@chakra-ui/react';
import UseGames from '../hooks/UseGames';
import GameCard from './GameCard';

const GamesGrid = () => {
    const { games, error } = UseGames();

    return (
        <>
            {error && <Text>{error}</Text>}
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 3 }} spacing={10} padding='10px'>
                {games.map(game =>
                    <GameCard key={game.id} game={game} />
                )}
            </SimpleGrid>
        </>

    )
}

export default GamesGrid
