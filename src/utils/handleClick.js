import { useContext } from 'react';
import AppContext from './AppContext';

const HandleClick = () => {
    const { searchTerm, setEmployeeList, allEmployees } = useContext(AppContext);
    
    if(!searchTerm) {
      setEmployeeList(allEmployees)
    } else {
        const filteredEmployees = allEmployees.filter((employee) => { 
        const employeeName = employee.name.toLowerCase();
        const searchedName = searchTerm.toLowerCase();
          
        return employeeName.includes(searchedName)
      });

      setEmployeeList(filteredEmployees)
    } 
  };

  export default HandleClick;