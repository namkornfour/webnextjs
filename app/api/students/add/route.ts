import { NextRequest, NextResponse } from "next/server";
import Student from "@/models/Student";

export async function POST(request: NextRequest) {
  const { studentId, studentName, score, notes } = await request.json();

  try {
    const students = await Student.create({
      studentId,
      studentName,
      score,
      notes,
    });

    const studentMap = {
      //_id: students._id,
      studentId: students.studentId,
      studentName: students.studentName,
      score: students.score,
      notes: students.notes,
    };

    return NextResponse.json(studentMap);
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : "Cannot create";
    return NextResponse.json({ error: errorMessage }, { status: 400 });
  }
}
