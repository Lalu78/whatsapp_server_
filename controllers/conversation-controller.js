import Conversation from "../model/conversation.js";

export const newConversation = async (req, res) => {
  let senderId = req.body.senderId;
  let recieverId = req.body.recieverId;
  try {
    let exist = await Conversation.findOne({
      member: { $all: [senderId, recieverId] },
    });
    if (exist) {
      res.status(200).json("conversation already exist");
      return;
    }
    const newConversation = new Conversation({
      member: [senderId, recieverId],
    });

    await newConversation.save();
    res.status(200).json("newconversation added successfully");
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getConversatioin = async (req,res) => {
    try {
        const conversation= await Conversation.findOne({member:{$all:[req.body.sender,req.body.receiver]}})
        res.status(200).json(conversation)
    } catch (error)
    {
        res.status(500).json(error)
    }
}
