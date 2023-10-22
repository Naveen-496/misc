

function fetchUserData(userId, callback){

  setTimeout(() => {
    const userdata = {
      userId : userId,
      name : 'John Doe',
      email : 'johndoe@gmail.com'
    }
    callback(userdata);
  }, 5000);
}

function displayUserData(user){
  console.log(`id : ${user.userId}`);
  console.log(`name : ${user.name}`);
  console.log(`email : ${user.email}`);
}

console.log('fetching user data');
fetchUserData(123, displayUserData);
console.log('finished fetching user data');