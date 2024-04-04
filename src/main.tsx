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

 

//   6. Exercise- Building Expandable Text


//  now we are goinng to impliment logic for summerise game description 
// suppose if the logic is longer than 300 characters we gonna show `show more` button

//  because ability to exapnd and collapse not specific to Game descritption , we should impliment 
// its as reusable 

//  components -> ExpandableText.tsx -> rafce


// 1 : 17