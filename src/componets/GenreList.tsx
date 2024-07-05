import { Button, HStack, Image, List, ListItem, Spinner, Text } from '@chakra-ui/react';
import UseGenres, { Genres } from '../hooks/UseGenres'
import GetCroppedImageUrl from '../services/image-url';

interface Props{
  onSelectGenre : (genre : Genres) => void;
}

const GenreList = ({onSelectGenre}:Props) => {

  const { data, isLoading, error } = UseGenres();

  if (error) return null;
  if (isLoading) return <Spinner />
  return (
    <List>
      {data.map(genre =>
        <ListItem key={genre.id} paddingY='5px'>
          <HStack>
            <Image boxSize='32px' borderRadius={8} src={GetCroppedImageUrl(genre.image_background)} />
            <Button onClick={()=> onSelectGenre(genre)} fontSize='lg' variant='link'>{genre.name}</Button>
          </HStack>
        </ListItem>
      )}
    </List>
  )
}

export default GenreList
