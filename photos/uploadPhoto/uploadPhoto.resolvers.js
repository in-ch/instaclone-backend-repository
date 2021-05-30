import client from '../../client';
import { protectResolver } from '../../users/users.utils';

export default {
    Mutation: {
        uploadPhoto: protectResolver(async(_, {file, caption}, {loggedInUser}) => {
            if(caption){ //parse caption -> get or create Hashtags
                const hashtags = caption.match(/#[\w]+/g);
                console.log(hashtags);
            }
            client.photo.create({
                data: {
                    file, 
                    caption,
                    hashtags: {
                        connectOrCreate: [
                            {
                                where: {
                                    hashtag: "#"
                                },
                                create: {
                                    hashtag: "#"
                                }
                            }
                        ]
                    }
                }
            })
            // save the photo WITH tahe parsed hashtags 
            // add the photo to the hashtags
        }), 
    }
}