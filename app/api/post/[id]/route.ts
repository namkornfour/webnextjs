import { NextRequest,NextResponse } from "next/server"
import prisma from "@/lib/prisma";

interface ParamsProp {
    params: {
        id: string;
    }
}

export async function PUT(req: NextRequest, {params} : {params : {id:string}}) {
    const {title,content} = await req.json();
    const id = parseInt(params.id, 10);

    try {
        const res = await prisma.post.update({
            where : {id},
            data: {
                title: title,
                content: content
            }
        })
        return NextResponse.json({message: 'Updated successfully'},{status: 200}); 
       } catch (error:unknown) {
        return NextResponse.json({error: error instanceof Error ? error.message : "Can not udpate"},{status: 500})
    }
}

export async function DELETE(req: NextRequest, {params} : {params: {id: string}}) {
    const id = parseInt(params.id, 10);

    try {
        const res = await prisma.post.delete({
            where: {id : id}
        })

        return NextResponse.json({error: 'Deleted successfully'}, {status: 200});
    } catch (error:unknown) {
        return NextResponse.json({error: error instanceof Error ? error.message: "Error"},{status: 200});
    }
}
