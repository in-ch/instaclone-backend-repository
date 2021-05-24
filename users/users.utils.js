import client from '../client';
import jwt from 'jsonwebtoken';

export const getUser = async (incheolisbest) => {
    try{
        if(!incheolisbest){
            return null;
        }
        const { id }= await jwt.verify(incheolisbest, process.env.SECRET_KEY);
        const user = await client.user.findUnique({where: { id }});
        if(user){
            return user;
        } else {
            return null;
        }
    } catch(e){

    }
};