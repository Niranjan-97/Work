/* 
    In Javascript There are 8 different data types. 7 of them are "Primitive", because there values contain
    only a single thing either( it is a String or Number or else)
*/


/*
    Objects are used to Stored Keyed Collections of various data and more complex entities.
*/


//  We can create Objects in Two ways 
    
    let user = {};                  // "Object literal"     Syntax
    let user1 = new Object();       // "Object Constructor" Syntax

//  we Usually use Object literal Syntax

//  Literals and Properties
//  We can immediately put some values into {...} as key value pairs

    let userName = {
        name1 : "Niranjan Reddy Anugu",  // Here name1 is the key name and "Niranjan Reddy Anugu" is the value
        age   :  25,                     // Here age   is the key name and  25 is the value 
    }

//  A Property has a key (also known as "name" or "identifier") before the colon ":" and a value to the right of it

//  In the Above Example we created an Object with userName, there are two properties in it
//  First property has key/name/identifier as "name1" and value as "Niranjan Reddy Anugu"
//  Second property has key/name/identifier as "age"  and value as  25

/*
    we can add, remove and read files from it at any time.
    
    Property values can be accessed in two different ways
    
    1. Using Dot Notation.
    2. Using Square Brackets.

*/
