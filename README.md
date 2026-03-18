[![CI](https://github.com/nunazo987/FinalProject/actions/workflows/ci.yml/badge.svg)](https://github.com/nunazo987/FinalProject/actions/workflows/ci.yml)

# BoxBox — F1 Lap Analytics

**Student:** Nuno  
**Course:** JavaScript Programming  

## Description

BoxBox is a Single Page Application (SPA) built with Angular to record and analyse lap times from the 2026 F1 pre-season testing.

## Features

-  **Dashboard** — Real-time KPIs: total laps, best lap, average lap time and last lap added
-  **Lap List** — List with filter by driver/team/circuit and sort by lap time
-  **Add Lap** — Form with validations and driver/circuit dropdowns
-  **Edit Lap** — Edit existing lap records
-  **Lap Detail** — Detail page with dynamic route `/laps/:id`
-  **Persistence** — Data stored in LocalStorage via Service

## How to Run
```bash
npm install
ng serve
```

Open `http://localhost:4200` in your browser.

## Tech Stack

- Angular 21 (Standalone Components)
- TypeScript
- Reactive Forms
- Angular Router
- LocalStorage