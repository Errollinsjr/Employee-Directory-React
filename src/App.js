import React from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import employees from './employees.json';
import EmployeeTable from "./components/EmployeeTable";


function App() {
  return (
    <Wrapper>
      <Title>Employee List</Title>
      {employees.map(employee =>
      <EmployeeTable 
      name={employee.name} 
      image={employee.image} 
      occupation={employee.occupation} 
      location={employee.location}
      />
      )};           
    </Wrapper>
  );
}

export default App;
