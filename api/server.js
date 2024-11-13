import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectToDatabase } from "./config/database.js";
import userRoute from './routes/user.route.js';


dotenv.config();
const port = parseInt(process.env.PORT || "3000", 10);
const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL, 
    credentials: true,
  })
);

app.use(express.json());

app.use('/api/users', userRoute);



app
  .listen(port, async () => {
    await connectToDatabase();
    console.log(`Server running successfully on  http://localhost:${port}`);
    console.log("Backend allowed client:",process.env.CLIENT_URL);
  })
  .on("error", (err) => {
    if (err.code === "EACCES") {
      console.log(`Port ${port} requires elevated privileges. Try these solutions:
        1. Use a port number above 1024
        2. Run the command prompt as administrator`);
    } else {
      console.error("Server error:", err);
    }
  });

