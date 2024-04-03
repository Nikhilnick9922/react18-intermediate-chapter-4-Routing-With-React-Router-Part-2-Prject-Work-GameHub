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
        {/* <App /> */}

          <RouterProvider router={router}>
            
          </RouterProvider>


        <ReactQueryDevtools />
      </QueryClientProvider>
    </ChakraProvider>
  </React.StrictMode>
);


//  replace App with routerProvider
//  now we are letting react-router decide what comopnet depending on the user current 
// location in the browser

//  test the app at this point 

//  now let's add pages -> GameDetailPage.tsx 