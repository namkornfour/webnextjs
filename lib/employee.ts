import Employee from "@/models/Employee";
import { EmployeeProps } from "@/types/Employee";
import mongodbConnect from "./mongodb";

export async function addEmployee(emp: EmployeeProps): Promise<void> {  

  const newEmployee = {
    name: emp.name,
    surname: emp.surname,
    email: emp.email,
    address: emp.address,
    score: emp.score,
  };
  
  try {
    await mongodbConnect();

    await Employee.create(newEmployee);    
  } catch (error: any) {
    console.error("Error adding employee:", error.message);
    console.error(error.stack); // เพิ่มการแสดงผล stack trace
    throw error;
  }
}
