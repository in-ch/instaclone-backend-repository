import { gql } from "apollo-server";

export default gql`
    type seeFollowingResult{
        ok: Boolean!
        error: String
        following: [User]
    }
    type Query{ # 스키마 연결 필수. 
        seeFollowing(userName:String!, lastId:Int!):seeFollowingResult! 
    }
`;
