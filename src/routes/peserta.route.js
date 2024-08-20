import express from 'express';
import { getPeserta } from '../controllers/peserta.controller.js';
const pesertaRoute = express.Router();


pesertaRoute.get('/peserta',getPeserta);



export default pesertaRoute