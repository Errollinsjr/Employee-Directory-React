import React from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import TableHeader from "./components/TableHeader";
import axios from "axios";
 
const URL = 'https://jsonplaceholder.typicode.com/users'
 
function App() {
 
  const [employees, setEmployees] = React.useState([])
  // Query the table
  const table = document.getElementById('employee');
 
    React.useEffect(() => {
        // get Data
        getData()
 
        // Query the headers
        const headers = document.querySelectorAll('th');
        console.log(table);
        console.log(headers);
 
        // Loop over the headers
        headers.forEach((header, index) => {
          header.addEventListener('click', function() {
           
            // This function will sort the column
            sortColumn(index);
          });
        });
    }, []);
 
    const getData = async () => {
 
        const response = await axios.get(URL)
        setEmployees(response.data)
    }
 
    const removeData = (id) => {
 
        axios.delete(`${URL}/${id}`)
        .then(res => {
            const del = employees.filter(employee => id !== employee.id)
            setEmployees(del)
        })
    }
 
    const TableBody = () => {
      return employees && employees.map(({ id, name, email, phone, address }) => {
          return (
              <tr key={id}>
                  <td>{id}</td>
                  <td>{name}</td>
                  <td>{email}</td>
                  <td>{phone}</td>
                  <td>{address.city}</td>
                  <td className='deleteOperation'>
                      <button className='button' onClick={() => removeData(id)}>Delete</button>
                  </td>
              </tr>
          )
      })
  }
 
  const sortColumn = (index) => {
    console.log(index);
    const tableBody = document.getElementById('employee').querySelector('tbody');
    // const tableBody = table?.querySelector('tbody');
    const rows = tableBody.querySelectorAll('tr'); 
 
    const newRows = Array.from(rows);
 
    // Sort rows by the content of cells
    newRows.sort((rowA, rowB) => {
       // Get the content of cells
      const cellA = rowA.querySelectorAll('td')[index].innerHTML;
      const cellB = rowB.querySelectorAll('td')[index].innerHTML;
 
      // Transform the content of cells
      const a = transform(index, cellA);
      const b = transform(index, cellB);
 
      console.log(cellA + " --- " + cellB);
 
        switch (true) {
            case a > b: return 1;
            case a < b: return -1;
            case a === b: return 0;
        }
    });
   
    //remove old rows
    rows.forEach(row => tableBody.removeChild(row));
 
    //append new rows
    newRows.forEach(newRow => tableBody.appendChild(newRow));
 
  };
 
  const transform = function(index, content) {
    const headers = document.querySelectorAll('th');
    // Get the data type of column
    const type = headers[index].getAttribute('data-type');
    switch (type) {
        case 'number':
            return parseFloat(content);
        case 'string':
        default:
            return content;
    }
  };
 
 return (
    <Wrapper>
      <Title>Employee List</Title>
      <table id='employee'>
        <thead>
          <tr onClick={() => console.log(TableHeader)}>{TableHeader()}</tr>
 
        </thead>
        <tbody>
          {TableBody()}
        </tbody>
      </table>          
    </Wrapper>
  );
}
 
export default App;
