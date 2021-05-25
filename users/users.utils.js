import client from '../client';
import jwt from 'jsonwebtoken';

export const getUser = async (incheolisbest) => {
    try{
        if(!incheolisbest){
            return null;
        }
        const { id }= await jwt.verify(incheolisbest, process.env.SECRET_KEY);  // 암호화된 걸 다시 풀어주는 함수임. 
        const user = await client.user.findUnique({where: { id }});
        if(user){
            return user;
        } else {
            return null;
        }
    } catch(e){
        
    }
};

export const protectResolver = (user) => {
    if(!user){
        return {
            ok: false,
            error: '로그인이 필요합니다.',
        };
    }
};