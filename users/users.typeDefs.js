import { gql } from "apollo-server";

export default gql`
    type User{
        id: Int!
        firstName: String!
        lastName: String
        userName: String!
        email: String! 
        createdAt: String! 
        updatedAt: String! 
    }
    type loginResult {
        ok: Boolean!
        error: String!
        token: String! 
    }
    type Mutation{  # 꼭 스키마 연결할 필요 없음. 
        createAccount(
            firstName: String!
            lastName: String
            userName: String!
            email: String!
            password: String!
        ):User #User를 반환하는 것이다. 
        login(userName:String!, password:String!):loginResult
    }
    type Query{ # 스키마 연결 필수. 
        seeProfile(userName:String!):User 
    }
`;
