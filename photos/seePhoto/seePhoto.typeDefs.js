import { gql } from "apollo-server";

export default gql`
    type Mutation {
        seePhoto(id:Int!):Photo
    }
`;