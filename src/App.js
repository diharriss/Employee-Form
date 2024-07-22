import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import EmployeeForm from './components/EmployeeForm';
import EmployeeList from './components/EmployeeList';
import EmployeeDetail from './components/EmployeeDetail';

function App() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const storedEmployees = localStorage.getItem('employees');
    if (storedEmployees) {
      setEmployees(JSON.parse(storedEmployees));
    }
  }, []);

  const addEmployee = (newEmployee) => {
    setEmployees([...employees, newEmployee]);
    saveData([...employees, newEmployee]); // Pass updated employees array to saveData
  };

  const saveData = (data) => {
    localStorage.setItem('employees', JSON.stringify(data));
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <EmployeeForm addEmployee={addEmployee} />
                <EmployeeList employees={employees} />
              </>
            }
          />
          <Route
            path="/employees/:employeeId"
            element={<EmployeeDetail employees={employees} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;