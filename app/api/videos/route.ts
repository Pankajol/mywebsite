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

// Ensure that Prisma Client is instantiated without exporting it
const globalForPrisma = global as unknown as { prisma: PrismaClient };
const prisma = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

export async function GET(request: NextRequest) {
  try {
    // Fetch videos from Prisma
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

