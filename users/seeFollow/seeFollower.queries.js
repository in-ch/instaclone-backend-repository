import client from '../../client';

export default {
    Query: {
        seeFollowers: async (_, { userName, totalPage }) => {
            const followers = await client.user.findUnique({
                where:{userName}
            }).followers(
                {
                    take:5,
                    skip: (page-1)*5
                }
            );
            return {
                ok: true,
                followers,
            }
            // const bF = await client.user.findMany({
            //     where:{
            //         following: {
            //             some: {
            //                 userName
            //             }
            //         }
            //     }
            // })
        }
    },
}