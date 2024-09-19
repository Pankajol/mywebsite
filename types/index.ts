export interface Video {
    id: string
    title: string
    description: string
    publicId: string
    originalSize: string
    compressedSize: string
    duration: number
    createdAt: Date
    updatedAt: Date
}

// export interface Video {
//     id: number; // Ensure this is 'number'
//     title: string;
//     description: string;
//     publicId: string;
//     createdAt: Date;
//     updatedAt: Date;
// }
