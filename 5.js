function fetchData(url) {
    return new Promise((resolve, reject) => {
      if (url.includes("error")) {
        reject("Error: URL contains the word 'error'");
      } else {
        resolve("Data fetched successfully.");
      }
    });
  }
  

  
 
  fetchData("https://example.com")
    .then(response => console.log(response))  
    .catch(error => console.log(error));
 
  fetchData("https://example.com/error")
    .then(response => console.log(response))
    .catch(error => console.log(error));       
  