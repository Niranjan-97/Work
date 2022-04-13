// Javascript allows us to with Primitives (strings,numbers,etc ) as if they were objects



// Key Distinctions between Primitives and Objects

// Primitive
// There are 7 primitive types
//string, number, bigint, boolean, symbol, null, undefined

//Non Primitives
// It is capable of storing multiple values as properties
// Can be created with {}, for instance: {name: "Niranjan", age:25}

let niranjan = {
    name: "Niranjan Reddy Anugu",
     Age: 25,
   sayHi: function(){
       console.log("Hello  Officer, This is Niranjan Reddy Anugu");
       return "true";
   }
}

console.log(`Hello ${niranjan.name} ${niranjan.Age} ${niranjan.sayHi()}`);