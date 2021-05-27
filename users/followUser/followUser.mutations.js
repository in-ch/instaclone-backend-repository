import client from '../../client';
import { protectResolver } from '../users.utils';
import fs from "fs"

export default{
    Mutation: {
        followUser:  protectResolver(
            async (_, {
                userName
            }, { loggedInUser }) => {
                const followingUser = await client.user.findUnique({where:{userName}});
                if(!followingUser){
                    return {
                        ok: false,
                        error: '해당 유저가 없습니다. 잠시 후 다시 시도해주세요.',
                    }
                }

                await client.user.update({
                    where: {
                        id:loggedInUser.id
                    },
                    data: {
                        following: {
                            connect: {
                                userName
                            }
                        }
                    }
                });
                return{
                    ok: true
                }
            }   
        )

    },
}