import mongoose from "mongoose";

const connect_db = async () =>{
    try {
        await mongoose.connect(process.env.MONGODB_URI as string).then((connected) =>{

            console.log(`Connected to Mongo ${connected.connection.name}-${connected.connection.host}`);
        });
    } catch (error: any) {
        console.error("Error connecting to MongoDB", error.message);
        process.exit(1);
    }
}

export default connect_db;