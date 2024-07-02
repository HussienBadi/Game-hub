import { SimpleGrid, Text } from '@chakra-ui/react';
import UseGames from '../hooks/UseGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';

const GamesGrid = () => {
    const { games, error, isLoading } = UseGames();
    const skeletons = [1, 2, 3, 4, 5, 6];

    return (
        <>
            {error && <Text>{error}</Text>}
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 3 }} spacing={10} padding='10px'>

                {isLoading && skeletons.map(skeleton => <GameCardContainer><GameCardSkeleton key={skeleton} /></GameCardContainer>)}

                {games.map(game => <GameCardContainer><GameCard key={game.id} game={game} /></GameCardContainer>)}



            </SimpleGrid>
        </>

    )
}

export default GamesGrid
