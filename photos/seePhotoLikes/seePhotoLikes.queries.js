import client from '../../client';

export default {
    Query: {
        seePhotoLikes: (_,{id}) => {
            const likes = client.like.findMany({
                where:{
                    photoId:id
                }
            }).user();
            return {
                ok: true,
                likes : likes
            }
        }
    }
}