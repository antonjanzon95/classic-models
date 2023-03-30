import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import EmployeeRender from "../components/EmployeeRender";
import { Employee } from "../components/EmployeeRender";

const Offices = () => {
  const { officeCode } = useParams();
  const [employees, setEmployees] = useState<Employee[]>([]);

  useEffect(() => {
    const fetchEmployeesByOfficeCode = async () => {
      const response = await fetch(
        `http://localhost:3000/employees/${officeCode}`
      );
      const data = await response.json();
      setEmployees(data);
    };
    fetchEmployeesByOfficeCode();
  }, [officeCode]);

  return (
    <>
      <h1 className="mt-20 font-extrabold text-5xl text-center">Employees</h1>
      <EmployeeRender employees={employees} />
    </>
  );
};

export default Offices;
