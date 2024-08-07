import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { useRef } from 'react'
import { BsSearch } from 'react-icons/bs'

interface Props{
    searchText : (searchText : string) => void;
}

const SearchInput = ({searchText} :Props) => {
    const ref = useRef<HTMLInputElement>(null);
    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            if (ref.current) searchText(ref.current.value);

        }}>
            <InputGroup>
                <InputLeftElement children={<BsSearch />} />
                <Input ref={ref} borderRadius={20} placeholder='Search game ...' variant='fille' />
            </InputGroup>
        </form>
    )
}

export default SearchInput
