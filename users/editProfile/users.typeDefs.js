import { gql } from "apollo-server";

export default gql`
    type EditProfileResult {
        ok: Boolean!
        error: String
    }
    type Mutation{  # 꼭 스키마 연결할 필요 없음. 
        editProfile(
            firstName: String
            lastName: String
            userName: String
            email: String
            password: String
        ): EditProfileResult
    }
    type Query{ # 스키마 연결 필수. 
        seeProfile(userName:String!):User 
    }
`;
