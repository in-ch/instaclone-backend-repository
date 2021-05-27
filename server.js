require("dotenv").config();
import express from 'express';
import logger from "morgan";
import { ApolloServer} from "apollo-server-express";
import { typeDefs, resolvers } from "./schema";
import { getUser, protectResolver } from "./users/users.utils";


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
app.use("/static", express.static("uploads"));

app.listen({ port: PORT }, () => {
    console.log(`🤫 Server is running on http://localhost:${PORT}/graphql ✅`);
});