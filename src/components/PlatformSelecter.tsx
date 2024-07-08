import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'
import UsePlatforms from '../hooks/UsePlatforms'
import { Platform } from '../hooks/UseGames';

interface Props {
    onSelectPlatform: (platform: Platform) => void;
    SelectPlatform : Platform | null
}

const PlatformSelectot = ({ onSelectPlatform,SelectPlatform }: Props) => {
    const { data, error } = UsePlatforms();
    if (error) return null;
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>
            {SelectPlatform?.name || 'Platforms'}
            </MenuButton>
            <MenuList>
                {data.map(platform => <MenuItem onClick={() => onSelectPlatform(platform)} key={platform.id}>{platform.name}</MenuItem>)}
            </MenuList>
        </Menu>
    )
}

export default PlatformSelectot
