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
    type Query{ # 스키마 연결 필수. 
        seeProfile(userName:String!):User 
    }
`;
