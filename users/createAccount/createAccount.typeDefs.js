import { gql } from "apollo-server";

export default gql`
    type Mutation{  # 꼭 스키마 연결할 필요 없음. 
        createAccount(
            firstName: String!
            lastName: String
            userName: String!
            email: String!
            password: String!
        ):User #User를 반환하는 것이다. 
    }
`;