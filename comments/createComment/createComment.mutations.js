import client from "../../client";
import { protectResolver } from "../../users/users.utils";

export default {
    Mutation: {
        createComment: protectResolver( async(_,{photoId, payload},{loggedInUser})=> {
            console.log('Heelo');
            const ok = await client.photo.findUnique({
                where:{
                    id: photoId
                },
                select: {
                    id:true
                },
            }); 

            if(!ok){
                return {
                    ok: false,
                    error: '해당 게시글이 없습니다.',
                }
            }

            await client.comment.create({
                data: {
                    payload,
                    photo:{
                        connect: {
                            id: photoId,
                        }
                    },
                    user: {
                        connect:{
                            id: loggedInUser.id
                        }
                    }
                }
            }); 
            return{
                ok: true
            }
        },
    )},
}