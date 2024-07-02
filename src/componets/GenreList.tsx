import UseGenres from '../hooks/UseGenres'

const GenreList = () => {
 
   const {genre} = UseGenres();

  return (
    <ul>
        {genre.map(genre=><li key={genre.id}>{genre.name}</li>)}
    </ul>
  )
}

export default GenreList
