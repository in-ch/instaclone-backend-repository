import { gql } from "apollo-server";

export default gql`
    type result{
        ok: Boolean!
        error: String 
        photoId: Int
        caption: String
    }
    type Query {
        seePhoto(id:Int!):result
    }
`;