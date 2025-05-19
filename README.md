# Serverless Page Visit Counter using DynamoDB, Lambda, and API Gateway

## 📌 Project Overview

This project demonstrates how to build a serverless visit counter for a static website hosted on Amazon S3. It uses AWS services—DynamoDB, Lambda, and API Gateway—to track and display the number of times a webpage has been visited. The counter updates dynamically whenever a user loads the site, providing real-time insights into user traffic.

---

## 🧱 Architecture

The system is designed around a fully serverless architecture using the following AWS components:

- **Amazon S3** hosts the static HTML website.
- **Amazon API Gateway** exposes a RESTful endpoint that the website can call securely.
- **AWS Lambda** runs backend logic to increment and fetch visit counts.
- **Amazon DynamoDB** stores the count in a fast, scalable NoSQL database.

When a user visits the site, the frontend makes a call to API Gateway, which triggers a Lambda function. The function updates the visit count in DynamoDB and returns the updated number to the website to be displayed to the user.

---

## 🎯 Project Objective

The goal of this project is to demonstrate how serverless components can be integrated to add dynamic features to static websites. It focuses on real-world use of event-driven architecture and stateless design patterns in AWS, without the need for managing any infrastructure.

---

## 📚 Learning Outcomes

By completing this project, I gained hands-on experience in:

- Designing a fully serverless workflow on AWS
- Integrating S3, Lambda, API Gateway, and DynamoDB
- Enabling real-time data updates in a static frontend
- Managing CORS policies and securing API endpoints
- Understanding how frontend and backend components communicate in a decoupled environment

---

## ✅ Potential Use Cases

- Website analytics and engagement tracking
- Interactive counters for portfolios, blogs, or landing pages
- Lightweight telemetry for serverless applications

---

## 🚀 Future Enhancements

- Add IP filtering or rate-limiting for more accurate visit tracking
- Store timestamps and geolocation data for richer analytics
- Build a dashboard using CloudWatch or QuickSight to visualize traffic over time
- Integrate with CloudFront for global content delivery and caching

---

## 🙌 Summary

This project is a practical demonstration of how AWS serverless services can be combined to enhance static websites with dynamic, scalable functionality. It serves as both a learning experience and a portfolio-ready example of cloud-native development.
