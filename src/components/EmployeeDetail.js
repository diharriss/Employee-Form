import React from 'react';
import { useParams } from 'react-router-dom';
import './EmployeeForm.css';

function EmployeeDetail({ employees }) {
    const { employeeId } = useParams();
    const employee = employees.find(emp => emp.email === employeeId);

    return (
        <div className="employee-detail">
            <h1>Employee Details</h1>
            <h1>{employee.name}</h1>
            <table>
                <tbody>
                    <tr key="email">
                        <td><label>Email:</label></td>
                        <td>{employee.email}</td>
                    </tr>
                    <tr key="jobTitle">
                        <td><label>Job Title:</label></td>
                        <td>{employee.title}</td>
                    </tr>
                    <tr key="department">
                        <td><label>Department:</label></td>
                        <td>{employee.department}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default EmployeeDetail;
