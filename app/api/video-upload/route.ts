// import { NextRequest, NextResponse } from 'next/server';
// import { v2 as cloudinary, UploadApiOptions,  } from 'cloudinary';
// import { auth } from '@clerk/nextjs/server';
// import { PrismaClient, Video } from '@prisma/client';

// const prisma = new PrismaClient();

// // Configuration
// cloudinary.config({
//   cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });

// interface CloudinaryUploadResult {
//   public_id: string;
//   bytes: number;
//   duration?: number;
//   [key: string]: any;
// }

// export async function POST(request: NextRequest) {
//   try {
//     // Check environment variables
//     if (
//       !process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME ||
//       !process.env.CLOUDINARY_API_KEY ||
//       !process.env.CLOUDINARY_API_SECRET
//     ) {
//       return NextResponse.json(
//         { error: 'Cloudinary credentials not found' },
//         { status: 500 }
//       );
//     }

//     // Retrieve form data
//     const formData = await request.formData();
//     const file = formData.get('file') as File | null;
//     const title = formData.get('title') as string;
//     const description = formData.get('description') as string;
//     const originalSize = formData.get('originalSize') as string;

//     if (!file) {
//       return NextResponse.json(
//         { error: 'File not found' },
//         { status: 400 }
//       );
//     }

//     console.log('File:', file);
//     console.log('Title:', title);
//     console.log('Description:', description);
//     console.log('Original Size:', originalSize);

//     // Convert file to buffer
//     const bytes = await file.arrayBuffer();
//     const buffer = Buffer.from(bytes);
//     console.log('Buffer size:', buffer.length);

//     // Upload to Cloudinary with retry
//     const result = await uploadWithRetry(buffer, {
//       resource_type: 'video',
//       folder: 'video-uploads',
//       transformation: [{ quality: 'auto', fetch_format: 'mp4' }],
//       timeout: 60000, // Increase timeout
//     });

//     // Save video info in the database
//     const video = await prisma.video.create({
//       data: {
//         title,
//         description,
//         publicId: result.public_id,
//         originalSize: originalSize,
//         compressedSize: String(result.bytes),
//         duration: result.duration || 0,
//       },
//     });

//     return NextResponse.json(video);
//   } catch (error: any) {
//     console.error('Upload video failed:', error.message, error.stack);
//     return NextResponse.json(
//       { error: `Upload video failed: ${error.message}` },
//       { status: 500 }
//     );
//   } finally {
//     await prisma.$disconnect();
//   }
// }

// async function uploadWithRetry(
//   buffer: Buffer,
//   options: UploadApiOptions,
//   maxRetries = 3
// ): Promise<CloudinaryUploadResult> {
//   let attempt = 0;
//   while (attempt < maxRetries) {
//     try {
//       const result = await new Promise<CloudinaryUploadResult>((resolve, reject) => {
//         const uploadStream = cloudinary.uploader.upload_stream(
//           options,
//           (error, result) => {
//             if (error) {
//               console.error('Cloudinary upload error:', error);
//               reject(error);
//             } else {
//               console.log('Cloudinary upload result:', result);
//               resolve(result as CloudinaryUploadResult);
//             }
//           }
//         );
//         uploadStream.end(buffer);
//       });
//       return result; // Successfully uploaded, exit function
//     } catch (error) {
//       attempt++;
//       console.error(`Attempt ${attempt} failed with error:`, error);
//       if (attempt >= maxRetries) {
//         throw new Error('Max retries reached. Upload failed.');
//       }
//       await new Promise((resolve) => setTimeout(resolve, 2000 * attempt)); // Exponential backoff
//     }
//   }
//   throw new Error('Upload failed after retries');
// }



// chatgpt
import { NextRequest, NextResponse } from 'next/server';
import { v2 as cloudinary, UploadApiOptions } from 'cloudinary';
import { PrismaClient } from '@prisma/client';

// Initialize Prisma client (do not export it)
const prisma = new PrismaClient();

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Interface for Cloudinary upload response
interface CloudinaryUploadResult {
  public_id: string;
  version: number;
  bytes: number;
  format: string;
  resource_type: string;
  secure_url: string;
  duration?: number;
}

// Video upload POST API
export async function POST(request: NextRequest) {
  try {
    // Parse form data
    const formData = await request.formData();
    const file = formData.get('file') as File | null;
    const title = formData.get('title') as string;
    const description = formData.get('description') as string;
    const originalSize = formData.get('originalSize') as string;

    if (!file) {
      return NextResponse.json({ error: 'File not found' }, { status: 400 });
    }

    // Convert file to buffer
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Upload to Cloudinary
    const result = await uploadWithRetry(buffer, {
      resource_type: 'video',
      folder: 'video-uploads',
      transformation: [{ quality: 'auto', fetch_format: 'mp4' }],
      timeout: 60000,
    });

    // Save video info to the database
    const video = await prisma.video.create({
      data: {
        title,
        description,
        publicId: result.public_id,
        originalSize,
        compressedSize: String(result.bytes),
        duration: result.duration || 0,
      },
    });

    return NextResponse.json(video);
  } catch (error: any) {
    console.error('Video upload failed:', error.message);
    return NextResponse.json(
      { error: `Video upload failed: ${error.message}` },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}

// Function to upload to Cloudinary with retry logic
async function uploadWithRetry(
  buffer: Buffer,
  options: UploadApiOptions,
  maxRetries = 3
): Promise<CloudinaryUploadResult> {
  let attempt = 0;
  while (attempt < maxRetries) {
    try {
      const result = await new Promise<CloudinaryUploadResult>((resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream(options, (error, result) => {
          if (error) {
            reject(error);
          } else {
            resolve(result as CloudinaryUploadResult);
          }
        });
        uploadStream.end(buffer);
      });
      return result;
    } catch (error) {
      attempt++;
      if (attempt >= maxRetries) {
        throw new Error('Max retries reached. Upload failed.');
      }
      await new Promise((resolve) => setTimeout(resolve, 2000 * attempt)); // Exponential backoff
    }
  }
  throw new Error('Upload failed after retries');
}

