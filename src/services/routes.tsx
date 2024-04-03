import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Layout from "../pages/Layout";
import GameDetailPage from "../pages/GameDetailPage";





const router =  createBrowserRouter([
    {path : '/' , element : <Layout/> , 
        children : [
            {index : true , element : <HomePage/>},
            {path : 'games/:id', element : <GameDetailPage/>}
        ]}
])


export default router





//  now go to main file and remove app import

//  now test if we hit `/games/1` we see gamedetail page