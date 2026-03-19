[![CI](https://github.com/nunazo987/FinalProject/actions/workflows/ci.yml/badge.svg)](https://github.com/nunazo987/FinalProject/actions/workflows/ci.yml)

# BoxBox — F1 Lap Analytics

Student: Nuno
Course: UpSkill - JavaScript Programming (Angular)

 About the Project

BoxBox is a Single Page Application (SPA) built with Angular that allows users to record and analyse Formula 1 pre-season testing lap times (2026).

The goal of this project is to simulate a simple performance analysis system, providing insights such as best lap, average time, and lap history.

 Features

- Dashboard

- Real-time KPIs:

    Total laps

    Best lap

    Average lap time

    Last lap added

- Lap Management (CRUD)

    Add new laps

    Edit existing laps

    View lap details (/laps/:id)

    List all recorded laps

- Filtering & Sorting

    Filter by driver, team, or circuit

    Sort by lap time

- Authentication

    User login and registration with Supabase

 Tech Stack

Frontend: Angular 21 (Standalone Components)

Language: TypeScript

Forms: Reactive Forms

Routing: Angular Router

Data Persistence: LocalStorage

Authentication: Supabase

Containerization: Docker & Docker Compose

CI/CD: GitHub Actions

 Authentication (Supabase)

Authentication is handled using Supabase, allowing:

User registration

Secure login

 Run with Docker

Make sure you have Docker installed.

Using Docker Compose
docker compose up -d

Then open:

http://localhost:80

 Run Locally

Clone the repository:

git clone <repo-url>

Install dependencies:

npm install

Configure Supabase:

Edit:

src/environments/environment.ts

and add your Supabase keys.

Start the app:

ng serve

Open:

http://localhost:4200

 CI/CD (GitHub Actions)

This project includes a CI pipeline using GitHub Actions that:

Builds the application

Validates the code

Prepares it for deployment

 Project Goals

This project was developed as part of the UpSkill program with the goal of:

Practicing Angular development (SPA, routing, forms)

Integrating authentication with Supabase

Learning Docker containerization

Applying CI/CD concepts

 Notes

This is an academic project created to demonstrate modern web development skills.
