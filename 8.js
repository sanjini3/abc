function fetchDataWithTimeout(timeoutDuration) {
    return new Promise((resolve, reject) => {
      const timeout = setTimeout(() => {
        reject(new Error(`Request timed out after ${timeoutDuration}ms`));
      }, timeoutDuration);
  
      setTimeout(() => {
        clearTimeout(timeout); 
        resolve("Data fetched successfully!");
      }, Math.random() * timeoutDuration);  
    });
  }
  
  fetchDataWithTimeout(3000)
    .then(response => console.log(response))
    .catch(error => console.error(error.message));
  