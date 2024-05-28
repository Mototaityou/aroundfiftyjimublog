# aroundfiftyjimublog

This template should help get you started developing with Vue 3 in Vite.

## About
<img src="https://img.shields.io/badge/-Node.js-000000.svg?logo=node.js&style=for-the-badge"> <img src="https://img.shields.io/badge/-Vue.js-364659.svg?logo=vue.js&style=for-the-badge"> <img src="https://img.shields.io/badge/-Typescript-000000.svg?logo=typescript&style=for-the-badge">  <img src="https://img.shields.io/badge/-Sass-123262.svg?logo=sass&style=for-the-badge"> <img src="https://img.shields.io/badge/-Amazon%20aws-232F3E.svg?logo=amazon-aws&style=for-the-badge"> <img src="https://img.shields.io/badge/-aws%20route%2053-232F3E.svg?logo=amazonroute53&style=for-the-badge"> <img src="https://img.shields.io/badge/-aws%20lambda-232F3E.svg?logo=awslambda&style=for-the-badge"> <img src="https://img.shields.io/badge/-aws%20s3-232F3E.svg?logo=amazons3&style=for-the-badge"> <img src="https://img.shields.io/badge/-aws%20SES-232F3E.svg?logo=amazonsimpleemailservice&style=for-the-badge"> <img src="https://img.shields.io/badge/-aws%20cognito-232F3E.svg?logo=amazoncognito&style=for-the-badge"> <img src="https://img.shields.io/badge/-aws%20dynamodb-232F3E.svg?logo=amazondynamodb&style=for-the-badge"> <img src="https://img.shields.io/badge/-aws%20api%20gateway-232F3E.svg?logo=amazonapigateway&style=for-the-badge">

**aroundfiftyjimublog** was developed by Mototaityou, a novice programmer, using Vue.js, Vuetify, and TypeScript to gain experience with Amazon Web Services and deployed on AWS.

* [aroundfiftyjimublog](https://aroundfiftyjimu.com/) - This HTML link will direct you to the page titled **aroundfiftyjimublog**.

## AWS Architecture Diagram
![Blog drawio](https://github.com/Mototaityou/reversi/assets/103736269/646cf070-ac07-4ffb-99d0-04b2350d644a)

## Display function (homepage)
*aroundfiftyjimublog* application leveraged the following technologies to display blog posts: API Gateway (HTTP), Lambda (Python), and DynamoDB. The DynamoDB table design was optimized for efficient querying of the Partition Key and Sort Key.

<img width="1259" alt="homepage" src="https://github.com/Mototaityou/aroundfiftyjimublog/assets/103736269/91be3132-39d0-4243-9ffa-fbe601ed01c8">

##  Contact Us form　
*aroundfiftyjimublog* application leveraged the following technologies to develop the Contact Us form: API Gateway (REST), Lambda (Python), and SES. The SES is capable of sending an email to the administrator (Mototaityou) from the Contact form.

## Comments Section
*aroundfiftyjimublog* application enables users to sign in via OIDC Idp (Google) from the Cognito sign-in page. Once authorized, users can receive authentication (JWT) via API Gateway (REST) and write comments to DynamoDB via Lambda (Python).

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
