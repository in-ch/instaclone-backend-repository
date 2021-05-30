import { gql } from "apollo-server";

export default gql`
    type Photo {
        id: Int! 
        user: User! 
        file: String!
        caption: String
        hashtags(page:Int!): [Hashtag]
        createAt: String!
        updateAt: String! 
    }
    type Hashtag {
        id: Int!
        hashtag: String!
        photos: [Photo]
        createAt: String!
        updateAt: String! 
        totalPhotos: Int!
    }
`;