const XMLHttpRequest = require('./node_modules/xmlhttprequest').XMLHttpRequest;
// let promise = new Promise((resolve,reject)=>{

//     resolve();

//     reject("Reject");

// });
// console.log(promise);
// promise.then((result)=>{
//     console.log("Resolved:",result);
// }).catch((e)=>{
//     console.log("e",e);
// });

// let promise = new Promise(function(resolve,reject){
// if(0){
// resolve("Resolved");
// }else{
// reject(false);
// }
// });
// const a = ()=>{
//     promise.then((result)=>{
//         console.log(result);
//     },(error)=>{
//         console.log(error);
//     })
// }

// a();

function getPromise(URL){
    let promise = new Promise(function(resolve,reject){
        let req = new XMLHttpRequest();
        req.open("GET",URL);
        req.onload = function(){
            if(req.status == 200){
                resolve(req.response);
            }else{
                reject("Rejected!");
            }
        }
        req.send();
    });
    return promise;
}

const POKEMONS_URL = "https://pokeapi.co/api/v2/pokemon?limit=50";

let promise = getPromise(POKEMONS_URL);

const functionToPrint = ()=>{
    promise.then((result)=> {console.log(result)},
                 (error) => {console.log(error)}     
                );
}

functionToPrint();