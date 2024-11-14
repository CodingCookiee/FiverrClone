import axios from "axios";

const upload = async (file) => {
  const data = new FormData();
  data.append("file", file);
  data.append("upload_preset", "fiverr");

  try {
    const res = await axios.post(import.meta.env.VITE_UPLOAD_LINK, data)
    //     {
    //   headers: {
    //     "Content-Type": "multipart/form-data",
    //   },
    // });
    
    const { url } = res.data;
    return url;
  } catch (err) {
    console.error("Upload error:", err);  
  }
};

export default upload;
