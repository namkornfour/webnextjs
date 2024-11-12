"use client";

import Student from "@/models/Student";
import { StudentProps } from "@/types/Student";
import mongodbConnect from "@/lib/mongodb";

export async function addStudent(student: StudentProps): Promise<void> {
  const newStudent = {
    studentId: student.studentId,
    studentName: student.studentName,
    score: student.score,
    notes: student.notes,
  };
  
  try {
    await mongodbConnect();

    await Student.create(newStudent);
    //const newStu = new Student(newStudent);
    //await newStu.save();
    //console.log('Student saved successfully:', newStu);
  } catch (error: any) {
    //throw error.message;
    if (error instanceof Error) {
      console.error("Error creating student:", error);
      throw new Error(`Error creating student: ${error.message}`);
    }
    throw error; // Rethrow if not an instance of Error
  }
}
