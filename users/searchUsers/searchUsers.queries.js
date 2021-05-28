import client from '../../client';

export default {
    Query: {
        searchUsers: async (_, { userName }) => 
            await client.user.findMany({
                where:{
                    startsWith: userName.toLowerCase(), 
                },
            }),
    },
}