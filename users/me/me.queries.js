import client from '../../client'; 
import { protectResolver } from '../users.utils';

export default {
    Query: {
        me: protectResolver( async (_,__,{loggedInUser}) => 
            await client.user.findUnique({
                where:{
                    id: loggedInUser.id
                },
            }),
        )
    },
}