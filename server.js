require("dotenv").config();
import { ApolloServer} from "apollo-server";
import {typeDefs, resolvers} from "./schema";
import { getUser, protectResolver } from "./users/users.utils";

const server = new ApolloServer({
    typeDefs, // typeDefs와 resolvers를 적음으로써 upload scalar를 쓸 수 있음. 
    resolvers, 
    context: async ({req}) => {
        return {
            loggedInUser: await getUser(req.headers.incheolisbest),
            protectResolver
        }
    }
});

const PORT = process.env.PORT

server.listen(PORT).then(() => console.log("Server is running on http://localhost:4000"));