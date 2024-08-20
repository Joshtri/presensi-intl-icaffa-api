import Peserta from "../models/peserta.model.js";



export const getPeserta = async(req,res)=>{
    try {
        const peserta = await Peserta.find();

        res.status(200).json(peserta);
    } catch (error) {
        console.log(`error message : `, error.message);
        throw error;
    }
}

