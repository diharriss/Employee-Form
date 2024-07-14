import React from 'react';
import { Link } from 'react-router-dom';
import './EmployeeForm.css';

function EmployeeList(props) {
  return (
    <div className="employee-list">
      <h1>Employees List</h1>
      <ul>
        {props.employees.map((employee) => (
          <li key={employee.email}>
            <Link to={`/employees/${employee.email}`}>
              {employee.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EmployeeList;