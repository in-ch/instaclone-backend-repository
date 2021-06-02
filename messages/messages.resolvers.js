import client from "../client";

export default {
    Room: {
        users: ({id})=> client.room.findUnique({
            where: {
                id
            }.users(),
        }),
        messages: ({id}) => client.message.findMany({
            where:{
                roomId: id,
            }
        }),
        unreadTotal: ({id},_,{loggedInUser}) => {
            if(!loggedInUser){
                return 0;
            } else {
                return client.message.count({
                    where: {
                        read:false,
                        roomId: id,
                        user: {
                            id: {
                                not: loggedInUser.id  // 메시지를 누가 보느냐에 따라 달라짐. 
                            }
                        }
                    }
                });
            }
        },
        
    },
    Message: {
        user: ({id}) => client.message.findUnique({
            where:{
                id
            }
        }).user()
    }
}
