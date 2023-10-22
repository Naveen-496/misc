import { log } from "console";
const defaultUser = {
    id: "123",
    firstName: "Naveen",
    lastName: "Reddy",
    isAdmin: true
};
const getUser = (user) => {
    return user.id;
};
log(getUser(defaultUser));
