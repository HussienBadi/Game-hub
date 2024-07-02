import { Games } from '../hooks/UseGames'
import { Card, CardBody, HStack, Heading, Image, Text } from '@chakra-ui/react'
import PlatformIconsList from './PlatformIconsList'
import CriticScore from './CriticScore'
import GetCroppedImageUrl from '../services/image-url'

interface Props {
    game: Games
}

const GameCard = ({ game }: Props) => {
    return (
        <Card width='500px' borderRadius={10} overflow='hidden'>
            <Image src={GetCroppedImageUrl(game.background_image)} />
            <CardBody>
                <Heading fontSize='2xl'>{game.name}</Heading>
                <HStack justifyContent='space-between'>
                    <PlatformIconsList paltforms={game.parent_platforms.map(p => p.platform)} />
                    <CriticScore score={game.metacritic} />
                </HStack>
            </CardBody>

        </Card>
    )
}

export default GameCard
