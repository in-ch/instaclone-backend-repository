import client from "../../client";
import { protectResolver } from "../../users/users.utils";

export default {
    Mutation: {
        sendMessage: protectResolver(async(_,{payload, roomId, userId},{loggedInUser})=> {
            let room = null;
            if(userId) {
                const user = await client.user.findUnique({
                    where:{
                        id:userId,
                    },
                    select:{
                        id:true
                    }
                });
                if(!user){
                    return {
                        ok:false,
                        error: "유저가 존재하지 않습니다."
                    };
                }
                room = await client.room.create({
                    data:{
                        users:{
                            connect: [{
                                id:userId
                            },{
                                id:loggedInUser.id
                            }]
                        }
                    },
                    select:{
                        id:true
                    }
                });
                
            } else if(roomId){
                room = await client.room.findUnique({
                    where: {
                        id:roomId,
                    },
                    select:{
                        id:true
                    }
                });
                if(!room){
                    return {
                        ok:false, 
                        error: "대화방을 찾을 수 없습니다."
                    }
                }
            } 

            const newMessage = await client.message.create({
                data:{
                    payload,
                    room: {
                        connect:{
                            id:room.id
                        }
                    },
                    user:{
                        connect: {
                            id:loggedInUser.id,
                        }
                    }
                }
            });

            return {
                ok:true,
            }
        })
    }
}