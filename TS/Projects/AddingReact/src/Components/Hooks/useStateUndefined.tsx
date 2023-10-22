import { useEffect, useState } from "react";


type UserType = {
   id: number;
   title: string;
}

const fetchData = () => {
   return Promise.resolve( {id: 12345, title: "Matt"});
}

const Component = () => {

  const [users, setUsers] = useState<UserType[]>([]);
   
   useEffect(() => {
     fetchData().then(( val ) => {
       setUsers([...users, val]);
     })
   }, []);
}