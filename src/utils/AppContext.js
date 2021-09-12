import React from "react";

const AppContext = React.createContext({
    allEmployees: [],
    setAllEmployees: [],
    employeeList: [],
    setAllEmployeeList: [],
    searchTerm: '',
    setSearchTerm: '',
    handleClick: () => {},
    handleChange: () => {}
});

export default AppContext;
