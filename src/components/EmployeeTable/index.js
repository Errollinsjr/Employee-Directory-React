import React from "react";
import "./style.css";

function EmployeeTable(props) {
  
  return (
    <div className="card mb-4">
        <div className="card-header">
            <i className="fas fa-table me-1"></i>
            Employee Table
        </div>
        <div className="card-body">
            <table id="datatablesSimple">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Location</th>
                        <th>Email</th>
                        <th>Age</th>
                        <th>Phone</th>                                  
                    </tr>
                </thead>
                <tfoot>
                    <tr>
                        <th>Name</th>
                        <th>Location</th>
                        <th>Email</th>
                        <th>Age</th>
                        <th>Phone</th>      
                    </tr>
                </tfoot>

                <tbody>
                    <tr>
                      <td>{props.name}</td>
                      <td>{props.location}</td>
                      <td>{props.email}</td>
                      <td>{props.age}</td>
                      <td>{props.phone}</td>   
                    </tr>            
                </tbody>

            </table>
        </div>
      </div>
    );
}

export default EmployeeTable;
