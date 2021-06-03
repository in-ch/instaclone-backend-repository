import { NEW_MESSAGE } from "../../constants";
import { withFilter } from "apollo-server";
import pubsub from "../../pubsub";
import client from "../../client";

export default {
    Subscription: {
        roomUpdates: {
            subscribe: async (root, args, context, info) => {
                const room = await client.room.findUnique({
                  where: {
                    id: args.id,
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
                  ({ roomUpdates }, { id }) => {
                    return roomUpdates.roomId === id;
                  }
                )(root, args, context, info);
              },
        }
    }
}