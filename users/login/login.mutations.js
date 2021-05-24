import client from '../../client';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export default{
    Mutation: {
        login: async (_ ,
            { 
                userName, 
                password
            }) => {
                const user = await client.user.findUnique({
                    where: {
                        userName
                    }
                });
                if(!user){
                    return {
                        ok: false,
                        error: '유저가 없습니다.',
                    }
                }
                const passwordCheck = await bcrypt.compare(password, user.password);
                if(!passwordCheck){
                    return {
                        ok: false,
                        error: '비밀번호가 틀립니다.'
                    }
                }  
                const token = await jwt.sign({ id: user.id, a:'해킹할라고? 안되지 그건..' }, process.env.SECRET_KEY);
                return {
                    ok: true,
                    token
                }
        }
    },
}