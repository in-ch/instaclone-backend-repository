import client from '../../client';

export default {
    Query: {
        seeHashtag: async(_, {hash}) => {
            const hashtagData = await client.hashtag.findUnique({
                where:{
                    hashtag:hash
                }
            });

            const photos = await client.hashtag.findUnique({
                where: {
                    hashtag:hash
                }
            }).photos();

            return {
                ok:true,
                id: hashtagData.id,
                photos: photos
            }

        }, 
    }
}