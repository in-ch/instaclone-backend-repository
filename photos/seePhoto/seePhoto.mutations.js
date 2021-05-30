import client from '../../client';

export default {
    Mutation: {
        seePhoto: async(_, {id}) => {
            await client.photo.findUnique({
                where:{
                    id
                }
            })
        }, 
    }
}