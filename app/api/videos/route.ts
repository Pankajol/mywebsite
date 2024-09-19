// import {NextRequest,NextResponse} from "next/server"
// import {PrismaClient} from "@prisma/client"

// const prisma = new PrismaClient()

// export async function GET(request:NextRequest){
//     try {
//         const videos = await prisma.video.findMany({
//             orderBy:{createdAt:"desc"}
//         })
//         return NextResponse.json(videos)
//     } catch (error) {
//         return NextResponse.json({error:"Error fetching videos"},
//             {status:500}
//         )
//     }
//     finally{
//         await prisma.$disconnect()
//     }
// }


//  chatgpt

import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

// Reuse Prisma Client for serverless environments (Vercel)
const globalForPrisma = global as unknown as { prisma: PrismaClient };
export const prisma = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

export async function GET(request: NextRequest) {
  try {
    // Ensure 'createdAt' field exists in your Video model in Prisma schema
    const videos = await prisma.video.findMany({
      orderBy: { createdAt: 'desc' }
    });
    return NextResponse.json(videos);
  } catch (error) {
    console.error("Error fetching videos:", error);
    return NextResponse.json(
      { error: 'Error fetching videos' },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
