import { gql } from "apollo-server";

export default gql`
    type seeFollowersResult{
        ok: Boolean!
        error: String
        followers: [User]
        totalPage: Int
    }
    type Query{ # 스키마 연결 필수. 
        seeFollowers(userName:String!,totalPage:Int!):seeFollowersResult!
    }
`;
