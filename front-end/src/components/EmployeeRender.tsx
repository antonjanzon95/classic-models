import { useState, useEffect } from "react";

export interface Employee {
  firstName: string;
  lastName: string;
  email: string;
  jobTitle: string;
}

interface Props {
  employees: Employee[];
}

const EmployeeRender: React.FC<Props> = ({ employees }) => {
  return (
    <>
      <table className="mx-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Job Title</th>
          </tr>
        </thead>
        <tbody className="[&>*:nth-child(odd)]:bg-gray-200">
          {employees.map((employee, index) => (
            <tr key={index}>
              <td className="px-4 py-2">{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.email}</td>
              <td>{employee.jobTitle}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default EmployeeRender;
