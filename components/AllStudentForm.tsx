"use client";

import React from "react";
import { useStudent } from "@/hooks/useStudent";
import { StudentProps } from "@/types/Student";
import StudentItem from "./StudentItem";
import Link from "next/link";

export default function AllStudentForm() {
  const { data, isLoading, error, mutate } = useStudent();

  if (error) {
    return <div>{error.message}</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (data?.length === 0) {
    return (
      <div className="flex justify-center mx-auto">
        <div>ไม่พบสินค้า</div>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center mx-auto">
      <div className="flex justify-center mx-auto">
        <Link href={'/student/add'}>Add Student</Link>
      </div>
      {data?.map((st: StudentProps) => {
        return <StudentItem key={st.studentId} student={st} />;        
      })}
    </div>
  );
}