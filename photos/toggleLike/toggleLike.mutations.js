import client from '../../client';
import { protectResolver } from '../../users/users.utils';

export default {
    Mutation: {
        toggleLike: protectResolver(async(_, {id},{loggedInUser})=> {
            const ok = await client.photo.findUnique({
                where: {
                    id,
                }
            });
            if(!ok){
                return {
                    ok:false,
                    error: '사진을 찾을 수가 없습니다.',
                }
            } 
            const like = await client.like.findUnique({
                where:{
                    photoId_userId: { // prisma에 unique를 썻기 때문에 이렇게 사용 가능.
                        userId: loggedInUser.id,
                        photoId: id,
                    }
                }
            });
            if(like){
                await client.like.delete({
                    where:{
                        photoId_userId: { // prisma에 unique를 썻기 때문에 이렇게 사용 가능.
                            userId: loggedInUser.id,
                            photoId: id,
                        }
                    }
                }); 
            } else {
                await client.like.create({
                    data:{
                        user: {
                            connect: {
                                id:loggedInUser.id
                            }
                        },
                        photo: {
                            connect: {
                                id: ok.id
                            }
                        }
                    }
                }); 
            }
            return {
                ok: true,
            }
        })
    }
}