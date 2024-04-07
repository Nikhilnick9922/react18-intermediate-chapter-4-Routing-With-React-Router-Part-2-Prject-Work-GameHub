import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <HStack padding="10px">
      <Link to='/'>   <Image src={logo} boxSize="60px" objectFit={'cover'} /></Link>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;


//  now wrap Logo inside the link

//  after wrapping Logo image has lost it's aspect ratio  , to fix this in Image use object fit to cover


//  now if we in GameDetailsPage.tsx and search for anything nothing happens
//  let's find why , got to SearchInput.tsx 
