import { Badge } from "@chakra-ui/react"

interface Props {
    score: number
}
const CriticScore = ({ score }: Props) => {
    const color = score > 75 ? 'green' : score > 50 ? 'yellow' : ''
    return (
        <Badge colorScheme={color} fontSize='16px' paddingX={3} borderRadius='4px'>{score}</Badge>
    )
}

export default CriticScore
