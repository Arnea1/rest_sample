# rest_sample

1. 프로젝트 클론을 수행
2. npm install 을 수행하면 dependencies에 의해 express관련 모듈이 node_modules에 설치
3. npm run start 또는 node app.js 실행하면 localhost:3000번 포트가 열림
4. http://localhost:3000/validUser 주소로 user, key JSON형태의 POST 요청을 보내면 저장된 값과 비교해서 성공 실패를 JSON으로 반환
