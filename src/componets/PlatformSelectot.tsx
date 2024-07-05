import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'
import UsePlatforms from '../hooks/UsePlatforms'

const PlatformSelectot = () => {

    const { data } = UsePlatforms();

    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>Platfoms</MenuButton>
            <MenuList>
                {data.map(platform => <MenuItem key={platform.id}>{platform.name}</MenuItem>)}
            </MenuList>
        </Menu>
    )
}

export default PlatformSelectot