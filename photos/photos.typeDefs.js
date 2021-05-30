import { gql } from "apollo-server";

export default gql`
    type Photo {
        id: String! 
        user: User! 
        file: String!
        caption: String
        hashtag: [Hashtag]
        createAt: String!
        updateAt: String! 
    }
    type Hashtag {
        id: String!
        hashtag: String!
        photos: [Photo]
        createAt: String!
        updateAt: String! 
    }
`;