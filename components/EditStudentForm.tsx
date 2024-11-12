"use client";

import React, { useState, useEffect, FormEvent, ChangeEvent } from "react";
import { StudentProps } from "@/types/Student";
import { mutate } from "swr";
import Link from "next/link";

interface Props {
  id: number;
}

export default function EditStudentForm({ id }: Props) {
  const [data, setData] = useState<StudentProps | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState({
    text: "",
    error: false,
  });

  async function getData() {
    setIsLoading(true);
    const res = await fetch(`/api/students/${id}`, { method: "GET" }); //method: 'GET' Default
    if (!res.ok) {
      setMessage({ text: "Cannont get data", error: true });
    }

    const student = await res.json();

    setData(student);

    setIsLoading(false);
  }

  async function updateData() {
    const res = await fetch(`/api/students/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        studentId: data?.studentId,
        studentName: data?.studentName,
        score: data?.score,
        notes: data?.notes,
      }),
    });

    if (!res.ok) {
      setMessage({ text: "Cannont update", error: true });
      return;
    }

    return res.json();
  }

  useEffect(() => {
    getData();
  }, []);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    //setIsLoading(true);
    try {
      setMessage({ ...message, text: "", error: false });
      await updateData();
      setMessage({
        ...message,
        text: "Update student successfully",
        error: true,
      });
      mutate("/api/students");
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error ? error.message : "Error cannot update";
      setMessage({ ...message, text: errorMessage, error: true });
    } finally {
      setIsLoading(false);
    }
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;

    setData((prevData) => {
      if (!prevData) return prevData;

      return {
        ...prevData,
        [name as keyof StudentProps]:
          name === "supplierId" || name === "score" ? Number(value) : value,
      };
    });
  }

  if (!data) {
    return null;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex justify-center mx-auto w-3/4">
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
              readOnly
              className="border border-blue-500"
              value={data?.studentId}
            />
          </div>

          <div>
            <label htmlFor="studentName" className="pr-4">
              StudentName
            </label>
            <input
              type="text"
              name="studentName"
              className="border border-blue-500"
              defaultValue={data?.studentName}
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
              className="border border-blue-500"
              defaultValue={data?.score}
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
              className="border border-blue-500"
              defaultValue={data?.notes}
              onChange={handleChange}
            />
          </div>

          <div>
            <Link href={"/student"}>หน้าหลัก</Link>
          </div>
          <div>
            <button type="submit" className="btn btn-primary text-white">
              Update
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
