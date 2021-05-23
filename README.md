2021-05-22 
Apollo 및 RM을 한꺼번에 배우기 위해 인스타 클론 시작 

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