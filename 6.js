const promise1 = new Promise(resolve => resolve(5));
const promise2 = new Promise(resolve => resolve(10));
const promise3 = new Promise(resolve => resolve(15));

promise1
  .then(value1 => {
    return promise2.then(value2 => value1 + value2);
  })
  .then(sum1 => {
    return promise3.then(value3 => sum1 + value3);
  })
  .then(finalSum => {
    console.log(finalSum);  
  })
  .catch(error => console.log(error));
