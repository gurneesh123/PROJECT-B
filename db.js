import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`mongodb+srv://gsforever1000:gsforever@cluster0.ymvpxqk.mongodb.net/cv`)
        console.log("Connected to mongo, \nDB HOST: ", connectionInstance.connection.host);
    } catch (error) {
        console.log("Error connecting to mongo: ", error)
        process.exit(1);
    }
}

export default connectDB;
