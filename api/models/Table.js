import mongoose from 'mongoose';

const TableSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
    },
    seats:{
        type: Number,
        required: true,
    },
    tableNumber:{
        type: Number,
        required: true,
        unique: true
    },
    isBooked: {
        type: Boolean,
        default: false
    },
    roomNumbers: [{number:Number, unavailableDates: {type: [Date]}}],
},{timestamps:true});

export default mongoose.model("Table",TableSchema)