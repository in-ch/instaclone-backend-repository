require("dotenv").config();
import express from 'express';
import logger from "morgan";
import { ApolloServer} from "apollo-server-express";
import { typeDefs, resolvers } from "./schema";
import { getUser, protectResolver } from "./users/users.utils";
import pubsub from './pubsub';

const PORT = process.env.PORT;
const apollo = new ApolloServer({
    typeDefs, // typeDefs와 resolvers를 적음으로써 upload scalar를 쓸 수 있음. 
    resolvers, 
    context: async ({req}) => {
        return {
            loggedInUser: await getUser(req.headers.incheolisbest),
            protectResolver
        }
    }
});

const app = express();
app.use(logger("dev"));
apollo.applyMiddleware({ app });
apollo.installSubscriptionHandlers(app); // subscription에 대한 정보를, 다시 말해 웹소켓에 대한 정보를 우리 서버에 설치 (실시간 채팅을 위해서 .. )
app.use("/static", express.static("uploads"));

app.listen({ port: PORT }, () => {
    console.log(`🤫 Server is running on http://localhost:${PORT}/graphql ✅`);
});