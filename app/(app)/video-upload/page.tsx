"use client"
import React,{useState} from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'

export default  function VideoUploade() {
  const [file, setFile] = useState<File | null>(null)
  const [title,setTitle] = useState("")
  const [description,setDescription]=useState("")
  const [isUploading,setIsUploading]= useState(false)
  const [error, setError] = useState<string | null>(null)

  const router = useRouter()

  // max file size 60 mb
  const MAX_FILE_SIZE= 70 * 1024 *1024

  const handleSubmit = async(e:React.FormEvent) =>{
    e.preventDefault()
    if(!file) return;

    if(file.size > MAX_FILE_SIZE){
      // TODO ADD NOTIFICATION
      alert("File size too large")
      return;
    }

    setIsUploading(true)
    const formData = new FormData();
    formData.append("file",file);
    formData.append("title",title);
    formData.append("description",description);
    formData.append("originalSize",file.size.toString());

    try {
      const response = await axios.post("/api/video-upload", formData)

      // Check for 200 response
      if (response.status === 200) {
        router.push("/")
      } else {
        setError("Unexpected response status: " + response.status)
      }
    } catch (error: any) {
      console.error(error)
      setError(error?.response?.data?.error || "An error occurred while uploading the video")
    } finally {
      setIsUploading(false)
    }

  }



  return (
    <div className="container mx-auto p-4">
          <h1 className="text-2xl font-bold mb-4">Upload Video</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="label">
                <span className="label-text">Title</span>
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="input input-bordered w-full"
                required
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="textarea textarea-bordered w-full"
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text">Video File</span>
              </label>
              <input
                type="file"
                accept="video/*"
                onChange={(e) => setFile(e.target.files?.[0] || null)}
                className="file-input file-input-bordered w-full"
                required
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              disabled={isUploading}
            >
              {isUploading ? "Uploading..." : "Upload Video"}
            </button>
          </form>
        </div>
  )
}

