import express from 'express';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes.js';
import catagoryRoutes from './routes/catagoryRouter.js';
import qolbaqRoutes from './routes/qolbaqRoute.js';
import connectDB from './config/db.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';

dotenv.config();

// Cron job çalıştır

// Veritabanına bağlan
connectDB();

const app = express();
app.use(express.json());

app.use(cors({
  origin: ['http://localhost:3000', 'https://f-fqadir.vercel.app'], // İzin verilen kaynaklar
  credentials: true, // Cookies veya diğer kimlik bilgileri için gerekli
}));


app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());



const PORT = process.env.PORT || 5000;

// API yolları
app.use('/api/users', userRoutes);
app.use('/api/catagory', catagoryRoutes);
app.use('/api/mobile', qolbaqRoutes);

// Ana sayfa rotası
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome',
  });
});

// Sunucuyu başlat
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
