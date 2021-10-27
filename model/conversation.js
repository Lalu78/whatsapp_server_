import mongoose from 'mongoose';

const conversationSchema = new mongoose.Schema({
    member: {
        type: Array,
        
    }
},
    {

        timestamps:true
    }
   
)
const conversation = mongoose.model('conversation',conversationSchema)

export default conversation;