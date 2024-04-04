import { Button, Text } from "@chakra-ui/react";
import { useState } from "react"


interface Props {
  children : string;
}


const ExpandableText = ({children} : Props) => {
   const [expanded, setExpanded] = useState(false)
   const limit = 300;

   if (!children) return null;

   if(children.length <= limit)
      return <Text>{children}</Text>

    // other wise we should summirse the text

    // const summary = children.substring(0 ,limit);
    const summary = expanded ? children : children.substring(0 ,limit) + '...';

    return <Text>{summary}
                <Button onClick={()=>setExpanded(!expanded)}
                     size={'xs'} fontWeight={'bold'} colorScheme="yellow" marginLeft={1} > 
                    {expanded ? 'Show Less' : 'Read More'}
                </Button>
          </Text>


  
}

export default ExpandableText   



//  in this we need local state to determine if component is expanded or not 

// for local operation local state is fine , no need for zustand
// always check wherer is state is going 

// also we should be able to pass some `text` as child to this component


// we also have to define the limit for number of character we want to display

// if text length is more than 300 then we sumrise it

// also add buttons for show les and read more

// let's test at this ppoint

//  for that go to GameDetailsPage.tsx and replace Text with ExpandableText

//  set button size to xs

//  now we should make font bold so that see text clearly and change button color to yellow

//  now we should handle the click event , in that we toggle expanded 

//  now we don't see changes because we always showing summerise text
// so we have to modifiy our logic little  bit
// in summery we should check if exhanded then whole text or summerize
// but we still have `.....` at the end , so remove from here and add to summerize text  

// now button is so close too `...` ,margin left

// one last thing if children property is null then children.length will throw an error
// so if children is falsy we return null