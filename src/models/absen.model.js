import mongoose, { mongo } from "mongoose";

const absenSchema = new mongoose.Schema({
    participantId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Peserta',
        required: true

    },

    status_kehadiran:{
        type:String,
        enum: ["hadir", "tidak hadir"],
        default : "tidak hadir",
        required : true
        
    },


}, { timestamps: true });


const Absen = mongoose.model("Absen", absenSchema);
export default Absen;