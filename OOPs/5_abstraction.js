/**
 * Abstract Class Animal.
 *
 * @class Animal
 */
class Animal {

    constructor() {
      if (this.constructor == Animal) {
        throw new Error("Abstract classes can not be instantiated.");
      }
    }
  
    say() {
      throw new Error("Method  must be implemented.");
    }
  
    eat() {
      console.log("eating");
    }
  }

  /**
 * Dog.
 *
 * @class Dog
 * @extends {Animal}
 */
class Dog extends Animal {
    say() {
      console.log("Dog barks");
    }
  }
  
 /**
 * Cat.
 *
 * @class Cat
 * @extends {Animal}
 */
 class Cat extends Animal {
   say() {
     console.log("Cat meows");
   }
 }

  
new Dog().eat(); 
new Cat().eat(); 

new Dog().say(); 
new Cat().say(); 