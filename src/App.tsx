import { Box, Flex, Grid, GridItem, HStack, Show } from "@chakra-ui/react"
import NavBar from "./components/NavBar"
import GamesGrid from "./components/GamesGrid"
import GenreList from "./components/GenreList"
import { useState } from "react"
import { Genres } from "./hooks/UseGenres"
import PlatformSelecter from "./components/PlatformSelecter"
import { Platform } from "./hooks/UseGames"
import SortSelector from "./components/SortSelector"

export interface GameQuery {
  genre: Genres | null;
  platform: Platform | null;
  sortOrder: string;
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
      <Flex paddingLeft={2} marginBottom={3}>
        <Box marginRight={5}>
          <PlatformSelecter SelectPlatform={gameQuery.platform} onSelectPlatform={(platform) => setGameQuery({ ...gameQuery, platform })} />
        </Box>
        <SortSelector sortOrder={gameQuery.sortOrder} onSelectSortOrder={(sortOrder) => setGameQuery({ ...gameQuery, sortOrder })} />
      </Flex>
      <GamesGrid gameQuery={gameQuery} />
    </GridItem>
  </Grid>
}

export default App
