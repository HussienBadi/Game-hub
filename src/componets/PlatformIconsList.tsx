import {
    FaWindows,
    FaPlaystation,
    FaXbox,
    FaApple,
    FaLinux,
    FaAndroid
} from 'react-icons/fa';
import { MdPhoneIphone } from 'react-icons/md';
import { SiNintendo } from 'react-icons/si';
import { BsGlobe } from 'react-icons/bs';
import { HStack, Icon, Text } from '@chakra-ui/react';
import { Platform } from '../hooks/UseGames'
import { IconType } from 'react-icons';

interface Props {
    paltforms: Platform[];
}
const PlatformIconsList = ({ paltforms }: Props) => {
    const iconMap: { [key: string]: IconType } = {
        pc: FaWindows,
        playstation: FaPlaystation,
        xbox: FaXbox,
        nintendo: SiNintendo,
        mac: FaApple,
        linux: FaLinux,
        andorid: FaAndroid,
        ios: MdPhoneIphone,
        web: BsGlobe
    }
    return (
        <HStack marginY={1}>
            {paltforms.map((paltform) => <Icon key={paltform.id} as={iconMap[paltform.slug]} color='gray.500' />)}
        </HStack>
    )
}

export default PlatformIconsList
