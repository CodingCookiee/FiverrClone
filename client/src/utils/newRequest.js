import axios from "axios";

const newRequest = axios.create({
  baseURL: "https://www.fiverr.publicvm.com/api/",
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': 'https://www.fiverr.publicvm.com'
  }
});



export default newRequest;
