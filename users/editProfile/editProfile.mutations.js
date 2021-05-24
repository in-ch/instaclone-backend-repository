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
            password,
        }) => {
            try{
               
            } catch (err){
                return err;
            }
        },
    },
}