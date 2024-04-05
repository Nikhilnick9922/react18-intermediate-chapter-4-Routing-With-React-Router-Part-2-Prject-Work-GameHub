import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import router from "./services/routes";
import theme from "./theme";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router}></RouterProvider>

        <ReactQueryDevtools />
      </QueryClientProvider>
    </ChakraProvider>
  </React.StrictMode>
);

//   8. Exercise- Building Game Trailer

//  we gonna add game trailer in this , for this first read rawg api
// we have endpoint to get all trailer of given game
// so we can send request to endpiont /games /id /movies
// and  we can get bunch of trailer object with id name preview & data properties
// preview container url of image which poster of video  , unfortunately shape of data which is
// object is not shown here

//  so first we gonna fetch the traiilers then we gonna inspect the object in dev tool so that
// we can get the idea , then we will see that in data object we have multiple properties each
// containing video link file , different videos with different resolution which is not that
// complicated

// solution

//  we gonna encapsulate this feature in seperate component
//  so components -> GameTrailer.tsx -> rafce
 
