import client from '../../client';

export default {
    Query: {
        seeFollowing: async (_, { userName, lastId }) => {
            const ok = await client.user.findUnique({where:{userName},select:{id: true}});  // select을 통해 특정 값만 받아올 수 있음.
            if(!ok){
                return {
                    ok:false,
                    error: '해당 유저가 존재하지 않습니다.',
                }
            }

            const following = await client.user.findUnique({
                where:{userName}
            }).following(
                {
                    take:5,
                    skip: lastId ? 1 :0,
                    ...(lastId && {cursor: {id:lastId}}),
                }
            );

            return {
                ok: true,
                following,
            }
        }
    },
}