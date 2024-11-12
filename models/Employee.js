import mongoose, { Schema, model, models } from "mongoose";

const employeeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        //unique: true // ตรวจสอบว่า email ซ้ำกันไม่ได้
    },
    address: {
        type: String,
        required: true
    },
    score: {
        type: Number,
        required: true
    }
});

//delete models.Employee;

//console.log("Mongoose models:", models);

const Employee = models?.Employee || model("Employee", employeeSchema);

export default Employee;