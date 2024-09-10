import { useCallback } from "react";
import { CldVideoPlayer, getCldVideoUrl } from "next-cloudinary";
import { CldUploadWidget } from 'next-cloudinary';
import { Video } from "@prisma/client";

interface VideoProps {
  video: Video;
}

const VideoPlay: React.FC<VideoProps> = ({ video }) => {
  const getFullVideoUrl = useCallback((publicId: string) => {
    return getCldVideoUrl({
      src: publicId,
      width: 1920,
      height: 1080,
    });
  }, []);

  return (
    <div>
      {/* <CldVideoPlayer
        id="chapters-selector"
        // width="4096"
        // height="2160"
        
        // chapters={{
        //   0: "Chapter 1",
        //   6: "Chapter 2",
        //   9: "Chapter 3"
        // }}
        // chaptersButton
        src={getFullVideoUrl(video.publicId)}
      /> */}


 
 <CldUploadWidget uploadPreset="<Your Upload Preset>">
   {({ open }) => {
     return (
       <button onClick={() => open()}>
         Upload an Image
       </button>
     );
   }}
 </CldUploadWidget>
    </div>
  );
};

export default VideoPlay;
