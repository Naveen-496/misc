
interface User {
  id: number;
  firstName: string;
  lastName: string;
  role: "super-admin" | "admin" | "user";
  post: Post[];
}

interface Post {
  id: number;
  title: string;
}

const user: User = {
  id: 123,
  firstName: "Naveen",
  lastName: "Reddy",
  role: "admin",
  post: [ {id: 111, title: "Nothing"}]
}