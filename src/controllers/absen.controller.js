import Absen from "../models/absen.model.js";
import Peserta from "../models/peserta.model.js";

import UnregisteredPresensi from "../models/unregistered_absen.model.js";

export const absenPesertaRegistered = async (req, res) => {
    try {
        const { participantId, fullname } = req.body;

        // Update the status_kehadiran in the Absen collection
        const updatedAbsen = await Absen.updateMany(
            { participantId },
            { status_kehadiran: "hadir" }
        );

        // Only update fullname if it's provided
        let updatedPeserta;
        if (fullname) {
            updatedPeserta = await Peserta.findByIdAndUpdate(
                participantId,
                { fullname },
                { new: true }
            );
        } else {
            updatedPeserta = await Peserta.findById(participantId);
        }

        if (!updatedPeserta) {
            console.log(`gagla update`);
            return res.status(404).json({ message: 'Participant not found.' });
        }

        res.status(200).json({
            message: 'Absen and Peserta updated successfully',
            updatedAbsen,
            updatedPeserta
        });

        console.log(`berhasil update`);
    } catch (error) {
        console.error(`Error updating absen and peserta: `, error.message);
        res.status(500).json({ message: `Failed to update absen and peserta: ${error.message}` });
    }
};

export const absenPesertaUnregistered = async (req, res) => {
    try {
        const { fullname, institute, email_address} = req.body;

        const newAbsenUnregistered = await UnregisteredPresensi.create({
            fullname,
            institute,
            email_address,
            // registering_as
        });

        res.status(201).json(newAbsenUnregistered);
    } catch (error) {
        console.log(`error message : `, error.message);
        res.status(500).json({ error: error.message });
    }
};

export const updatePesertaToPresent = async(req,res)=>{
    try {
        
        const newPeserta = await Absen.up
    } catch (error) {
        console.log(`error message : `, error.message);
        throw error;
    }
};


// export const