import client from '../../client';
import { protectResolver } from '../../users/users.utils';

export default {
    Mutation: {
        uploadPhoto: protectResolver(async(_, {file, caption}, {loggedInUser}) => {
            let hashtagObj = []; 
            if (caption) {
                const hashtags = caption.match(/#[\w]+/g);
                console.log(hashtags);
                hashtagObj = hashtags.map((hashtag) => ({
                  where: { hashtag },
                  create: { hashtag },
                }));
              }
            await client.photo.create({
                data: {
                    file, 
                    caption,
                    user: {
                        connect: {
                            id: loggedInUser.id
                        }
                    },
                    ...(hashtagObj.length > 0 && {
                        hashtags: {
                            connectOrCreate: hashtagObj,
                        }
                    })
                }
            })
            // save the photo WITH tahe parsed hashtags 
            // add the photo to the hashtags
        }), 
    }
}