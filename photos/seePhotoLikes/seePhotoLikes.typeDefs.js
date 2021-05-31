import { gql } from "apollo-server";

export default gql`
    type seePhotoLikeResult{
        likes: [Like]!
        ok: String!
    }
    type Query{
        seePhotoLikes(id:Int!): seePhotoLikeResult!
    }
`;