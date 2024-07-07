import { Grid, GridItem, Show } from "@chakra-ui/react"
import NavBar from "./componets/NavBar"
import GamesGrid from "./componets/GamesGrid"
import GenreList from "./componets/GenreList"
import { useState } from "react"
import { Genres } from "./hooks/UseGenres"
import PlatformSelecter from "./componets/PlatformSelecter"
import { Platform } from "./hooks/UseGames"

function App() {

  const [selectedGenre, setSelectedGenre] = useState<Genres | null>(null);
  const [selectPlatform, setSelectPlatform] = useState<Platform | null>(null);

  return <Grid templateAreas={{
    base: `"nav" "main"`,
    lg: `"nav nav" "aside main"` // 1024px
  }}
    templateColumns={{ // set width of columns
      base: '1fr',
      lg: '200px 1fr'
    }}
  >
    <GridItem area='nav'>
      <NavBar />

    </GridItem>
    <Show above="lg">  {/* to prevent showing in mobile devices */}
      <GridItem area='aside' paddingX={4}>
        <GenreList selectedGenre={selectedGenre} onSelectGenre={(genre) => setSelectedGenre(genre)} />
      </GridItem>
    </Show>
    <GridItem area='main'>
      <PlatformSelecter SelectPlatform={selectPlatform} onSelectPlatform={(platform) => setSelectPlatform(platform)} />
      <GamesGrid selectedPlatform={selectPlatform} selectedGenre={selectedGenre} />
    </GridItem>
  </Grid>
}

export default App
