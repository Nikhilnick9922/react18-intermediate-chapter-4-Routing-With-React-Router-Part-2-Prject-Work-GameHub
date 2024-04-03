import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react"
import GenreList from "../components/GenreList"
import GameHeading from "../components/GameHeading"
import PlatformSelector from "../components/PlatformSelector"
import SortSelector from "../components/SortSelector"
import GameGrid from "../components/GameGrid"

const HomePage = () => (
    <Grid
        templateAreas={{
            // base: `"nav" "main"`,
            // lg: `"nav nav" "aside main"`,
            base: `"main"`,
            lg: `"aside main"`,
        }}
        templateColumns={{
            base: "1fr",
            lg: "250px 1fr",
        }}
    >
        {/* <GridItem area="nav">
          <NavBar />
        </GridItem> */}
        <Show above="lg">
            <GridItem area="aside" paddingX={5}>
                <GenreList />
            </GridItem>
        </Show>

        <GridItem area="main">
            <Box paddingLeft={2}>
                <GameHeading />
                <Flex marginBottom={5}>
                    <Box marginRight={5}>
                        <PlatformSelector />
                    </Box>
                    <SortSelector />
                </Flex>
            </Box>
            <GameGrid />
        </GridItem>
    </Grid>
)

export default HomePage


//  this is very similar to app component

// go to app.tsx

//  have pasted Grid here after modification , and delete app.tsx , and also delete 
// app.css


//  now we should create a routes file so 
 // services -> routes.tsx