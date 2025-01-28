function createInfiniteSequence(limit) {
    return {
     
      [Symbol.iterator]() {
        let current = 1;
        let steps = 0; 
  
        return {
     
          next() {
            if (steps >= limit) {
              return { done: true }; 
            }
            steps++;
            return { value: current++, done: false };
          }
        };
      }
    };
  }
  
  const limit = 5;
  const infiniteSeq = createInfiniteSequence(limit);
  
  for (const number of infiniteSeq) {
    console.log(number); 
  }
  