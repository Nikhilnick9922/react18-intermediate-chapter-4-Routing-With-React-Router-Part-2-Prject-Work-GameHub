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

//   9.   Exercise- Building Game Screenshots


//  on medium devices like tablet we want to show them like 2 columns 
// and on small devices like on the phone we want to show them like single column
//

//  this is similar to previous one 
// we can find endpont in api documentation for given game for screenshot
//  urls is `games/id/screenshots`
// we get bunch of object , each object has id ,image , hidden , widhth and height properties

// let's start by creating the hook by gettign those screen shopts for the game 
//  hooks -> useScreenshots.ts