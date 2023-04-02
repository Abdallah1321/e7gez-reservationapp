import mongoose from 'mongoose';

const TableSchema = new mongoose.Schema({
    x:{
        type: Number,
        required: true,
    },
    y:{
        type: Number,
        required: true,
    },
    width:{
        type: Number,
        required: true,
    },
    height:{
        type: Number,
        required: true,
    },
    y:{
        type: Number,
        required: true,
    },
    tableNumber:{
        type: Number,
        required: true,
        unique: true
    },
    capacity:{
        type: Number,
        required: true,
    },
    features:{
        type: [String],
    },
    isBooked: {
        type: Boolean,
        default: false
    },
    roomNumbers: [{number:Number, unavailableDates: {type: [Date]}}],
},{timestamps:true});

export default mongoose.model("Table",TableSchema)
