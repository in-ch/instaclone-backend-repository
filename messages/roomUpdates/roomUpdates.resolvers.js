import { NEW_MESSAGE } from "../../constants";
import { withFilter } from "apollo-server";
import pubsub from "../../pubsub";
import client from "../../client";

export default {
    Subscription: {
        roomUpdates: {
            subscribe: async (root, args, context, info) => {
                const room = await client.room.findFirst({
                  where: {
                    id: args.id,
                    users: {
                      some: {
                        id: context.loggedInUser.id,
                      },
                    },
                  },
                  select: {
                    id: true,
                  },
                });
                if (!room) {
                  throw new Error("You shall not see this.");
                }
              
                return withFilter(
                  () => pubsub.asyncIterator(NEW_MESSAGE),
                  async ({ roomUpdates }, { id }, {loggedInUser}) => {
                    return roomUpdates.roomId === id; 
                  }
                )(root, args, context, info);
              },
        }
    }
}