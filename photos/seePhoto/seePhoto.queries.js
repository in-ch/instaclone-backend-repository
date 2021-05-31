import client from '../../client';

export default {
    Query: {
        seePhoto: async(_, {id}) => {
            const newPhoto = await client.photo.findUnique({
                where:{
                    id
                }
            });
            const hashtags = await client.photo.findUnique({
                where:{
                    id
                }
            }).hashtags();

            return {
                photoId : newPhoto.id,
                caption : newPhoto.caption,
                userId : newPhoto.userId,
                hashtags: hashtags 
            }
        }, 
    }
}