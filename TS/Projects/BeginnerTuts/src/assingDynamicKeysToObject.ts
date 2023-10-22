

const createCache = () => {
   
   const cache: { [id: string]: string} = {};

    // or
    const anotherCache: Record< string, string > = {};

   const add = ( id: string, value: string ) => {
    anotherCache[id] = value;
   };

   const remove = ( id: string ) => {
    delete anotherCache[id];
   }

   return {
    anotherCache,
    add,
    remove
   };
};