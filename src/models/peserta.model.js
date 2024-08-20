import mongoose from "mongoose";



const pesertaSchema = new mongoose.Schema({

    /*
    terdapat 6 field.
    */
        
    fullname:{
        type:String,
        required:true,
    },

    email_address:{
        type:String,
        required:true,
    },

    phone_number:{
        type:String,
        required:true,
    },

    subject:{
        type:String,
        required:true,
    },

    participant_category:{
        type:String,
        enum : ['lecturer','student', 'government organization', 'ngo', 'committee', 'other'],
        required:true,
    },

    registering_as:{
        type:String,
        enum : ['participant','presenter', 'committee' , 'poster_presentation'],
        required:true,
    },

    attendance:{
        type:String,
        required:true,
    }





});



const Peserta = mongoose.model("Peserta", pesertaSchema);
export default Peserta;