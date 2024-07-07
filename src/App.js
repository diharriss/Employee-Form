import React, { useState, useEffect } from 'react';
import './App.css';
import EmployeeForm from './components/EmployeeForm';

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
    saveData();
  };

  const saveData = () => {
    localStorage.setItem('employees', JSON.stringify(employees));
  };

  return (
    <div className="App">
      <EmployeeForm addEmployee={addEmployee} />
    </div>
  );
}

export default App;