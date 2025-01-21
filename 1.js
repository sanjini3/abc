function greet(name, callback) {
    callback(`Hello, ${name}!`);
  }
  
  
  greet('Alice', message => console.log(message));  
  