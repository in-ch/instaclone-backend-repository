import { protectResolver } from '../../users/users.utils';

export default {
    Mutation: {
        uploadPhoto: protectResolver(async(_, {file, caption}, {loggedInUser}) => {
            if(caption){ //parse caption -> get or create Hashtags

            }
            // save the photo WITH tahe parsed hashtags 
            // add the photo to the hashtags
        }), 
    }
}