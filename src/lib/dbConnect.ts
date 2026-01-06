import { connect } from "http2";
import mongoose from "mongoose";

type ConnectionObject = {
    isConnected?: number;  // ? it is representing optional
}

const connection: ConnectionObject = {};


async function dbConnect(): Promise<void> {
    if (connection.isConnected) {
        console.log("Already connected to database");
        return;
    }

    try {
        const db = await mongoose.connect(process.env.MONGODB_URI || "");
        connection.isConnected = db.connections[0].readyState;
        console.log("Connected to database successfully");
    } catch (error) {
        process.exit(1);
        console.log("Database connection failed",error);
    }
}

export default dbConnect;