import { log } from "console";


type User = {
   id: string;
   firstName: string;
   lastName: string;
   isAdmin: boolean;
}


const defaultUser: User = {
  id: "123", 
  firstName: "Naveen",
  lastName: "Reddy",
  isAdmin: true
}

const getUser = ( user: User ) => {
   return user.id;
};

log( getUser(defaultUser ));