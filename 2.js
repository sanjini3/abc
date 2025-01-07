
function add(a, b) {
    return a + b;
  }
  
  function subtract(a, b) {
    return a - b;
  }
  

  function multiply(a, b) {
    return a * b;
  }
  

  function divide(a, b) {
    if (b === 0) {
      return "Error: Division by zero is not allowed!";
    }
    return a / b;
  }
  
 
  let num1 = 12;
  let num2 = 6;
  let operation ="*";
  

  let result;
  

  if (operation === "+") 
  {
     result = add(num1, num2);
  } 
  else if (operation === "-")
  {
     result = subtract(num1, num2);
  } 
  else if (operation === "*") 
  {
    result = multiply(num1, num2);
  } 
  else if (operation === "/") 
  {
    result = divide(num1, num2);
  } 
  else 
  {
    result = "Invalid operation! Please choose +, -, *, or /.";
  }
  

  console.log(`The result of ${num1} ${operation} ${num2} is: ${result}`);
  