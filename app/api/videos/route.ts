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

// Create a singleton instance of PrismaClient
const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  try {
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
    // Don't disconnect Prisma in every request for serverless
  }
}

