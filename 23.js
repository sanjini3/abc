function* cumulativeSum(arr) {
    let sum = 0;
    for (let num of arr) {
      sum += num;    
      yield sum;       
    }
    return sum;        
  }
  

  const arr = [1, 2, 3, 4, 5];
  const cumSumGen = cumulativeSum(arr);
  
  console.log(cumSumGen.next().value); 
  console.log(cumSumGen.next().value); 
  console.log(cumSumGen.next().value); 
  console.log(cumSumGen.next().value);
  console.log(cumSumGen.next().value);
  
  const result = cumSumGen.next();
  console.log(result.done);  
  console.log(result.value); 
  