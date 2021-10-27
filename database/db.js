import mongoose from "mongoose";

const Connection = async() => {
    
    const URL = 'mongodb+srv://user:12345@cluster0.hulyw.mongodb.net/WHATSAPP-CLONE?retryWrites=true&w=majority'
    try {
        await mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true })
        console.log("database in connected successfully")
        
    } catch (error) {
        console.log("error while connecting database",error)
    }
 
}

export default Connection;