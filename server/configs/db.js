import mongoose from "mongoose";

const connectDB = async () => {

    try {
        mongoose.connection.on('connected', () => console.log("Database Connected"));
        await mongoose.connect(`${process.env.MONGODB_URI}/The_Velvet_Key`);
    } catch (error) {
        console.error(error.message);
    }

};

export default connectDB;
// Note: Do not use the '@' symbol in your database user's password.