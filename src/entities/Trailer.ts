

export interface Trailer {
    id:number;
    name : string ;
    preview : string;
    // data : any;
    data : {480 : string, max : string};
}


//  we don't know so we gonna use any 
// but we have to careful with any because we don't get any 
// benefit of typescript type checking 
// so this tempeprary solution for until we find the shape of the obejct data

//  now go back to useTrailers.ts

// now we have to update the data interfACE

//  now back to gameTrailer.tsx compnentn 