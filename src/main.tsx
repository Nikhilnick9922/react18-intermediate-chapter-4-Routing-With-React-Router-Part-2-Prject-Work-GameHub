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

 

//  3. Handling Errors


//  if we go to invalid page  , we should see error page 
// but message that we see on error page should be depend on the type of the error.

// example 
//        OOps 
//      this page is does not exist 

//  this is for invalid page


//  but if our application throws an error then we have to show different error , 
// sorry unexpected error occured


// solution 

// first we need to create the error page 
//  pages -> ErrorPage.tsx -> rafce   -> Heading + text