import { Games } from '../hooks/UseGames'
import { Card, CardBody, HStack, Heading, Image, Text } from '@chakra-ui/react'
import PlatformIconsList from './PlatformIconsList'
import CriticScore from './CriticScore'
import GetCroppedImageUrl from '../services/image-url'
import Emoji from './Emoji'

interface Props {
    game: Games
}

const GameCard = ({ game }: Props) => {
    return (
        <Card width='500px' borderRadius={10} overflow='hidden'>
            <Image src={GetCroppedImageUrl(game.background_image)} />
            <CardBody>
                <HStack justifyContent='space-between' paddingBottom={3}>
                    <PlatformIconsList paltforms={game.parent_platforms.map(p => p.platform)} />
                    <CriticScore score={game.metacritic} />
                </HStack>
                <Heading fontSize='2xl'>
                    {game.name}
                    <Emoji rating={game.rating_top} />
                </Heading>
            </CardBody>
        </Card>
    )
}

export default GameCard
