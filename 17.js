
const globalSymbol1 = Symbol.for('sharedKey');
const globalSymbol2 = Symbol.for('sharedKey');

console.log(globalSymbol1 === globalSymbol2); 
