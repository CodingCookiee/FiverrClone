import axios from "axios";

const newRequest = axios.create({
  baseURL: "https://fiverrclone.up.railway.app/api/",
  withCredentials: true,
   SameSite = 'none',
});

export default newRequest;
