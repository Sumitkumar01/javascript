// promises

// const promises1 = new Promise((resolve, reject) => {
//     // Do an async task
//     // DB call, cryptography, network
//     setTimeout(function(){
//         console.log("hello this is promises");
//         resolve()
//     },1000)
// })

// promises1.then(function(){
//     console.log("promises consumed");
// })

// new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         console.log("Promise 2");
//         resolve()
//     }, 1000);
// }).then(()=>{
//     console.log("part 2")
// })

// const prms3 = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         resolve({userName:"sumit",email:"abc@gmail.com"})
//     },1000)
// })

// prms3.then((user)=>{
//     console.log(user)
// })

// const promise4 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let error = true;
//     if (!error) {
//       resolve({ username: "shivani", password: 123 });
//     } else {
//       reject("ERROR: there is an error in your code");
//     }
//   }, 1000);
// });

// promise4
//   .then((user) => {
//     console.log(user);
//     return user.username;
//   })
//   .then((username) => {
//     console.log(username);
//   })
//   .catch((error) => {
//     console.log(error);
//   }).finally(()=>{
//     console.log("the promise is resolve may rejected")
//   })

// const promise5 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let error = true;
//         if (!error) {
//             resolve({ username: "sumit", password: 1230 });
//         } else {
//             reject("ERROR : code error");
//         }
//     }, 1000);
// });

// async function consumePromise5() {
//     try {
//         const response = await promise5;
//         console.log(response);
//     } catch (error) {
//         console.log(error)
//     }
// }

// consumePromise5();
// fetch()

// async function getAllUser() {
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users");
//         const data = await response.json();
//         console.log(data);
//     } catch (er) {
//         console.log(er)
//     }
// }
// getAllUser();

fetch("https://jsonplaceholder.typicode.com/users").then((response) => {
    return response.json()
}).then((data) => {
   data.map((item) => {
    console.log(item.name)
    });
}).catch((er) => {
    console.log(er);
})

