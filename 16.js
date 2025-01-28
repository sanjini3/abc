
const symbol1 = Symbol('uniqueProperty');
const symbol2 = Symbol('uniqueProperty');


const obj = {
  [symbol1]: 'Value for symbol1',
  [symbol2]: 'Value for symbol2'
};


console.log(obj[symbol1]); 
console.log(obj[symbol2]);


console.log(symbol1 === symbol2);
