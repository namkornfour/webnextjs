import { NextRequest, NextResponse } from "next/server";
import Student from "@/models/Student";

interface Params {
  params: {
    id: string;
  };
}

export async function GET(request: NextRequest, { params }: Params) {
  const { id } = params;

  try {
    const student = await Student.findOne({ studentId: id });

    if (!student) {
      return NextResponse.json({ message: "Data not found" }, { status: 404 });
    }

    const studentMap = {
      //_id: student._id,
      studentId: student.studentId,
      studentName: student.studentName,
      score: student.score,
      notes: student.notes,
    };

    return NextResponse.json(studentMap, { status: 200 });
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : "Cannot get";
    return NextResponse.json({ error: errorMessage }, { status: 400 });
  }
}

export async function PUT(request: NextRequest, { params }: Params) {
  const { id } = params;
  const { studentId, studentName, score, notes } = await request.json();

  try {
    const student = await Student.findOneAndUpdate(
      { studentId: id },
      { studentId, studentName, score, notes },
      { new: true }
    );

    if (!student) {
      return NextResponse.json(
        { message: "Not found update" },
        { status: 404 }
      );
    }

    const studentMap = {
      _id: student.studentId,
      studentId: student.studentId,
      studentName: student.studentName,
      score: student.score,
      notes: student.notes,
    };

    return NextResponse.json(studentMap, { status: 200 });
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : "Cannot update";
    return NextResponse.json({ error: errorMessage }, { status: 400 });
  }
}

export async function DELETE(request: NextRequest, { params }: Params) {
  const { id } = params;
  try {
    const student = await Student.findOneAndDelete({ studentId: id });

    if (!student) {
      return NextResponse.json(
        { message: "No student deleted" },
        { status: 404 }
      );
    }

    const studentMap = {
      _id: student._id,
    };

    return NextResponse.json(studentMap, { status: 200 });
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : "Cannot delete";
    return NextResponse.json({ error: errorMessage }, { status: 400 });
  }
}
