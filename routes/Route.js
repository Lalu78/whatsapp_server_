import express from 'express';
import { addUser, getUsers } from '../controllers/user-controller.js'
import { newConversation,getConversatioin } from '../controllers/conversation-controller.js'
import{newMessage,getMessage} from '../controllers/message-controller.js'
const route = express.Router();


route.post('/add', addUser);
route.get('/users', getUsers);

route.post('/conversation/add', newConversation);

route.post('/conversation/get', getConversatioin)

route.post('/message/add', newMessage)

route.get('/message/get/:id', getMessage)


export default route