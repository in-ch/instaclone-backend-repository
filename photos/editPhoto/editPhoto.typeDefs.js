import { gql } from "apollo-server";

export default gql`
    type result {
        ok: Boolean! 
        error: String 
    }
    type Mutation {
        editPhoto(caption:String!):result!
    }
`;