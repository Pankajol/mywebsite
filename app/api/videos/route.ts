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

// Create the Prisma client, but avoid creating multiple instances in dev (important in serverless environments)
const prisma = global.prisma || new PrismaClient();
if (process.env.NODE_ENV !== 'production') global.prisma = prisma;

export async function GET(request: NextRequest) {
    try {
        // Fetch videos, ordering by creation date in descending order
        const videos = await prisma.video.findMany({
            orderBy: { createdAt: 'desc' },
        });
        return NextResponse.json(videos);
    } catch (error) {
        console.error("Error fetching videos:", error);
        return NextResponse.json(
            { error: 'Error fetching videos' },
            { status: 500 }
        );
    } finally {
        // Prisma's disconnect is generally handled by Next.js runtime,
        // but explicitly calling it for long-running connections
        if (process.env.NODE_ENV === 'production') {
            await prisma.$disconnect();
        }
    }
}



  

