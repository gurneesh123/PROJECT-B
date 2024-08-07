// index.js
import express from 'express';
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import session from 'express-session';
import cors from 'cors';
import path from 'path';
import authRoutes from './routes/authRoutes.js';
import wineRoutes from './routes/wineRoutes.js';


// MongoDB Connection URI
const mongoURI = 'mongodb+srv://gsforever1000:gsforever@cluster0.ymvpxqk.mongodb.net/cv';
const port = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('MongoDB connection error:', err);
});

const app = express();

// Middleware
const corsOptions = {
  origin: 'http://localhost:5173',  // Frontend URL
  methods: 'GET, POST, PUT, PATCH, DELETE',
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true  // Allow credentials (cookies) to be sent
};
app.use(cors(corsOptions));


// app.use((req, res, next) => {
//   res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
//   res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//   res.setHeader('Access-Control-Allow-Credentials', 'true'); 
//   next();
// })
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({
  secret: 'your-secret-key',  // Use a strong secret key
  resave: false,
  saveUninitialized: false,  // Prevent creating empty sessions
  cookie: {
    secure: false,  // Set to true in production with HTTPS
    httpOnly: true  // Helps mitigate XSS attacks
  }
}));


// Serve static files
app.use(express.static('public'));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
app.use('/api/auth', authRoutes);
app.use('/api/wines',wineRoutes);
// Start server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
