// class

class product{
    constructor(n, p){
        // consturctor function to create new real life instances called as object
        // When we create an object this constructor is the first function that gets called.
        this.name = n;
        this.price = p;
    }

    // member function
    displayProduct(){

    }
}

let iphone = new product("iphone_11",80000);
console.log(iphone);

/* Behaviour of this key word
    Behaviour of this in JS is different than cpp and java.
    - In Js this keyword references to the calling site i.e. from where the function or class is called.
*/

/* New keyword
    It looks like new keyword only calls constructor but it does a lot more than that.
    - new keyword is not only associated with classes it can be used function.
    - the new keyword actually executes the 4 step process.
        1. The new keyword creates a brand new empty JS obeject.
        2. It does a process of linking.
        3. It calls the fucnton with the this property assinged to the empty object.
        4. The function execution starts.(And we know that this keyword belongs to calling site).
             At last if the function doesn't return any it by default return the object.
      
*/ 

/* 
    In JS we don't have any mental model of copy.
    Objects are going to be link to there clases somehow
    What is the prototype?
     - it is a machanism using which JS objects inherits features from one another.
     
