import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import theme from "./theme";
import { RouterProvider } from "react-router-dom";
import router from "./services/routes";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <QueryClientProvider client={queryClient}>
   

          <RouterProvider router={router}>
            
          </RouterProvider>


        <ReactQueryDevtools />
      </QueryClientProvider>
    </ChakraProvider>
  </React.StrictMode>
);

 

//  4. Exercise- Fetching a Game

//  we want to hover effect on our card
//  and now we have to add name of game to see details - in that page we just want to see
// name of the game and some description 
// and note that in naviation bar , we are passing the slug of the game not the id 
// this will make us url more url & search engine friendly
// look at rawg documentation -> games  -> get details of the game  , here we have endpoint 
// for getting details by just passing id or slug to get detials, 
// so in object that we are recieving we have property called `descirption` that has html markup
// but there is `description_raw `which contain text , which is not mentioned in documentation

// this is little bit complicated than previous excercises



//  solution 

//  first go to routes.tsx and change id to slug