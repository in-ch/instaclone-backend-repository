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
        isMine: Boolean!
        likes: Int  #좋아요 갯수 
    }
    type Hashtag {
        id: Int!
        hashtag: String!
        photos: [Photo]
        createAt: String!
        updateAt: String! 
        totalPhotos: Int!
    }
    type Like {
        id: Int!
        photo: Photo!
        createAt: String!
        updateAt: String! 
    }
`;