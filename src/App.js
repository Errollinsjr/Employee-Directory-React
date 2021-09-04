import React from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import TableHeader from "./components/TableHeader";
import axios from "axios";

const URL = 'https://jsonplaceholder.typicode.com/users'

function App() {

  const [employees, setEmployees] = React.useState([])

    React.useEffect(() => {
        getData()
    }, [])

    const getData = async () => {

        const response = await axios.get(URL)
        setEmployees(response.data)
    }

    const removeData = (id) => {

        axios.delete(`${URL}/${id}`)
        .then(res => {
            const del = employees.filter(employee => id !== employee.id)
            setEmployees(del)
        })
    }

    const TableBody = () => {
      return employees && employees.map(({ id, name, email, phone, address }) => {
          return (
              <tr key={id}>
                  <td>{id}</td>
                  <td>{name}</td>
                  <td>{email}</td>
                  <td>{phone}</td>
                  <td>{address.city}</td>
                  <td className='deleteOperation'>
                      <button className='button' onClick={() => removeData(id)}>Delete</button>
                  </td>
              </tr>
          )
      })
  }

  return (
    <Wrapper>
      <Title>Employee List</Title>
      <table id='employee'>
        <thead>
          <tr>{TableHeader()}</tr>
        </thead>
        <tbody>
          {TableBody()}
        </tbody>
      </table>           
    </Wrapper>
  );
}

export default App;
