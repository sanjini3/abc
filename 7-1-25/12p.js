function createProfile({ name, email }) {
    return { name, email };
  }
  
 
  const user = {
    name: 'san',
    age: 20,
    email: 's@gmail.com',
    address: 'Hyderabad'
  };
  
  const profile = createProfile(user);
  console.log(profile); 
  
  