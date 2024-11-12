import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  try {
    const posts = await prisma.post.findMany();
   
    const postMap = posts.map((post) => ({
      id: post.id,
      title: post.title,
      content: post.content,
      published: post.published,
      createdAt: post.cratedAt
    }));

    return NextResponse.json(postMap, { status: 200 });
    } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : "Cannot get data";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  const {title,content} = await req.json();

  try {
    const post = await prisma.post.create({
      data: {        
        title,
        content
      }
    })

    /*const postMap = {
      id: post.id,
      title: post.title,
      content: post.content
    }

    return NextResponse.json(postMap, {status: 200});*/
    return NextResponse.json({message: 'Created successfully'},{status:200});
    
  } catch (error:unknown) {
    return NextResponse.json({error: error instanceof Error ? error.message : 'Cannot Add Data'}, {status : 500});
  }
}

