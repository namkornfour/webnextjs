import mongoose, { Schema, Document, Model } from 'mongoose';

// กำหนด interface ของ TypeScript สำหรับ Student document
interface StudentDocument extends Document {
  studentId: number;
  studentName: string;
  score: number;
  notes?: string;
}

// กำหนด Mongoose schema
const studentSchema: Schema = new Schema(
  {
    studentId: { type: Number, required: true, default: 0 },
    studentName: { type: String, required: true },
    score: { type: Number, required: true, default: 0 },
    notes: { type: String },
  },
  { timestamps: true }
);

const Student: Model<StudentDocument> =
  mongoose.models?.Student || mongoose.model<StudentDocument>('Student', studentSchema);

export default Student;