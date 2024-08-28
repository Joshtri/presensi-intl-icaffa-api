import mongoose from "mongoose";

// Schema for unregistered participants' attendance
const unregisteredPresensiSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    institute: {
        type: String,
        required: true
    },
    email_address: {
        type: String,
        required: true
    },

    // registering_as:{
    //     type: String,
    //     required: true
    // }

});

const UnregisteredPresensi = mongoose.model("UnregisteredPresensi", unregisteredPresensiSchema);


export default UnregisteredPresensi;