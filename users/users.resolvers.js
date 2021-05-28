import client from "../client";

export default{
    User: {
        totalFollowing: async ({id}) => await client.user.count({where:{    // id는 root.id 
            followers: {
                some: {
                    id
                }
            }
        }}),   
        totalFollowers: async ({id}) => await client.user.count({where:{    // id는 root.id 
            following: {
                some: {
                    id
                }
            }
        }}),   
        isMe: ({id}, args, { loggedInUser }) => {  // context에 loggedInUser가 들어가 있음.  == context.loggedInUser
            if(!loggedInUser){
                return false;
            }
            return id === loggedInUser.id;
        },
        isFollowing : async ({id}, args, {loggedInUser}) => {
            if(!loggedInUser){
                return false;
            }
            const exists = await client.user
                .findUnique({where:{userName:loggedInUser.userName}})
                .following({
                    where:{
                        id,
                    },
                });
                return exists.length !== 0;
        },
    }
}