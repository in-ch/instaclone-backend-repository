import client from '../../client';
import { protectResolver } from '../../users/users.utils';
import { makeHashtag } from '../photos.utills';

export default {
    Mutation: {
        editPhoto: protectResolver(async(_,{id,caption},{loggedInUser})=> {
            const ok = await client.photo.findFirst({
                where:{
                    id,
                    userId:loggedInUser.id
                }
            });
            if(ok){
                return {
                    ok: false,
                    error: "사진을 찾을 수 없습니다."
                }
            }
            const photo = await client.photo.update({
                where:{
                    id,
                },
                data: {
                    caption,
                    hashtags: {
                        disconnect: ok.hashtags,  // disconnect에는 지울 값들을 적어줘야 함.
                        connectOrCreate:  makeHashtag(caption)
                    }
                }
            }); 
            return {
                ok: true, 
            }

        })
    }
}