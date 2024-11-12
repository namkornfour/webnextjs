"use client";

import React, { FormEvent, useState } from "react";
//import { addEmployee } from "@/lib/employee";

export default function AddEmployeeForm() {
  const [name, setName] = useState<string>("");
  const [surname, setSurName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [score, setScore] = useState<number>(0);

  function clearForm() {
    setName('');
    setSurName('');
    setEmail('');
    setAddress('');
    setScore(0);
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault(); // ป้องกันการโหลดหน้าใหม่
    
    try {
      const res = await fetch("/api/employee/add", {
        method: "POST",
        body: JSON.stringify({
          name,
          surname,
          email,
          address,
          score,
        }),
      });

      const result = await res.json();

      if(result._id) {
        clearForm();
      }
      else if (result.error){
        console.log('Can not Add Employee');
      }
    } catch (error: any) {
      console.error("Error:", error); // ดูข้อผิดพลาด
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <div className="flex flex-col w-1/6">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              className="border border-blue-500"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="flex flex-col w-1/6">
            <label htmlFor="surname">SurName</label>
            <input
              type="text"
              name="surname"
              className="border border-blue-500"
              value={surname} // กำหนด value ที่นี่
              onChange={(e) => setSurName(e.target.value)}
            />
          </div>
          <div className="flex flex-col w-1/6">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              className="border border-blue-500"
              value={email} // กำหนด value ที่นี่
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col w-1/6">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              name="address"
              className="border border-blue-500"
              value={address} // กำหนด value ที่นี่
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className="flex flex-col w-1/6">
            <label htmlFor="score">Score</label>
            <input
              type="number"
              name="score"
              className="border border-blue-500"
              value={score} // กำหนด value ที่นี่
              onChange={(e) => setScore(Number(e.target.value))}
            />
          </div>
        </div>

        <div>
          <button type="submit">เพิ่มข้อมูล</button>
        </div>
      </form>
    </div>
  );
}
