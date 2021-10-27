import Message from '../model/message.js'

export const newMessage =async(req,res)=>{
    const newMessage= new Message(req.body)
    try{
         await newMessage.save();
         response.status(200).json("message save successfully")

    }catch(error)
    {
        res.status(500).json(500)
    }
}

export const getMessage =async(req,res)=>{
    
    try{
      const message= await Message.find({ conversationId:req.params.id})
         res.status(200).json(message)

    }catch(error)
    {
        res.status(500).json(500)
    }
}