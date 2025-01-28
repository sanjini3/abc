function createListWithReset(arr) {
    let currentIndex = 0;
    const resetIndex = () => currentIndex = 0; 
  
    return {
     
      [Symbol.iterator]() {
        return {
         
          next() {
            if (currentIndex < arr.length) {
              return { value: arr[currentIndex++], done: false };
            } else {
              return { value: undefined, done: true };
            }
          }
        };
      },
      
     
      reset() {
        resetIndex();
      }
    };
  }
  
  
  const myList = createListWithReset([10, 20, 30, 40]);
  
  for (const num of myList) {
    console.log(num); 
  }
  
  myList.reset(); 
  for (const num of myList) {
    console.log(num); 
  }
  