import { gql } from "apollo-server";

export default gql`
    type loginResult {
        ok: Boolean!
        error: String
        token: String 
    }
    type Mutation{  # 꼭 스키마 연결할 필요 없음. 
        login(userName:String!, password:String!):loginResult
    }
    type Query{ # 스키마 연결 필수. 
    }
`;