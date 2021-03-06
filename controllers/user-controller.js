import { response } from 'express';
import User from '../model/User.js'

export const addUser = async(req, res) => {
    try {

        let exist = await User.findOne({ googleId: req.body.googleId });

        if (exist) {
            res.status(200).json("user already exist");
            return;
        }
        const newUser = new User(req.body)
        await newUser.save();
        res.status(200).json("user save succesfully");
        
    } catch (error) {
        res.status(500).json(error)
    }
    
   
}

 

export const getUsers = async(req,res) => { 
    try {
      const users=  await User.find({})
        res.status(200).json(users)
        
    } catch (error)
    {
        res.status(500).json(error)
    }
}
