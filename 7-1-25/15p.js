function createProfile({ name, age, interests }) {
    const [firstInterest, secondInterest] = interests;
  
   
    return { name, age, firstInterest, secondInterest };
  }
  
 
  const profile = createProfile({ name: 'John', age: 25, interests: ['Reading', 'Traveling', 'Cooking'] });
  console.log(profile);
  