
function Person(name, age) {
    this.name = name;  
    this.age = age;  
  
 
    this.greet = function() {
      console.log(`Name:${this.name},Age:${this.age}`);
    };
  
  
    this.isAdult = function() {
      return this.age >= 18;  
    };
  }
  
  let per1 = new Person("Alice", 30);
  per1.greet(); 
  console.log(per1.isAdult());  
  
  let per2 = new Person("Bob", 16);
  per2.greet(); 
  console.log(per2.isAdult());
  