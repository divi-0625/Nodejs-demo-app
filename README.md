# Automate Code Deployment Using CI/CD Pipeline

## Project Overview

This project demonstrates the automation of testing, Docker image building, and image publishing using a Continuous Integration and Continuous Deployment (CI/CD) pipeline implemented with GitHub Actions.

Whenever code is pushed to the `main` branch, the workflow automatically tests the Node.js application, builds a Docker image, and pushes the image to Docker Hub if the tests pass.

## Objectives

- Understand the fundamentals of CI/CD automation.
- Automate application testing using GitHub Actions.
- Containerize a Node.js application using Docker.
- Automatically build and publish Docker images to Docker Hub.
- Manage sensitive credentials securely using GitHub Actions secrets.

## Technologies Used

- **Node.js** – Application runtime.
- **Git and GitHub** – Version control and source code hosting.
- **GitHub Actions** – CI/CD workflow automation.
- **Docker** – Application containerization.
- **Docker Hub** – Docker image registry.

## Project Structure

```text
nodejs-demo-app/
├── .github/
│   └── workflows/
│       └── main.yml
├── index.js
├── index.test.js
├── package.json
├── Dockerfile
├── .gitignore
└── README.md
```

## Application Details

The project contains a simple Node.js HTTP server that listens on port `3000` and returns a response confirming that the server is running.

Automated tests verify that the application responds with the expected HTTP status code and response message.

## CI/CD Pipeline Workflow

The GitHub Actions workflow consists of the following stages:

1. **Trigger:** The pipeline runs when code is pushed to the `main` branch. It can also be started manually.
2. **Checkout:** Retrieves the source code from the GitHub repository.
3. **Environment Setup:** Configures Node.js on the GitHub-hosted runner.
4. **Testing:** Starts the application and executes automated tests.
5. **Docker Setup:** Configures Docker Buildx for image building.
6. **Authentication:** Logs in to Docker Hub using GitHub repository secrets.
7. **Build and Push:** Builds the Docker image and pushes it to Docker Hub only after the testing job succeeds.

## GitHub Secrets Configuration

The following repository secrets are used to authenticate with Docker Hub:

| Secret Name | Purpose |
|---|---|
| `DOCKERHUB_USERNAME` | Docker Hub username |
| `DOCKERHUB_TOKEN` | Docker Hub access token |

These credentials are stored in GitHub repository settings rather than being hardcoded in the source code.

## Run the Application Locally

### Prerequisites

Install Node.js and Docker on your system.

### Run with Node.js

```bash
node index.js
```

Open `http://localhost:3000` in your browser.

### Build and Run with Docker

Build the Docker image:

```bash
docker build -t nodejs-demo-app .
```

Run the container:

```bash
docker run --name nodejs-demo-container -p 3000:3000 nodejs-demo-app
```

Open `http://localhost:3000` to verify the application.

## Expected Outcome

The completed pipeline automates application testing and Docker image publishing, reducing manual effort and demonstrating a basic CI/CD workflow using GitHub Actions and Docker.

## Learning Outcomes

- Understanding CI/CD pipeline concepts.
- Creating GitHub Actions workflows using YAML.
- Automating application tests.
- Building and running Docker containers.
- Publishing Docker images to Docker Hub.
- Managing credentials securely with GitHub Actions secrets.

## Internship Task

**Organization:** Elevate Labs  
**Task:** Task 1 – Automate Code Deployment Using CI/CD Pipeline (GitHub Actions)
