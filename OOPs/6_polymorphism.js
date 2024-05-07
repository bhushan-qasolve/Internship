class Animal {
    constructor(name) {
      this.name = name;
    }
  
    makeSound() {
      console.log('Animal Sound');
    }
  }
  

  class Dog extends Animal {
    constructor(name) {
      super(name);
    }
  
    makeSound() {
      console.log('Woof!');
    }
  }
  
  class Cat extends Animal {
    constructor(name) {
      super(name);
    }
  
    makeSound() {
      console.log('Meow!');
    }
  }
  
  
  const dog = new Dog('Marshall');
  const cat = new Cat('Snow');
  
  
  dog.makeSound(); 
  cat.makeSound(); 