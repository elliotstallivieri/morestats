![Status](https://img.shields.io/badge/status-WIP-orange)
![Frontend](https://img.shields.io/badge/frontend-React%20%2B%20MUI-blue)
![Backend](https://img.shields.io/badge/backend-FastAPI%20%2B%20PostgreSQL-green)
![Made with ❤️](https://img.shields.io/badge/made%20with-%E2%9D%A4-red)

---


# MoreStats & Statistships

This repository contains two related projects built to explore web development with **React**, **FastAPI**, and **PostgreSQL**, using data from **League of Legends**.

> [MoreStats](#-morestats)  
> [Statistships](#-statistships)

---

## 🔹 MoreStats

**MoreStats** is a personal project I started to improve my skills in fullstack development. It focuses on global champion statistics using data from the Riot Games API.

> **Status:** ⏸️ Paused – Some UI components are being reused in the Statistships project.

### 🎯 Objectives

#### Technical Goals
- Fetch and analyze match data from the Riot Games API.
- Display general champion statistics (win rate, pick rate, ban rate, etc.).
- Apply UI design principles using **MUI**, build responsive layouts.

#### Learning Goals
- Improve fullstack skills with **React + TypeScript** and **FastAPI**.
- Structure a full web app with clean architecture and reusable components.

### ⚙️ Tech Stack

- **Frontend:** React, TypeScript, MUI
- **Backend (planned):** FastAPI, PostgreSQL

### 🚧 Features in Progress

- [x] Champion list page with sorting
- [x] Champion detail page – layout
- [x] Champion detail page – logic & design
- [ ] Champion list design improvements
- [ ] Backend implementation
- [ ] Riot API integration (live data)

---

## 🔹 Statistships

**Statistships** expands on MoreStats with a deeper focus on professional games. It analyzes detailed match data from official League of Legends tournaments.

### ✅ Frontend Progress

- [x] Create the base pages and navigation
- [ ] Player details with mock data
- [ ] Team details with mock data
- [ ] Champion details with mock data

### ✅ Backend Progress

- [x] Models, schemas, CRUDs & routes for:
  - Competitions
  - Editions
  - Teams
  - Players
- [ ] To-do: Add remaining tables (games, picks, bans, stats, etc.)

---

## ⚙️ Setup Instructions

### 1. Backend Requirements

You need a **PostgreSQL** database.  
Create a `.env` file in `/backend` with the following content:

```env
POSTGRES_USER=your_user
POSTGRES_PASSWORD=your_password
POSTGRES_DB=your_db
POSTGRES_HOST=localhost
POSTGRES_PORT=5432

DATABASE_URL=postgresql://your_user:your_password@localhost:5432/your_db
PYTHONPATH=./backend
```
Then install dependencies and run the backend:
```
cd backend
python -m venv .venv
source .venv/bin/activate  # or .venv\Scripts\activate on Windows
pip install -r requirements.txt
uvicorn app.main:app --reload
```
### 1. Backend Requirements
```
cd frontend
npm install
npm run dev
```

---

❗ Disclaimer
This project is a work in progress and not intended for production.
It is primarily a learning and experimentation tool to explore real-world web app architecture and data-driven UI.