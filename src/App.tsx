
// function App() {
//   return (





    // <Grid
    //   templateAreas={{
    //     // base: `"nav" "main"`,
    //     // lg: `"nav nav" "aside main"`,
    //     base: `"main"`,
    //     lg: `"aside main"`,
    //   }}
    //   templateColumns={{
    //     base: "1fr",
    //     lg: "250px 1fr",
    //   }}
    // >
    //   {/* <GridItem area="nav">
    //     <NavBar />
    //   </GridItem> */}
    //   <Show above="lg">
    //     <GridItem area="aside" paddingX={5}>
    //       <GenreList />
    //     </GridItem>
    //   </Show>

    //   <GridItem area="main">
    //     <Box paddingLeft={2}>
    //       <GameHeading />
    //       <Flex marginBottom={5}>
    //         <Box marginRight={5}>
    //           <PlatformSelector />
    //         </Box>
    //         <SortSelector />
    //       </Flex>
    //     </Box>
    //     <GameGrid />
    //   </GridItem>
    // </Grid>
//   );
// }

// export default App;

 


//  2. Exercise- Setting Up Routing


//  back to GameHub , we want to set up routing in this project

//  In which we have list of games exactly like before , but if we hit `games/1' 
// we see GameDetailPage compnonet, nothing in this component now 

// first we just wanted to setup basic routing in this project
//  note that on the top we always have  our navigation bar and below we have outlet for 
// display the page based on the current location in the browser.

//  npm i react-router-dom@6.10.0
// src -> pages -> Layout.tsx
//  this is where we do specify all the pages should have nativation bar on the top







// send here by Homepage.tsx



// in app component we have grid with two rows
//  first row we have nav & main area
// now we have layout with nav so now  we don't need 2 rows 
// we only need grid &  2 columns , so remove nav
//  & also remove the Navbar , so remove entire GridItem
// and move this grid to Homepage.tsx 