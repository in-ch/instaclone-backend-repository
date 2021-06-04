require("dotenv").config();
import express from 'express';
import http from 'http';
import logger from "morgan";
import { ApolloServer} from "apollo-server-express";
import { typeDefs, resolvers } from "./schema";
import { getUser, protectResolver } from "./users/users.utils";
import pubsub from './pubsub';

const PORT = process.env.PORT;
const apollo = new ApolloServer({
    typeDefs, // typeDefs와 resolvers를 적음으로써 upload scalar를 쓸 수 있음. 
    resolvers, 
    context: async (ctx) => {
        if (ctx.req) {
          return {
            loggedInUser: await getUser(ctx.req.headers.incheolisbest),
          };
        } else {
          const {
            connection: { context },
          } = ctx;
          return {
            loggedInUser: context.loggedInUser,
          };
        }
      },
    subscriptions: {
        onConnect: async({incheolisbest}) => {
            if(!incheolisbest) {
                throw new Error("리스닝을 시도할 수 없습니다.");
            } 
            const loggedInUser = await getUser(incheolisbest);
            return {
                loggedInUser,  
            }
        }
    }
});

const app = express();
app.use(logger("dev"));
apollo.applyMiddleware({ app });
app.use("/static", express.static("uploads"));

const httpServer = http.createServer(app);
apollo.installSubscriptionHandlers(httpServer);

httpServer.listen(PORT, () => {
    console.log(`🤫 Server is running on http://localhost:${PORT}/graphql ✅`);
});