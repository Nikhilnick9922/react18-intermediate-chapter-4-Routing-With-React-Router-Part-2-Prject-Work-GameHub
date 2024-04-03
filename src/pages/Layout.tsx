import { Outlet } from 'react-router-dom'
import NavBar from '../components/NavBar'

const Layout = () => {
  return (
    <>
    <NavBar/>
    <Outlet/>
    </>
  )
}

export default Layout


//  here we add NavBar 

//  next we need to create the homepage

//  pages -> homepage.tsx
