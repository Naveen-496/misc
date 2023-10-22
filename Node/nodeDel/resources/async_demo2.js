

// function sayHello(name, callback){
//   console.log(name + 'Welcom to callbacks');
//   callback();
// }

// async function greet(){
//   await doSome();
//   console.log('Entered into async callback');
// }

// async function doSome(){
//   console.log('Something');
// }

// console.log('Started async');
// sayHello('Naveen', greet);
// console.log('async finished');

// function doAsyncTask(callback){
//   setTimeout(function(){
//     callback('done!');
//   }, 0);
// }

// console.log('start');
// doAsyncTask(function(data){
//   console.log(data);
// });

// console.log('end');


// using promises
// function doAsyncTask(){
//   return new Promise(function(resolve, reject){
//     setTimeout(function(){
//       resolve('done!');
//     }, 2000)
//   });
// }

// console.log('start');
// console.log(doAsyncTask());
// doAsyncTask().then(function(result){
//   console.log(result);
// });

// console.log('end');


async function doAsyncTask(){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('done!');
    },2000);
  });
}

async function main(){
  console.log('start');
  const result = await doAsyncTask();
  console.log(result);
  console.log('end');
}

main();