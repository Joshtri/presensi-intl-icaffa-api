import express from 'express';
import * as absenController from '../controllers/absen.controller.js';
const absensiRoute = express.Router();


//there are thow absent, peserta dan tamu (unregistered in system)

// absensiRoute.post('/absen_peserta', absenController.absenPesertaRegistered);
absensiRoute.post('/absen_tamu', absenController.absenPesertaUnregistered);
// Route to update Absen and Peserta
absensiRoute.put('/absen_peserta',absenController.absenPesertaRegistered);



export default absensiRoute;