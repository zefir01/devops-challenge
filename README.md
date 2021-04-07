# DevOps Engineer Challenge

Implement infrastructure as code (IaC) for a simple web application that runs on AWS Lambda that prints the request header, method, and body, the application shoud be intergrated with CI/CD meaning regardless if it uses simple GitHub actions, or any other related technology 

Please upload your solution to a public Github repository with a detailed README file with exact steps on building and testing.

**Example Test Case**:
```
curl --header "Content-Type: application/json" --data '{"username":"xyz","password":"xyz"}' http://${URL}:${PORT}/api
```

**Response**:

Welcome to our demo API, here are the details of your request:

***Headers***:
Content-Type: application/json

***Method***:
Get
Body:
{"username":"xyz", "password":"xyz"}


**Notes**: 

- You are free to use any IaC framework, preferably Terraform
- You don't have to support all HTTP methods, only GET and POST are enough
- Include detailed steps to build, test, and clean the stack
- You can use your preferred programming language to implement the simple web service
