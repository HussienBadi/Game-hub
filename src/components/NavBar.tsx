import { HStack, Image } from '@chakra-ui/react'
import logo from '../assets/logo.webp'
import ColorModeSwitch from './ColorModeSwitch'
import SearchInput from './SearchInput'
interface Props {
    searchText: (searchText: string) => void;
}

const NavBar = ({ searchText }: Props) => {
    return (
        <HStack justifyContent='space-between' padding='10px'>
            <Image src={logo} boxSize='60px' />
            <SearchInput searchText={searchText} />
            <ColorModeSwitch />
        </HStack>
    )
}

export default NavBar
