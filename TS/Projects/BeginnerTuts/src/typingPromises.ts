
interface LukeSkyWalker {
  id: number;
  name: string;
  hairColor: string;
  skinColor: string;
  height: number;
}


const fetchLukeSkyWalker = async (): Promise<LukeSkyWalker> => {
   const data = fetch("https://sky-luke.com").then( (res)  => {
    return res.json();
   });
   
   return data;
}

const res = fetchLukeSkyWalker();