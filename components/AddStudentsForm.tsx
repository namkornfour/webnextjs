"use client";

import React, { ChangeEvent, FormEvent, useState } from "react";
import Link from "next/link";
import { StudentProps } from "@/types/Student";

export default function AddStudentsForm() { 

    const [formData, setFormData] = useState({
        studentId: 0,
        studentName:'',
        score: 0,
        notes: ''
    })

  const [isLoading, setIsLoading] = useState(false);

  const [message, setMessage] = useState({
    text: "",
    error: false,
  });

  function clearForm() {
    setFormData({
        studentId: 1,
        studentName: '',
        score: 0,
        notes: ''
    });
  }

  function handleChange(e:ChangeEvent<HTMLInputElement>) {
    const {name, value} = e.target;

    setFormData(prevData => {
        if(!prevData) return prevData;

        return {
            ...prevData,
            [name as keyof StudentProps]:name === "studentId" || name === "score" ? Number(value) : value
        }
    })
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setIsLoading(true);

    try {
      const res = await fetch("/api/students/add", {
        method: "POST",
        body: JSON.stringify(formData)
      });

      const student = await res.json();

      if (student.error) {
        setMessage({ ...message, text: student.error, error: true });
      } else if (student.studentId) {
        setMessage({
          ...message,
          text: "Add Student Successfully",
          error: false,
        });
        clearForm();
      }
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error ? error.message : "Error Cannot add Student";
      setMessage({ ...message, text: errorMessage, error: true });
    } finally {
      setIsLoading(false);
    }
  }

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="flex justify-center mx-auto w-1/2">
      <div>{message.text}</div>

      <form onSubmit={handleSubmit}>
        <div className="pt-4 space-y-4">
          <div>
            <label htmlFor="studentId" className="pr-4">
              StudentId
            </label>
            <input
              type="number"
              name="studentId"
              required
              defaultValue={1}
              className="border border-blue-500"
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="studentName" className="pr-4">
              StudentName
            </label>
            <input
              type="text"
              name="studentName"
              required
              className="border border-blue-500"
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="score" className="pr-4">
              Score
            </label>
            <input
              type="number"
              name="score"
              required
              defaultValue={0}
              className="border border-blue-500"
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="notes" className="pr-4">
              Notes
            </label>
            <input
              type="text"
              name="notes"
              required
              className="border border-blue-500"
              onChange={handleChange}
            />
          </div>

          <div>
            <div>
              <Link href={"/student"}>หน้าหลัก</Link>
            </div>
            <div>
              <button type="submit" className="btn btn-primary text-white">
                เพิ่ม
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
