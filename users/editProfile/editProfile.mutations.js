import client from '../../client';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export default{
    Mutation: {
        editProfile: async (_, {
            firstName,
            lastName,
            userName,
            email,
            password
        }) => {
            let uglyPassword = null;  // null이여야지만 없을 경우 데이터를 넣지 않으니 null로 선언해야 함.
            if(uglyPassword){
                uglyPassword = await bcrypt.hash(password,10);
            }

            const updatedUser =  await client.user.update({where: {   // prisma에 undefined를 보내면 데이터베이스에 그 값들을 보내지 않음.
                id:1,
            }, 
            data: {
                firstName, lastName,userName, email, ...(uglyPassword&& {password : uglyPassword})
                }
            });

            if(updatedUser.id){
                return {
                    ok:true
                }
            } else {
                return {
                    ok:false,
                    error: updatedUser,
                }
            }
        }
    },
}