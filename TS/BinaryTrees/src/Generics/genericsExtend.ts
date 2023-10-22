

const loggedInUser =  <T extends object>( obj: T ) => {
    let isOnline = true;
    return {...obj, online: isOnline};
}

let updatedUser = loggedInUser({name: "Naveen", age: 25});
console.log(updatedUser.online);
