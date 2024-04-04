import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Layout from "../pages/Layout";
import GameDetailPage from "../pages/GameDetailPage";
import ErrorPage from "../pages/ErrorPage";





const router =  createBrowserRouter([
    {path : '/' ,
    errorElement : <ErrorPage/>, // here added
     element : <Layout/> , 
        children : [
            {index : true , element : <HomePage/>},
            {path : 'games/:id', element : <GameDetailPage/>}
        ]}
])


export default router





//   add errorElement Property at root route

//  now test , working but navigation bar is gone 
// because errorPage does not following  the Layout that we defined erlier , 
// it's been not rendered in outlet of Layout component , only the children will be rendered
// insdie the outlet 
//  there is way but it's little bit complicated , but for now we prefer to add Navbar in erorpage
//  because it's unlikely that layout of our website is going to change in the future ,
// so let's not over complicate things

// got to ErrorPage.tsx and add Navbar
