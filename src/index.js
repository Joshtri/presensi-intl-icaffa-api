import { config } from 'dotenv';
import express from 'express';
import cors from 'cors';
import connectDB from './config/dbConfig.js';
import pesertaRoute from './routes/peserta.route.js';
import absensiRoute from './routes/absen.route.js';
config();

connectDB();
const PORT = process.env.APP_PORT || 5000;
const app = express();

    

app.use(cors({
    origin: '*',
    methods:["POST", "GET", "PUT"],
    credentials:true
}))

app.use(express.json());


app.use('/api/v1', pesertaRoute, absensiRoute)


app.listen(PORT,()=>{
    console.log(`run on port : `, PORT);
})