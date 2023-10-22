import { useState } from "react";


type Tag = {
   id: number;
   title: string;
}

interface TagType {
   selectedTag: number | null;
   tags: Tag[];
}

const Component = () => {
    
   const [state, setState] = useState<TagType>();

   return (
   <>
     { state?.tags.map( (tag) => ( <div> { tag.title } </div>) )}
   </>

   )
}