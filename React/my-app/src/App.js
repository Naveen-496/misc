import React, { useState } from "react";
import "./App.css";

function EmployeeCategory({ category }) {
  return (
    <tr>
      <th colSpan="3">{category}</th>
    </tr>
  );
}

function Employee({ employee }) {
  const name = !employee.retired ? (
    employee.name
  ) : (
    <span style={{ color: "red" }}>{employee.name}</span>
  );
  return (
    <tr>
      <td>{name}</td>
      <td>{`------> ${employee.salary}`}</td>
    </tr>
  );
}

function EmployeeTable({ employees, filterText, isRetired }) {
  const rows = [];
  let lastCategory = null;

  employees.forEach((employee) => {
    if (employee.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
      return;
    }

    if (isRetired && !employee.retired) {
      return;
    }

    if (employee.category !== lastCategory) {
      rows.push(
        <EmployeeCategory
          category={employee.category}
          key={employee.category}
        />
      );
    }
    rows.push(<Employee employee={employee} key={employee.name} />);

    lastCategory = employee.category;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Salary</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

function SearchBar({
  filterText,
  isRetired,
  onFilterChange,
  onIsRetiredChange,
}) {
  return (
    <form>
      <input
        type="text"
        value={filterText}
        onChange={(e) => onFilterChange(e.target.value)}
      />

      <label>
        <input
          type="checkbox"
          checked={isRetired}
          onChange={(e) => onIsRetiredChange(e.target.checked)}
        />
        only retired employees
      </label>
    </form>
  );
}

function FilterEmployeeTable({ employees }) {
  const [filterText, setFilterText] = useState("");
  const [isRetired, setIsRetired] = useState(false);

  return (
    <div>
      <SearchBar
        filterText={filterText}
        onFilterChange={setFilterText}
        isRetired={isRetired}
        onIsRetiredChange={setIsRetired}
      />
      <EmployeeTable
        filterText={filterText}
        employees={employees}
        isRetired={isRetired}
      />
    </div>
  );
}

const EMPLOYEES = [
  {
    category: "Developer",
    name: "Naveen Reddy",
    salary: 25000,
    retired: false,
  },
  { category: "Developer", name: "Sree Kumar", salary: 250000, retired: true },
  {
    category: "Developer",
    name: "Gururaj Yadki",
    salary: 35000,
    retired: false,
  },
  { category: "Developer", name: "Sachin B C", salary: 45000, retired: false },
  { category: "Tester", name: "Veerana Gouda", salary: 45000, retired: false },
  { category: "Tester", name: "Likith M D", salary: 30000, retired: true },
  { category: "Tester", name: "Joker C", salary: 25000, retired: false },
  { category: "Tester", name: "Shambu Nath", salary: 55000, retired: false },
];


const App = () => {
  return (
    <div className="App">
      <FilterEmployeeTable employees={EMPLOYEES} />
    </div>
  );
};



export default App;
