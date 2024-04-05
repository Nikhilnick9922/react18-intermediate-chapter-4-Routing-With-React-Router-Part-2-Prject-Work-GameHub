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
   

          <RouterProvider router={router}>
         </RouterProvider>

    <ReactQueryDevtools />
      </QueryClientProvider>
    </ChakraProvider>
  </React.StrictMode>
);

 

//   7. Exercise- Building Game Attributes

//  now we going to add Game Attributes , we have platforms metacores genres publisheers in 
// GameDetailPage
// notice that each section has some light grey heading followwed by some values
//  and this pattern is reapeated few times here
// and we have to make sure to impliment this patter in reusable comoponent

// Solution 

//  components => DefinitionItems.tsx -> rafce
