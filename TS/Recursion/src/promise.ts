

type User = {
  id: number;
  name: string;
  age: number;
}



async function getUser(): Promise<User | null> {

  const newUser: User = { id: 123, name: "Naveen", age: 18 };
  return new Promise<User | null>((res, rej) => {

    if (newUser.age > 20) {
      res(newUser);
    }
    res(null);
  })
}

const result = getUser().then(res => console.log(res ? res : null));

export { };