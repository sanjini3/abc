const reverseIterable = (arr) => {
    return {
     
      [Symbol.iterator]() {
        let index = arr.length - 1; 
        return {
       
          next() {
            if (index >= 0) {
              return { value: arr[index--], done: false }; 
            } else {
              return { value: undefined, done: true };
            }
          }
        };
      }
    };
  };
  
 
  const arr = [1, 2, 3, 4];
  

  const reverseArr = reverseIterable(arr);
  for (const value of reverseArr) {
    console.log(value); 
  }
  