import { Button, HStack, Heading, Image, List, ListItem, Spinner, Text } from '@chakra-ui/react';
import UseGenres, { Genres } from '../hooks/UseGenres'
import GetCroppedImageUrl from '../services/image-url';

interface Props {
  onSelectGenre: (genre: Genres) => void;
  selectedGenre: Genres | null
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {

  const { data, isLoading, error } = UseGenres();

  if (error) return null;
  if (isLoading) return <Spinner />
  return (
    <>
      <Heading fontSize='2xl' marginBottom={3}>Genres</Heading>
      <List>
        {data.map(genre =>
          <ListItem key={genre.id} paddingY='5px'>
            <HStack>
              <Image boxSize='32px' objectFit='cover' borderRadius={8} src={GetCroppedImageUrl(genre.image_background)} />
              <Button whiteSpace='normal' textAlign='left' fontWeight={genre.id == selectedGenre?.id ? 'bold' : 'normal'} onClick={() => onSelectGenre(genre)} fontSize='lg' variant='link'>{genre.name}</Button>
            </HStack>
          </ListItem>
        )}
      </List>
    </>
  )
}

export default GenreList
