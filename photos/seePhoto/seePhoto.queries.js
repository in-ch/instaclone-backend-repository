import client from '../../client';

export default {
    Query: {
        seePhoto: async(_, {id}) => {
            const newPhoto = await client.photo.findUnique({
                where:{
                    id
                }
            });
            console.log(newPhoto);
            return {
                photoId : newPhoto.id,
                caption : newPhoto.caption
            }
        }, 
    }
}