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

     