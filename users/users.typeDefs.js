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
    type Mutation{
        createAccount(
            firstName: String!
            lastName: String
            username: String!
            email: String!
            password: String!
        ):User #User를 반환하는 것이다. 
    }
    type Query{
        seeProfile(username:String!):User 
    }
`;
