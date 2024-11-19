import axios from "axios";

const newRequest = axios.create({
  baseURL: "https://fiverrclone.up.railway.app/api/",
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  }
});

export default newRequest;
