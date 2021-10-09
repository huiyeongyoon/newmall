# server

- 서버는 node의 express를 사용합니다. [프로젝트 시작 방법](https://expressjs.com/ko/starter/generator.html)
- 만드는 방법은 아래와 같이 합니다.
  - `npm install express-generator -g` 실행해서 express를 설치합니다.
  - `express --no-view [프로젝트 이름]`을 실행합니다.
  - **프로젝트 이름**으로 된 서버  코드가 만들어져 있습니다.
  - `cd 프로젝트 이름` -> `yarn install` 실행
  - `nodemon`을 설치해서 package.json의 `scripts`를 다음과 같이 변경합니다.
  - `nodemon`은 `yarn add -D nodemon`을 실행해서 설치합니다.
  - 이후에 `yarn start`를 실행합니다. 그럼 `http://localhost:3000`에 서버가 열립니다.
```json
{
  "name": "server",
  "version": "0.0.0",
  "private": true,
  "scripts": {
    "start": "nodemon ./bin/www"
  },
  "dependencies": {
    "cookie-parser": "~1.4.4",
    "debug": "~2.6.9",
    "express": "~4.16.1",
    "morgan": "~1.9.1"
  },
  "devDependencies": {
    "nodemon": "^2.0.13"
  }
}
```