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

## Feature Details

### Article Display
Blog posts are retrieved through API Gateway and AWS Lambda and displayed on the homepage.

Article data is stored in DynamoDB and retrieved using optimized Partition Key and Sort Key queries to improve performance.

### Contact Form
The contact form allows users to send inquiries directly to the administrator.

The feature was implemented using API Gateway (REST), AWS Lambda, and Amazon SES. Submitted messages are processed by Lambda and delivered via email using Amazon SES.

### Comment Function
Users can sign in with Google through Amazon Cognito and post comments on articles.

JWT-based authentication is used to authorize API requests through API Gateway. Comments are processed by AWS Lambda and stored in DynamoDB.

### Article Management (CRUD)
A dedicated administrative application was developed with Vue.js to manage blog posts.

Authenticated administrators can create, read, update, and delete articles through API Gateway and AWS Lambda. All article data is stored in DynamoDB.
Amazon Cognito was selected to avoid implementing a custom authentication system and to gain experience with managed authentication services.

### CI/CD Pipeline
A CI/CD pipeline was implemented using GitHub, CodePipeline, and CodeBuild.

When code is pushed to GitHub, the application is automatically built and deployed to Amazon S3. CloudFront cache invalidation is then executed to ensure users receive the latest version of the application.
The pipeline was implemented to reduce manual deployment work and improve deployment reliability.

