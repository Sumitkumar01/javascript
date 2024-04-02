// control flow example

const userLoginStatus = true; // this could come from a user's session
const debitCardStatus = true; // this could come from a user's session
const loggedInGoogle = false; // this could come from a user's session
const loggedInFacebook = true; // this could come from a user's session

// if (userLoginStatus && debitCardStatus && 2==3) {
//     console.log('User is logged in and has a debit card');
// }
// if(loggedInGoogle || loggedInFacebook || true){
//     console.log('User is logged in');
// }

// switch case example

// const dayOfWeek = 0;
// switch (dayOfWeek) {
//     case 1:
//         console.log('Monday');
//         break;
//     case 2:
//         console.log('Tuesday');
//         break;
//     case 3:
//         console.log('Wednesday');
//         break;
//     case 4:
//         console.log('Thursday');
//         break;
//     case 5:
//         console.log('Friday');
//         break;
//     case 6:
//         console.log('Saturday');
//         break;
//     case 7:
//         console.log('Sunday');
//         break;
//     default:
//         console.log('Invalid day');
//         break;
// }

// truthy || false value example

// const userEmail = "abc@gmail.com"; //it will on condition true

// if (userEmail) {
//   console.log("User is logged in");
// } else {
//   console.log("User is not logged in");
// }

// false, 0, -0, BigInt 0n, "", null, undefined, "   ", NaN;

// truthy values
// "0" ,"false"," ",[],{},function(){};

// const userEmail = []; //it will on condition false
// if(userEmail.length===0){
//     console.log("Array is empty");
// }


// const emptyObj = {};

// if (Object.keys(emptyObj).length === 0 ){
//     console.log("Object is empty");
// }

//  Nullish Coalescing operator (??): null undefined

let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 10;
// val1 = undefined ?? 10;
val1 = null ?? 10 ?? "default value";
console.log(val1);




