# Sopkathon-Server

## 👋 서비스 이름과 소개

### 한(恨)도초과 : 내 ‘한’이 초과되는 순간 게임으로 풀어보는 내 마음속 '한'이야기.

누가 널 빡치게 했니? 일상속 생긴 스트레스 나한테 풀고! 얘기해봐!
소리지르기/부수기 게임으로 '랭킹'확인 최고의 빡침러가 되고 친구에게 오늘의 빡침을 '공유'해보자!
게임 기록 '회상'을 통해 나의 빡침 일상을 되돌아보고 성장하자!

##  DB Schema
[👉DB Schema 바로가기](https://flaxen-warlock-70e.notion.site/DB-Scheme-da88552325d94470bdc49c10d856b268)
🗄
## 💻 API 명세 및 개발 담당 부분

[👉API 명세서 바로가기](https://flaxen-warlock-70e.notion.site/API-982ce7a2c1e04b54bd92b88a1587b963)

##  Server Architeture
<img width="804" alt="스크린샷 2022-05-22 오전 6 48 39" src="https://user-images.githubusercontent.com/68772751/169670002-249e7602-9d7f-4a76-94ef-0f7c9976dd23.png">

## 🤙 코드 컨벤션

### 1. 네이밍 규칙

- lowerCamelCase사용
  - 클래스, 인터페이스, db스키마의 경우 Upper**CamelCase**
- 함수명 : 동사+명사
  - API와 직결되는 함수는 CRUD 명칭을 앞에 달기
    - ex. Create → create000 Read → get000 (getUserById, getUsers) Update → update000 Delete → delete000
- 변수명 : 명사+명사 or 형용사+명사
- 변수 최대 길이 20자
- 명사는 단수로 쓰지 않되 개수를 나타내는 단어 꼭 적어주기
  - ex. 복수 : getUsers() / 단수 : getUser()

### 2. 프로젝트 폴더링명

- 폴더명

  - 소문자 사용

- 파일명
  - UpperCamelCase 사용

### 3. 그 외 코드 작성 시 유의 사항

- type 지정 필수

- any 쓰지 말기

- controller에 어떤 API 인지 주석 명시

  ```
  /**
   * @route Post /movie
   * @desc Create Movie
   * @access Public
   */
  ```

---

### 4. Lint 설정

- .eslintrc.json

```json
{
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": ["google", "eslint:recommended", "plugin:@typescript-eslint/recommended", "plugin:prettier/recommended"],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": ["@typescript-eslint"],
  "rules": {
    "prettier/prettier": "error",
    "@typescript-eslint/no-var-requires": "error",
    "new-cap": ["error", { "capIsNew": false }],
    "no-prototype-builtins": "off",
    "no-self-assign": "off",
    "no-empty": "off",
    "no-case-declarations": "off",
    "consistent-return": "off",
    "arrow-body-style": "off",
    "camelcase": "off",
    "quotes": "off",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": ["warn"],
    "comma-dangle": "off",
    "no-bitwise": "off",
    "no-use-before-define": "off",
    "no-extra-boolean-cast": "off",
    "no-empty-pattern": "off",
    "curly": "off",
    "no-unreachable": "off"
  },
  "ignorePatterns": ["dist/", "node_modules/"]
}
```

- .prettierrc.json

```json
{
  "printWidth": 200,
  "tabWidth": 2,
  "useTabs": false,
  "semi": true,
  "singleQuote": true,
  "quoteProps": "consistent",
  "trailingComma": "all",
  "bracketSpacing": true,
  "endOfLine": "auto",
  "arrowParens": "avoid"
}
```

## ⚡️ Git 컨벤션

### 1. Branch 전략

- Git-flow 전략
- main, develop, 각자 이름 브랜치 사용
  - 이름으로 브랜치 생성
    - 자신이 맡은 부분 기능 구현 후 풀리퀘
    - 팀원이 머지하면 바로바로 풀받기
    - 자신의 이름 브랜치 삭제하지는 않고 계속 사용

### 2. Issue 관리

- issue type
  - [feat] : 기능 추가
  - [fix] : 에러 수정, 버그 수정
  - [docs] : README, 문서
  - [modify] : 코드 수정 (기능의 변화가 있을 때)
  - [chore] : 프로젝트 세팅 및 영향을 주지 않는 코드 수정
- github label
  - issue type 과 동일하게 만들 예정
  - 팀원 이름 추가
  - pull request 라벨 추가 (풀리퀘할 때 달기)

### 3. Commit 관리

- `#{issue_number} [prefix] 작업 내용`
- ex) #1 [feat] 로그인 버튼 클릭 이벤트 처리
- commit message 마지막에 마침표(.) 찍지 않기

## 🗂 프로젝트 폴더링

```
📦src
┣ 📂config
┣ 📂controllers
┣ 📂interface
┣ 📂loaders
┣ 📂middleware
┣ 📂modules
┣ 📂models
┣ 📂routes
┣ 📂services
┣ 📜index.ts
┃ 📜.eslintrc.json
┃ 📜.prettierrc.json
┃ 📜nodemon.json
┃ 📜pacakge.json
┃ 📜pacakge-lock.json
┃ 📜tsconfig.json
```

## package.json
```
"devDependencies": {
        "@types/bcryptjs": "^2.4.2",
        "@types/express": "^4.17.13",
        "@types/jsonwebtoken": "^8.5.8",
        "@types/mongoose": "^5.11.97",
        "@types/node": "^17.0.25",
        "@typescript-eslint/eslint-plugin": "^5.25.0",
        "@typescript-eslint/parser": "^5.25.0",
        "eslint": "^8.16.0",
        "eslint-config-google": "^0.14.0",
        "eslint-config-prettier": "^8.5.0",
        "eslint-plugin-prettier": "^4.0.0",
        "nodemon": "^2.0.15",
        "prettier": "^2.6.2",
        "ts-node": "^10.7.0",
        "typescript": "^4.6.3"
    },
    "dependencies": {
        "bcryptjs": "^2.4.3",
        "dayjs": "^1.11.2",
        "dotenv": "^16.0.0",
        "express": "^4.17.3",
        "express-validator": "^6.14.0",
        "jsonwebtoken": "^8.5.1",
        "mongoose": "^6.3.1"
    }
```