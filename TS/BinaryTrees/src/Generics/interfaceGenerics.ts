
interface User< T > {
   id: number
   name: string
   email: string
   skills: T
}

const user: User<string[]> = {
   id: 1234,
   name: "Naveen",
   email: "naveen@gmail.com",
   skills: ["java", "typescript"]
}

const user1: User< number[] > = {
   id: 1111,
   name: "Reddy",
   email: "reddy@gmail.com",
   skills: [2, 3, 4]
}