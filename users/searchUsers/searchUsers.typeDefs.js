import { gql } from "apollo-server";


export default gql`
    type Query{ # 스키마 연결 필수. 
        searchUsers(userName:String!):[User]
    }
`;
