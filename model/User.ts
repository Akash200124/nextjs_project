import mongoose, { Schema, Document } from "mongoose";

// this is for the type script only 

export interface Message extends Document {
    content: string;
    createdAt: Date
}

const MessageSchema: Schema<Message> = new Schema({
    content: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    }
})

export interface Message extends Document {
    content: string;
    createdAt: Date
}