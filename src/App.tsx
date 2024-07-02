import { Grid, GridItem, Show } from "@chakra-ui/react"
import NavBar from "./componets/NavBar"
import GamesGrid from "./componets/GamesGrid"
import GenreList from "./componets/GenreList"

function App() {
  return <Grid templateAreas={{
    base: `"nav" "main"`,
    lg: `"nav nav" "aside main"` // 1024px
  }}>
    <GridItem area='nav'>
      <NavBar />

    </GridItem>
    <Show above="lg">  {/* to prevent showing in mobile devices */}
      <GridItem area='aside'>
        <GenreList />
      </GridItem>
    </Show>
    <GridItem area='main'>
      <GamesGrid />
    </GridItem>
  </Grid>
}

export default App
