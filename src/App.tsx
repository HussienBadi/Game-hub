import { Grid, GridItem, HStack, Show } from "@chakra-ui/react"
import NavBar from "./componets/NavBar"
import GamesGrid from "./componets/GamesGrid"
import GenreList from "./componets/GenreList"
import { useState } from "react"
import { Genres } from "./hooks/UseGenres"
import PlatformSelecter from "./componets/PlatformSelecter"
import { Platform } from "./hooks/UseGames"
import SortSelector from "./componets/SortSelector"

export interface GameQuery {
  genre: Genres | null;
  platform: Platform | null;
}

function App() {

  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

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
        <GenreList selectedGenre={gameQuery.genre} onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })} />
      </GridItem>
    </Show>
    <GridItem area='main'>
      <HStack paddingLeft={2} marginBottom={3}>
        <PlatformSelecter SelectPlatform={gameQuery.platform} onSelectPlatform={(platform) => setGameQuery({ ...gameQuery, platform })} />
        <SortSelector />
      </HStack>
      <GamesGrid gameQuery={gameQuery} />
    </GridItem>
  </Grid>
}

export default App
