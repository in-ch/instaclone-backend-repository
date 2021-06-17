import client from "../../client";
import { protectResolver } from "../../users/users.utils";

export default {
    Mutation:{
        deleteComment: protectResolver(async(_,{id},{loggedInUser})=>{
            // const comment = await client.comment.findUnique({
            //     where:{
            //         id
            //     },
            //     select: {
            //         userId:true
            //     }
            // });
            console.log('asdf');
            // if(!comment){
            //     return {
            //         ok:false,
            //         error: "댓글이 없습니다."
            //     }
            // } else if(loggedInUser.id !==comment.userId){
            //     return {
            //         ok:false,
            //         error: "Not Authorized"
            //     }
            // } else {
            //     await client.comment.delete({
            //         where:{
            //             id
            //         }
            //     });
            //     return {
            //         ok: true
            //     }
            // }

        }),
    }
}