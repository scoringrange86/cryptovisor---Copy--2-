//
//      Connects to DB 
//

import dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose';

const connectDB = async () => {

    try {
        await mongoose.connect(process.env.NEW_URI,
            
            {
                useNewUrlParser: true,
                useUnifiedTopology: true
            });
console.log("MongoDB connection SUCCESS");
    }catch(error){
        console.error("MongoDB connection FAIL");
        process.exit(1);
    }
    
}

export default connectDB;