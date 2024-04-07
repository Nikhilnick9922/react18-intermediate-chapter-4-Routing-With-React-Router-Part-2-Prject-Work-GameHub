import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import useGameQueryStore from "../store";


 

const SearchInput = (
   ) => {
  const navigate =   useNavigate()
  const ref = useRef<HTMLInputElement>(null);
    const setSearchText = useGameQueryStore(s=>s.setSearchText)
  return (
    <form onSubmit={(event) => {
      event.preventDefault();
      if (ref.current) 
        {
          setSearchText(ref.current.value);
          navigate ('/')
        }
 
    }}>
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input ref={ref} borderRadius={20} placeholder="Search games..." variant="filled" />
      </InputGroup>
    </form>
  );
};

export default SearchInput;

//  so here when we submit , all we donig is setting the searchText 
// at this point the Games hook picks up the state change from zustant store and it will fetch the games from backend
 
//  actaully it's working , but we don't see the results
// to show the result's we shluld take the user back to the homepage because that's where we showing the reuslts 

// so we use navigat hook and use navigate function to to take the user to home page