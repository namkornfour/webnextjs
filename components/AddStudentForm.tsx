"use client";

import React, { FormEvent, useState } from "react";
import { addStudent } from "@/lib/student";
import mongodbConnect from "@/lib/mongodb";

export default function AddStudentForm() {
  const [studentId, setStudentId] = useState<number>(0);
  const [studentName, setStudentName] = useState<string>("tee");
  const [score, setScore] = useState<number>(10);
  const [notes, setNotes] = useState<string>("comment");
  const [isLoading, setIsLoading] = useState(true);
  const [message, setMessage] = useState({
    text: "",
    error: false,

  });

  const formatNumberScore = new Intl.NumberFormat("en-En", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(score);

  function formatNumber(
    data: number,
    minimumDigits: number,
    maximumDigits: number
  ): string {
    return new Intl.NumberFormat("en-En", {
      minimumFractionDigits: minimumDigits,
      maximumFractionDigits: maximumDigits,
    }).format(data);
  }

  function clearData() {
    setStudentId(0);
    setStudentName("");
    setScore(0);
    setNotes("");
  }

  async function handleSubmit(event:React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    //await mongodbConnect();

    setIsLoading(true);

    try {
      setMessage({ ...message, text: "", error: false });
      await addStudent({ studentId, studentName, score, notes });      
      setMessage({ ...message, text: "Success", error: false });
      clearData();
    } catch (error: any) {
      setMessage({ ...message, text: error.message, error: true });
    } finally {
      setIsLoading(false);
    }
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex justify-center mx-auto w-1/2">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <div className="flex flex-col">
            <label htmlFor="studentId">StudentId :</label>
            <input
              type="text"
              name="studentId"
              value={studentId}
              required
              onChange={(e) => setStudentId(Number(e.target.value))}
              className="border border-blue-500"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="studentName">StudentName :</label>
            <input
              type="text"
              name="studentName"
              required
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
              className="border border-blue-500"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="score">Score :</label>
            <input
              type="text"
              name="score"
              required
              defaultValue={formatNumber(score, 2, 2)}
              onChange={(e) => setScore(Number(e.target.value))}
              className="border border-blue-500"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="notes">Note :</label>
            <input
              type="text"
              name="notes"
              value={notes}
              required
              onChange={(e) => setNotes(e.target.value)}
              className="border border-blue-500"
            />
          </div>
        </div>

        <div className="pt-4">
          <button className="btn btn-primary text-white">เพิ่มข้อมูล</button>
        </div>
      </form>
    </div>
  );
}
