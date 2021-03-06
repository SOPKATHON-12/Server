# Sopkathon-Server

## ๐ ์๋น์ค ์ด๋ฆ๊ณผ ์๊ฐ

### ํ(ๆจ)๋์ด๊ณผ : ๋ด โํโ์ด ์ด๊ณผ๋๋ ์๊ฐ ๊ฒ์์ผ๋ก ํ์ด๋ณด๋ ๋ด ๋ง์์ 'ํ'์ด์ผ๊ธฐ.

๋๊ฐ ๋ ๋นก์น๊ฒ ํ๋? ์ผ์์ ์๊ธด ์คํธ๋ ์ค ๋ํํ ํ๊ณ ! ์๊ธฐํด๋ด!
์๋ฆฌ์ง๋ฅด๊ธฐ/๋ถ์๊ธฐ ๊ฒ์์ผ๋ก '๋ญํน'ํ์ธ ์ต๊ณ ์ ๋นก์นจ๋ฌ๊ฐ ๋๊ณ  ์น๊ตฌ์๊ฒ ์ค๋์ ๋นก์นจ์ '๊ณต์ 'ํด๋ณด์!
๊ฒ์ ๊ธฐ๋ก 'ํ์'์ ํตํด ๋์ ๋นก์นจ ์ผ์์ ๋๋์๋ณด๊ณ  ์ฑ์ฅํ์!

##  DB Schema
[๐DB Schema ๋ฐ๋ก๊ฐ๊ธฐ](https://flaxen-warlock-70e.notion.site/DB-Scheme-da88552325d94470bdc49c10d856b268)
๐
## ๐ป API ๋ช์ธ ๋ฐ ๊ฐ๋ฐ ๋ด๋น ๋ถ๋ถ

[๐API ๋ช์ธ์ ๋ฐ๋ก๊ฐ๊ธฐ](https://flaxen-warlock-70e.notion.site/API-982ce7a2c1e04b54bd92b88a1587b963)

##  Server Architeture
<img width="804" alt="แแณแแณแแตแซแแฃแบ 2022-05-22 แแฉแแฅแซ 6 48 39" src="https://user-images.githubusercontent.com/68772751/169670002-249e7602-9d7f-4a76-94ef-0f7c9976dd23.png">

## ๐ค ์ฝ๋ ์ปจ๋ฒค์

### 1. ๋ค์ด๋ฐ ๊ท์น

- lowerCamelCase์ฌ์ฉ
  - ํด๋์ค, ์ธํฐํ์ด์ค, db์คํค๋ง์ ๊ฒฝ์ฐ Upper**CamelCase**
- ํจ์๋ช : ๋์ฌ+๋ช์ฌ
  - API์ ์ง๊ฒฐ๋๋ ํจ์๋ CRUD ๋ช์นญ์ ์์ ๋ฌ๊ธฐ
    - ex. Create โ create000 Read โ get000 (getUserById, getUsers) Update โ update000 Delete โ delete000
- ๋ณ์๋ช : ๋ช์ฌ+๋ช์ฌ or ํ์ฉ์ฌ+๋ช์ฌ
- ๋ณ์ ์ต๋ ๊ธธ์ด 20์
- ๋ช์ฌ๋ ๋จ์๋ก ์ฐ์ง ์๋ ๊ฐ์๋ฅผ ๋ํ๋ด๋ ๋จ์ด ๊ผญ ์ ์ด์ฃผ๊ธฐ
  - ex. ๋ณต์ : getUsers() / ๋จ์ : getUser()

### 2. ํ๋ก์ ํธ ํด๋๋ง๋ช

- ํด๋๋ช

  - ์๋ฌธ์ ์ฌ์ฉ

- ํ์ผ๋ช
  - UpperCamelCase ์ฌ์ฉ

### 3. ๊ทธ ์ธ ์ฝ๋ ์์ฑ ์ ์ ์ ์ฌํญ

- type ์ง์  ํ์

- any ์ฐ์ง ๋ง๊ธฐ

- controller์ ์ด๋ค API ์ธ์ง ์ฃผ์ ๋ช์

  ```
  /**
   * @route Post /movie
   * @desc Create Movie
   * @access Public
   */
  ```

---

### 4. Lint ์ค์ 

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

## โก๏ธ Git ์ปจ๋ฒค์

### 1. Branch ์ ๋ต

- Git-flow ์ ๋ต
- main, develop, ๊ฐ์ ์ด๋ฆ ๋ธ๋์น ์ฌ์ฉ
  - ์ด๋ฆ์ผ๋ก ๋ธ๋์น ์์ฑ
    - ์์ ์ด ๋งก์ ๋ถ๋ถ ๊ธฐ๋ฅ ๊ตฌํ ํ ํ๋ฆฌํ
    - ํ์์ด ๋จธ์งํ๋ฉด ๋ฐ๋ก๋ฐ๋ก ํ๋ฐ๊ธฐ
    - ์์ ์ ์ด๋ฆ ๋ธ๋์น ์ญ์ ํ์ง๋ ์๊ณ  ๊ณ์ ์ฌ์ฉ

### 2. Issue ๊ด๋ฆฌ

- issue type
  - [feat] : ๊ธฐ๋ฅ ์ถ๊ฐ
  - [fix] : ์๋ฌ ์์ , ๋ฒ๊ทธ ์์ 
  - [docs] : README, ๋ฌธ์
  - [modify] : ์ฝ๋ ์์  (๊ธฐ๋ฅ์ ๋ณํ๊ฐ ์์ ๋)
  - [chore] : ํ๋ก์ ํธ ์ธํ ๋ฐ ์ํฅ์ ์ฃผ์ง ์๋ ์ฝ๋ ์์ 
- github label
  - issue type ๊ณผ ๋์ผํ๊ฒ ๋ง๋ค ์์ 
  - ํ์ ์ด๋ฆ ์ถ๊ฐ
  - pull request ๋ผ๋ฒจ ์ถ๊ฐ (ํ๋ฆฌํํ  ๋ ๋ฌ๊ธฐ)

### 3. Commit ๊ด๋ฆฌ

- `#{issue_number} [prefix] ์์ ๋ด์ฉ`
- ex) #1 [feat] ๋ก๊ทธ์ธ ๋ฒํผ ํด๋ฆญ ์ด๋ฒคํธ ์ฒ๋ฆฌ
- commit message ๋ง์ง๋ง์ ๋ง์นจํ(.) ์ฐ์ง ์๊ธฐ

## ๐ ํ๋ก์ ํธ ํด๋๋ง

```
๐ฆsrc
โฃ ๐config
โฃ ๐controllers
โฃ ๐interface
โฃ ๐loaders
โฃ ๐middleware
โฃ ๐modules
โฃ ๐models
โฃ ๐routes
โฃ ๐services
โฃ ๐index.ts
โ ๐.eslintrc.json
โ ๐.prettierrc.json
โ ๐nodemon.json
โ ๐pacakge.json
โ ๐pacakge-lock.json
โ ๐tsconfig.json
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