import client from '../client';
import bcrypt from 'bcrypt';

export default{
    Mutation: {
        createAccount: async (_, {
            firstName,
            lastName,
            userName,
            email,
            password,
        }) => {
            try{
                const existingUser = await client.user.findFirst({
                    where: {
                        OR: [
                            {
                                userName,
                            },{
                                email,
                            }
                        ]
                    }
                });
                if(existingUser){
                    throw new Error("닉네임 혹은 이메일이 이미 사용 중입니다.");
                }
                const uglyPassword = await bcrypt.hash(password,10);
                return client.user.create({
                    data: {
                        firstName,
                        lastName,
                        userName,
                        email,
                        password:uglyPassword,
                    },
                })  
            } catch (err){
                return err;
            }
        },
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
        }
    },
}