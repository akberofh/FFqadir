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

// Tüm kaynaklardan gelen isteklere izin veren CORS ayarı (* işareti ile)
app.use(cors({
  origin: '*', // Tüm kaynaklara izin ver
}));

// Cookie parser middleware
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
