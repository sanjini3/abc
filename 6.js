
function Person(name, age) {
    this.name = name;  
    this.age = age;   
  }
  
 
  Person.prototype.describe = function() {
    return `Name: ${this.name}, Age: ${this.age}`;
  };
  

  function Student(name, age, grade) {
   
    Person.call(this, name, age);
  
    this.grade = grade;  
  }
  
 
  Student.prototype = Object.create(Person.prototype);
  Student.prototype.constructor = Student;
  
  
  Student.prototype.study = function() {
    return `${this.name} is studying for grade ${this.grade}.`;
  };
  
 
  let person1 = new Person("John", 30);
  console.log(person1.describe()); 
  
  let student1 = new Student("John", 30, "A");
  console.log(student1.describe());  
  console.log(student1.study());  
  