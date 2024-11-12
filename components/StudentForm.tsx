'use client'

import React, { useState, useEffect } from "react";
import { StudentProps } from "@/types/Student";

export default function StudentForm() {
  const [data, setData] = useState<StudentProps | null>(null);

  async function fetchData() {
    const res = await fetch("/api/students/1", {
      method: "GET", // ลบ body ออก
    });
    const student = await res.json();
    //console.log(student);
    setData(student);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (<div className="flex justify-center mx-auto">
    <div className="flex flex-col">
    <div>{data?.studentName}</div>
    <div>{data?.score}</div>
    </div>
  </div>);
}
