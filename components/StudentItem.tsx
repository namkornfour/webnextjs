import React from "react";
import { StudentProps } from "@/types/Student";
import EditStudentButtton from "./EditStudentButtton";
import DeleteStudentButton from "./DeleteStudentButton";

interface Props {
  student: StudentProps;
}

export default function StudentItem({ student }: Props) {
  return (
    <div className="flex justify-center mx-auto w-1/2">
      <div className="flex flex-col justify-center mx-auto">
        <div className="text-blue-500">{student.studentId}</div>
        <div>{student.studentName}</div>
        <div>{student.score}</div>
        <div>{student.notes}</div>
        <div className="flex space-x-4">
          <EditStudentButtton id={student.studentId} />
          <DeleteStudentButton student={student}/>
        </div>
      </div>
    </div>
  );
}