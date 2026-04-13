# 🍽️ BudgetRecipe — Unified Repo

## Structure
- `backend/` — Python Flask API
- `frontend/` — React + TypeScript + Vite + shadcn/ui
- `frontend-legacy/` — Original static HTML (150+ recipes)
- `docs/` — Architecture & API docs

## Quick Start
### Backend
```bash
cd backend && python -m venv venv && source venv/bin/activate
pip install -r requirements.txt && cp .env.example .env && python app.py
```
### Frontend
```bash
cd frontend && npm install && npm run dev
```
