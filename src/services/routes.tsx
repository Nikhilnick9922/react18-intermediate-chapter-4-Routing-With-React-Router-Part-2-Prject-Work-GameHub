import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Layout from "../pages/Layout";
import GameDetailPage from "../pages/GameDetailPage";
import ErrorPage from "../pages/ErrorPage";





const router =  createBrowserRouter([
    {path : '/' ,
    errorElement : <ErrorPage/>,  
     element : <Layout/> , 
        children : [
            {index : true , element : <HomePage/>},
            {path : 'games/:slug', element : <GameDetailPage/>}
        ]}
])


export default router




 
//  changed from id to slug

//  next go to gameCard.tsx


//  as you can see path 'games'/:slug , if there is no slug then error page will kick in 
// we can test this right away. 
// we done here nothing just wanted to see , go back to GameDetialsPage.tsx