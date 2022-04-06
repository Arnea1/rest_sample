# rest_sample

1. 프로젝트 클론을 수행
2. npm install 을 수행하면 dependencies에 의해 express관련 모듈이 node_modules에 설치
3. npm run start 또는 node app.js 실행하면 localhost:3000번 포트가 열림
4. http://localhost:3000/validUser 주소로 user, key JSON형태의 POST 요청을 보내면 저장된 값과 비교해서 성공 실패를 JSON으로 반환
5. util/validator.js 에서 유저 체크를 수행함
6. curl 요청 기준으로 동작하고 있으며, 요청 예시 및 응답 예시와 curl 요청 샘플을 example.txt를 참고해서 사용가능

// 2022-04-06
1. Docker 이미지 빌드용 파일 추가
2. Docker 컨테이너에 올린 포트로 요청시 로컬과 동일한 결과를 기대할수 있음
3. 자세한 내용은 example.txt 
