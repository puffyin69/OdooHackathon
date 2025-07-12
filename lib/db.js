import mongoose from 'mongoose';

const connectDB = async ()=>{
    const uri="mongodb+srv://kirtanthakkar30:nextjs@nextjs.b0uwcgw.mongodb.net/?retryWrites=true&w=majority&appName=nextjs"
    if(mongoose.connection.readyState==1){
        console.log("Already connected to the database");
        return;
    }
    try{
        await mongoose.connect(uri);
        console.log("Connected to the database successfully");
    }catch(err){
        const errorMessage = err instanceof Error ? err.message : 'Unknown error';
        console.log("erro occured while connectiong to the database", errorMessage);
    }
}
export default connectDB;