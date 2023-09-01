import mongoose from "mongoose";

const connectMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("MongoDb is Connected");
    } catch (error) {
        console.log("Error from MongoDB:", error);
    }
}

export default connectMongoDB;