import { SimpleGrid, Text } from '@chakra-ui/react';
import UseGames, { Platform } from '../hooks/UseGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';
import { Genres } from '../hooks/UseGenres';

interface Props {
    selectedGenre : Genres | null;
    selectedPlatform : Platform | null;
}

const GamesGrid = ({selectedGenre,selectedPlatform} : Props) => {
    const { data, error, isLoading } = UseGames(selectedGenre,selectedPlatform);
    const skeletons = [1, 2, 3, 4, 5, 6];

    return (
        <>
            {error && <Text>{error}</Text>}
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 3 }} spacing={3} padding='10px'>

                {isLoading && skeletons.map(skeleton => <GameCardContainer key={skeleton} ><GameCardSkeleton /></GameCardContainer>)}

                {data.map(data => <GameCardContainer key={data.id}><GameCard game={data} /></GameCardContainer>)}



            </SimpleGrid>
        </>

    )
}

export default GamesGrid
