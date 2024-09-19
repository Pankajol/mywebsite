// "use client"
// import React, { useState, useEffect, useCallback } from 'react'
// import axios from 'axios'

// import VideoPlay from '@/components/video'
// import { Video } from '@/types'

// function MyVideo() {
//     const [videos, setVideos] = useState<Video[]>([])
//     const [loading, setLoading] = useState(true)
//     const [error, setError] = useState<string | null>(null)

//     const fetchVideos = useCallback(async () => {
//         try {
//             const response = await axios.get("/api/videos")
//             if (Array.isArray(response.data)) {
//                 setVideos(response.data)
//             } else {
//                 throw new Error(" Unexpected response format");

//             }
//         } catch (error) {
//             console.log(error);
//             setError("Failed to fetch videos")

//         } finally {
//             setLoading(false)
//         }
//     }, [])

//     useEffect(() => {
//         fetchVideos()
//     }, [fetchVideos])

//     if (loading) {
//         return <div>Loading...</div>
//     }
//     return (
//         <div className="container  p-4">
          
//           <h1 className="text-2xl font-bold mb-4">Videos with details</h1>
//           {videos.length === 0 ? (
//             <div className="text-center text-lg text-gray-500">
//               No videos available
//             </div>
//           ) : (
//             <div className="">
//               {
//                 videos.map((video) => (
//                     <VideoPlay
//                         key={video.id}
//                         video={video}
                        
//                     />
                    
//                 ))
//               }
              
              
//             </div>
            
//           )}
//         </div>
//       );
// }

// export default MyVideo