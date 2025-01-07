function updateEmployeeDetails(employee, newRole) {
    return { ...employee, role: newRole };
  }
  
 
  const employee = { name: 'san', role: 'professor', age: 20, location: 'hyderabad' };
  const updatedEmployee = updateEmployeeDetails(employee, 'student');
  console.log(updatedEmployee);
  
  