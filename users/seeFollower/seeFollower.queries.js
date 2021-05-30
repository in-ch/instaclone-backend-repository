import client from '../../client';

export default {
    Query: {
        seeFollowers: async (_, { userName, page }) => {
            const seeFollowers = await client.user.findUnique({where:{userName},select:{id:true}});  // select을 통해 특정 값만 받아올 수 있음.
            if(!seeFollowers){
                return {
                    ok:false,
                    error: '해당 유저가 존재하지 않습니다.',
                }
            }

            const followers = await client.user.findUnique({
                where:{userName}
            }).followers(
                {
                    take:5,
                    skip: (page-1)*5
                }
            );
            const totalPageCount = await client.user.count({
                where:{following: {some:{userName}}}
            });

            return {
                ok: true,
                followers,
                totalPage: totalPageCount
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