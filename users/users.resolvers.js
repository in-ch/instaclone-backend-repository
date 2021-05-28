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
        isMe: ({id}, args, context) => {  // context에 loggedInUser가 들어가 있음.  
            if(!loggedInUser){
                return false;
            }
            return id === loggedInUser.id;
        },
        isFollowing : () => 'asdf',
    }
}