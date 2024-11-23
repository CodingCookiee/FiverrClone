// server.js
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import { connectToDatabase } from './config/database.js';
import userRoute from './routes/user.route.js';
import gigRoute from './routes/gig.route.js';
import orderRoute from './routes/order.route.js';
import messageRoute from './routes/message.route.js';
import reviewRoute from './routes/review.route.js';
import conversationRoute from './routes/conversation.route.js';
import authRoute from './routes/auth.route.js';
import cookieParser from 'cookie-parser';
import errorHandler from './middleware/errorHandler.js';


dotenv.config();

const port = parseInt(process.env.PORT || '3000', 10);
const app = express();

app.use(cors({
  origin: [
    process.env.CLIENT_URL,     
    'https://www.fiverr.publicvm.com'
  ],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));


app.use(helmet());
app.use(express.json()); 
app.use(cookieParser());

// Routes
app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);
app.use('/api/gigs', gigRoute);
app.use('/api/orders', orderRoute);
app.use('/api/messages', messageRoute);
app.use('/api/reviews', reviewRoute);
app.use('/api/conversations', conversationRoute);
// Add this near your other routes
app.get('/health', (req, res) => {
  res.status(200).json({ 
    status: 'healthy',
    timestamp: new Date().toISOString() 
  });
});



app.listen(port, async () => {
  await connectToDatabase();
  console.log(`Server running on https://fiverrclone.up.railway.app/:${port}`);
  console.log(`Backend allowed client: ${process.env.CLIENT_URL}`);

}).on('error', (err) => {
  if (err.code === 'EACCES') {
    console.log(`Port ${port} requires elevated privileges.`);
  } else {
    console.error('Server error:', err);
  }
});



