import { gql } from "apollo-server";

export default gql`
    type Query {
        searchPhotos(id:Int!, keyword:String!): [Photo]
    }
`;