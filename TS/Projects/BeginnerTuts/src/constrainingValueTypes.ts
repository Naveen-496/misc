
interface User {
  id: number;
  firstName: string;
  lastName: string;
  role: "admin" | "user" | "super admin";
}

const defalutUser: User = {
   id: 12345,
   firstName: "Naveen",
   lastName: "Reddy",
   role: "super admin"
}