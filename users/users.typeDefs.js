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
        following: [User]
        followers: [User]
        bio: String
        avatar: String 
    }

`;
