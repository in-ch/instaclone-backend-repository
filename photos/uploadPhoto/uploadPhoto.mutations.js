import client from '../../client';
import { uploadToS3 } from '../../shared/shared.utils';
import { protectResolver } from '../../users/users.utils';
import { makeHashtag } from '../photos.utills';

export default {
    Mutation: {
        uploadPhoto: protectResolver(async(_, {file, caption}, {loggedInUser}) => {
            let hashtagObj = []; 
            if (caption) {
                hashtagObj = makeHashtag(caption);
            }
            const fileUrl = await uploadToS3(file,loggedInUser.id,"uploads");
            await client.photo.create({
                data: {
                    file:fileUrl, 
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