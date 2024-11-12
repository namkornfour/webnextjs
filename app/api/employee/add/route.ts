import Employee from '@/models/Employee'
import mongodbConnect from '@/lib/mongodb'
import { NextResponse } from 'next/server'

export async function POST (request: Request) {
    try {
        const {name, surname, email, address, score} = await request.json();
        
        await mongodbConnect();

        const employee = await Employee.create({
            name: name.trim(),
            surname,
            email,
            address,
            score
        });

        const employeeMap = {            
            _id: employee._id,
            productSKU: employee.productSKU,
            productName: employee.productName,
            price : employee.price,
            score: employee.score
        }
    
        return NextResponse.json(employeeMap);

    } catch (error:unknown) {
        let errorMessage = 'Unknown'
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
        if (error instanceof Error) {
            errorMessage = error.message;
          }

        return NextResponse.json({error: errorMessage});
    }
}