import { gql } from "apollo-server";

export default gql`
    type Message {
        id: Int!
        payload: String!
        user: User!
        room : Room!
        createdAt: String!
        updateAt: String!
    }
    type Room {
        id: Int!
        user: [User]
        messages: [Message]
        createdAt: String!
        updateAt: String!
    }
`;