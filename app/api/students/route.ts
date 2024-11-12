import { NextResponse, NextRequest } from "next/server";
import mongodbConnect from "@/lib/mongodb";
import Student from "@/models/Student";

export async function GET(request: NextRequest) {
  try {
    await mongodbConnect();
    const students = await Student.find().sort({supplierId:1});

    const studentMap = students.map((student) => {
      return {
        //_id: student._id,
        studentId: student.studentId,
        studentName: student.studentName,
        score: student.score,
        notes: student.notes,                                               
      };
    });
    return NextResponse.json(studentMap, { status: 200 });
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : "Cannot get";
    return NextResponse.json({ error: errorMessage }, { status: 400 });
  }
}