import { Grid, GridItem, Show } from "@chakra-ui/react"
import NavBar from "./componets/NavBar"

function App() {
  return <Grid templateAreas={{
    base: `"nav" "main"`,
    lg: `"nav nav" "aside main"` // 1024px
  }}>
    <GridItem area='nav'>
      <NavBar />
    
    </GridItem>
    <Show above="lg">  {/* to prevent showing in mobile devices */}
      <GridItem area='aside' bg='gold'>
        Aside
      </GridItem>
    </Show>
    <GridItem area='main' bg='dodgerblue'>
      Main
    </GridItem>
  </Grid>
}

export default App
