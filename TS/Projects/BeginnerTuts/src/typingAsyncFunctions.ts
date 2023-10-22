

interface User {
  id: string;
  firstName: string;
  lastName: string;
}


const createThenGetUser = async ( createUser: () => Promise<string>, getUser: (id: string) => Promise<User>):
 Promise< User>  => {
  
  const userId = await createUser();

   const user: User = await getUser( userId );

   return user;

   
}