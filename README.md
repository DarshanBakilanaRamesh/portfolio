# Portfolio Website

This project is a personal portfolio website built with React, Vite, and Tailwind CSS. It was extended as a DevOps interview project to demonstrate containerization, CI/CD, and Infrastructure as Code.

## Stack

- Frontend: React + Vite
- Styling: Tailwind CSS
- Container runtime: Docker + nginx
- CI: GitHub Actions
- CD: GitHub Actions deploying to AWS EC2 over SSH
- Infrastructure as Code: Terraform
- Additional CI example: Jenkins pipeline

## Architecture

The application is built as a static frontend and served by nginx inside a Docker container.

Deployment flow:

1. Code is pushed to GitHub.
2. GitHub Actions runs CI to install dependencies and build the app.
3. GitHub Actions runs CD on pushes to `main`.
4. The deploy workflow SSHs into the EC2 instance.
5. The EC2 instance pulls the latest code, rebuilds the Docker image, and restarts the container.

## Repository Structure

- `src/`: React application source code
- `public/`: static assets
- `Dockerfile`: multi-stage production image
- `nginx.conf`: nginx SPA routing and static serving
- `.github/workflows/ci.yml`: GitHub Actions CI pipeline
- `.github/workflows/deploy.yml`: GitHub Actions CD pipeline
- `terraform/`: Terraform infrastructure starter
- `Jenkinsfile`: Jenkins pipeline example

## Local Development

```bash
npm install
npm run dev
```

## Docker

Build and run locally:

```bash
docker build -t portfolio-site .
docker run -p 8080:80 portfolio-site
```

Then open `http://localhost:8080`.

## CI/CD

### GitHub Actions CI

The CI workflow:

- checks out the repository
- sets up Node.js
- runs `npm ci`
- runs `npm run build`

### GitHub Actions CD

The deploy workflow:

- connects to EC2 over SSH using GitHub Secrets
- pulls the latest code
- rebuilds the Docker image
- replaces the running container
- runs a local HTTP smoke check

Required GitHub repository secrets:

- `EC2_HOST`
- `EC2_USER`
- `EC2_SSH_KEY`

## Terraform

The `terraform/` folder contains a minimal Infrastructure as Code setup for:

- one EC2 instance
- one security group allowing SSH and HTTP

Typical workflow:

```bash
cd terraform
terraform init
terraform plan
```

`terraform apply` should only be run if you actually want Terraform to create a new EC2 instance.

## Jenkins

The included `Jenkinsfile` demonstrates the equivalent CI flow in Jenkins:

- checkout
- install dependencies with `npm ci`
- build with `npm run build`

This was added to match DevOps roles that use Jenkins while keeping GitHub Actions as the primary working pipeline for this repository.
