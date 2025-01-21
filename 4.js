function fetchDataWithCallback(success, callback) {
    setTimeout(() => {
      if (success) {
        callback(null, "Data fetched successfully!");
      } else {
        callback("Error fetching data", null);
      }
    }, 2000); 
  }
  

  fetchDataWithCallback(true, (error, data) => {
    if (error) {
      console.log("Error:", error);
    } else {
      console.log("Success:", data); 
    }
  });
  

  fetchDataWithCallback(false, (error, data) => {
    if (error) {
      console.log("Error:", error);  
    } else {
      console.log("Success:", data);
    }
  });
  