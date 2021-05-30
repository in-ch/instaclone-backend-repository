import { gql } from "apollo-server";

export default gql`
    type result{
        ok: Boolean!
        error: String
        id: Int!
        photos: [Photo]
    }
    type Query {
        seeHashtag(hash:String!):result
    }
`;