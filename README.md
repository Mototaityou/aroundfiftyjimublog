# aroundfiftyjimublog

## Project Overview

This is a serverless blog application built with Vue.js,
TypeScript, and AWS.

The application includes article management,
Google authentication,
comment posting,
contact forms,
and a CI/CD deployment pipeline.

It was developed to gain hands-on experience with
modern cloud architecture and backend integration using AWS services.

## Live Demo
🔗 https://aroundfiftyjimu.com

## Technology Stack

### Frontend
- Vue.js
- TypeScript
- Vuetify

### Backend
- AWS Lambda
- API Gateway

### Database
- DynamoDB

### Authentication
- Amazon Cognito
- Google Login

### Infrastructure
- Route53
- CloudFront
- S3

### Messaging
- Amazon SES

### CI/CD
- CodePipeline
- CodeBuild

## AWS Architecture Diagram
![Blog drawio](https://github.com/Mototaityou/reversi/assets/103736269/646cf070-ac07-4ffb-99d0-04b2350d644a)

## Features
- Article Management (CRUD)
- Google Authentication
- Authenticated User Comments
- Contact Form (Amazon SES)
- Automated CI/CD Deployment

## Challenges
- Implementing JWT-based authentication with Amazon Cognito
- Configuring API Gateway authorizers for authenticated requests
- Designing DynamoDB data models for article and comment retrieval
- Building a serverless architecture using Lambda, API Gateway, and DynamoDB
- Implementing CI/CD automation and CloudFront cache invalidation

## What I Learned
- JWT-based Authentication
- API Gateway and Lambda Integration
- DynamoDB Data Modeling
- Serverless Architecture Design
- CI/CD automation

## Homepage Article Display
This application leveraged the following technologies to display blog posts: API Gateway (HTTP), Lambda (Python), and DynamoDB. The DynamoDB table design was optimized for efficient querying of the Partition Key and Sort Key.

<img width="1259" alt="homepage" src="https://github.com/Mototaityou/aroundfiftyjimublog/assets/103736269/91be3132-39d0-4243-9ffa-fbe601ed01c8">

##  Contact Us form　
This application leveraged the following technologies to develop the Contact Us form: API Gateway (REST), Lambda (Python), and SES. The SES is capable of sending an email to the administrator (Mototaityou) from the Contact form.

## Comments Section
This application enables users to sign in via OIDC Idp (Google) from the Cognito sign-in page. Once authorized, users can receive authentication (JWT) from API Gateway (REST) and write comments to DynamoDB using Lambda (Python).

## Managing CRUD operations on the DynamoDB
The locally managed Vue.js application was developed as a system that can connect to DynamoDB using API Gateway (REST) and Lambda (Python) to enable the CRUD of blog posts once it is logged in via Cognito.

## CI/CD
The CI/CD setup automates the continuous delivery of the pipeline from VS Code to CodePipeline for fast and reliable updates: when pushed from VS Code, CodePipeline is launched, built with CodeBuild and uploaded to S3, and the CloudFront cache can be deleted by Lambda (Python).

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
