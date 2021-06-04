2021-05-22 
Apollo 및 Rn을 한꺼번에 배우기 위해 인스타 클론 시작 

# Instaclone 

Instaclone Backend. 

#3.2 Babel을 도입해서 모든 node version에 상관없이 동일한 문법을 실행할 수 있도록 함. 

#3.3 apollo-server와 type definitions를 사용해서 간단하게 API를 다룬다. 
     _는 이 파라미터를 무시하라는 뜻임 -> root라고 해도 됨. 

#3.4 Prisma가 우리의 데이터베이스에게 대신 말해줄거다. 
     Prisma가 migration을 적용하고, 데이터베이스를 동기화해줄 거다. 그 이후에 Prisma는 client라는 것을 생성할 거다. 
     그리고 이 클라이언트를 통해 자바스크립트로 데이터베이스와 대화할 수 있게 되는 것임. 
     datasourse는 Prisma에게 데이터베이스의 주소(url)와 종류(provider)에 대해 알려주는 것이다. 

#3.5 Prisma에서 client는 기본적으로 '어떤 방식으로 데이터베이스와 상호작용하는가'에 대한 역할을 한다. 
     Prisma Migrate는 schema.prisma 파일의 데이터모델을 쓰고 설명할 수 있게 한다. 

#3.6 client는 특이하게 node_modules에 저장되어 있음. 
     스키마랑 type definition이 일치해야 정확하게 실행이 가능함
     client 불러와서 명령어 실행 

#3.7 schema.js는 쪼개져 있는 파일들을 merge하는 파일이고 이걸 server.js에서 불러와서 사용한다. 

#4.4 login이 mutation인 이유는 로그인 자체가 유저의 status의 변화이기 때문에 Mutation이다. 
     login 자체가 동사이기도 하면서 Auth가 False로 부터 true로 변화하기 때문에 
     일단 이 프로젝트에서는 로그인 기록 로그인 상태에 대한 변화를 db에 저장안하므로 
     mutation에 속함. 
     mutation에는 스키마 연결이 필수는 아니지만
     query에는 스키마 연결이 필수이다. 

#4.6 update할 때 prisma에 undefined를 보내면 데이터베이스에 그 값들을 보내지 않음. 
     그래서 알아서 필터링 해줌

#4.7 3번째 인자의 context 인자는 모든 resolvers에 접근 가능함. 

#4.19 서버에 파일을 업로드했기 때문에 apollo-server-express가 필요하다. 

#4.22 db간 relationship은 매우 비싸기 때문에 그 값들을 조회하고 싶으면 findUnique에 따로 include를 적어줘야 한다. 

#4.24 offset pagination 방식의 경우 table 형태로 값을 받아와서 Page별로 보여줄 때 효과적이다.
      findUnique에서 select옵션을 통해 특정 값만 출력해줄 수 있다.
      findMany와 count의 경우 some 옵션을 통해 where절을 쓴다. 

#4.25 cursor pagination의 경우 마지막 id값을 활용하기 때문에 무제한 스크롤링에 유효하다. 

#4.26 computed를 이용해서 User의 다른 값들을 계산해서 변수로 넣을 수 있다. 

#4.27 return 값이 User면 굳이 return을 안 적어줘도 됨. 
      여러개를 반환하면 (ex, findMany) [User] 이런 식으로 배열로 반환해줘야함. 

#6.11 include와 select의 차이점은 include는 결과에 relationship을 추가해주고 select는 말그대로 받고 싶은 값만 받아노는 것이다. 
      그리고 둘 중 하나만 써야 한다. 

#6.17 [shared] 폴더 안에 MutationResponse를 통해 result값들이 같은 것들은 굳이 쓸 필요없이 MutationResponse를 재활용해서 쓸 수 있다.

#6.18 4번째 인자인 info에서 query인지 mutation인지 알 수 있다. 
      이렇게 함으로써 query도 protect로 보호가 가능하다.

#7.7 실시간 채팅(listen)을 위해서 pubsub을 쓰는데 이건 교육용이고 프로용은 Redis를 써야함. 

#7.11 onConnect를 return 하면 context로 값이 이동한다.
