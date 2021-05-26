require("dotenv").config();
import express from 'express';
import { ApolloServer} from "apollo-server-express";
import {typeDefs, resolvers} from "./schema";
import { getUser, protectResolver } from "./users/users.utils";
import logger from "morgan";

const PORT = process.env.PORT;
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

const app = express();
app.use(logger("tiny")); // 로그가 생김. 서버로 오는 모든 요청들을 볼 수 있음. 
app.use("/static",express.static("uploads"));   // localhost:400/static/이미지 파일명. 
server.applyMiddleware ({app});
app.listen({ port: PORT }, () => {
    console.log(`🤫 Server is running on http://localhost:${PORT}`);
});