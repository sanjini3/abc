function mergeUserData(...userData) {
    return { ...userData[0], ...userData[1], ...userData[2] };
  }
  
 
  const userDetails = { name: 'CVR', age: 20 };
  const userAddress = { address: 'Mangalpally', city: 'Hyderabad' };
  const userPreferences = { theme: 'Engineering', language: 'English' };
  
  const res = mergeUserData(userDetails, userAddress, userPreferences);
  console.log(res);
  
  