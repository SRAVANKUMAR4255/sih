# Copilot instructions for SIH (sih)

## Quick context
- Frontend SPA built with Create React App (React 19 + `react-scripts` 5) located under `src/`.
- No backend implementation in repository (empty `backend/`). Frontend expects a REST API at `http://localhost:8000` (see `src/services/api.js`).
- Authentication: token stored in `localStorage` keys `authToken` and `authUser`; header `Authorization: Bearer <token>` is injected by the axios interceptor in `src/services/api.js`.

## How to run / common developer commands ✅
- Start dev server: `npm start` (CRA default; opens on http://localhost:3000)
- Run tests: `npm test` (CRA test runner; there are currently no tests)
- Build for production: `npm run build` (outputs to `build/`)

## Big picture / architecture (what an agent should know) 🔧
- Single-page React app without `react-router`. Page switching is handled by local state in `src/App.jsx` (buttons set `currentPage`).
- Components are simple, page-focused components under `src/pages/` (e.g., `Home.jsx`, `InternshipList.jsx`, `StudentRegister.jsx`, `MatchResults.jsx`).
- API calls are centralized in `src/services/api.js` using `axios` (preferrable place to add mocks/tests or change base URL).
- Auth state is provided by `src/AuthContext.jsx` (AuthProvider and `useAuth` hook), but note: `AuthProvider` is not injected into `App.jsx` anywhere; auth flow is partially implemented.

## API contract / integration expectations (concrete examples) 🔗
- Base URL: hardcoded to `http://localhost:8000` in `src/services/api.js`.
- Expected endpoints (used by frontend):
  - POST `/auth/register` — register user (frontend expects token/user in response)
  - POST `/auth/login` — login (returns token + user)
  - POST `/auth/logout` — logout
  - GET `/auth/me` — get current user profile
  - POST `/students/register` — register a student (payload fields used in `StudentRegister.jsx`)
  - GET `/students` — list of students (admin)
  - GET `/internships` — list of internships (each item used as `{ id, company_name, domain, required_skills, location, duration_months }`)
  - POST `/internships/create` — create internship
  - POST `/match/run` — trigger matching algorithm
  - GET `/match/results` — list of match results (`{ student_name, company_name, internship_title, internship_domain, match_score, status }` expected)
  - GET `/match/my-results` — user-specific results
- Error shape: UI reads `error.response?.data?.detail` for messages — prefer returning JSON { detail: '...' } on errors.

## Conventions & patterns (project-specific) 📐
- Styling: inline JS style objects in each component (`const styles = { ... }`) — new UI should follow the same pattern unless making a global refactor.
- Skill lists: internships' `required_skills` may be a comma-separated string; components split by `,` (see `InternshipList.jsx`).
- Messages: pages use `alert()` for user-facing messages in many places — avoid changing behavior unless intentionally replacing with a global toast system.
- Date/time/config: there is no `.env` usage; if changing API host please update `src/services/api.js` (consider switching to `process.env.REACT_APP_API_URL` if you need env-driven configs).

## Missing pieces and gotchas ⚠️
- No backend is provided — API endpoints will 404 unless a backend service is running at `localhost:8000`.
- `AuthProvider` exists but is not mounted; many auth-related paths are unconnected (no login page currently exists). Adding/using `AuthProvider` in `src/index.js` and creating a `Login` page are common next steps.
- Some files referenced in workspace summary (e.g., `Login.jsx`, `UserRegister.jsx`) are absent.

## Areas to modify for common tasks (where to edit) 🔧
- To change base API URL: edit `src/services/api.js` (replace hardcoded BASE_URL with `process.env.REACT_APP_API_URL` and update deployment docs).
- To add auth provider: wrap `<App />` with `<AuthProvider>` in `src/index.js` and add a `Login` component (use `loginUser` from `src/services/api.js`).
- To test endpoints in isolation: mock `src/services/api.js` with jest mocks or mock axios (tests are not present yet; use `__mocks__` for axios or dependency injection).

## Recommended guardrails for AI agents 🤖
- Keep changes minimal and well-scoped: add feature files under `src/pages/` or `src/components/` and update `src/App.jsx` navigation carefully (no router is used).
- Preserve inline-style pattern and existing UI affordances (alerts, layout) unless proposing an explicit style refactor PR.
- When working on API integration, include clear instructions/comments that `backend/` is currently empty and developers must run the backend on `localhost:8000`, or change `BASE_URL`.

## Example tasks with pointers
- Add `Login` page: create `src/pages/Login.jsx` → use `loginUser` from `src/services/api.js` → on success call `localStorage.setItem('authToken', token)` and `localStorage.setItem('authUser', JSON.stringify(user))` and call `AuthProvider.login()` if you mount it.
- Make API host configurable: replace `const BASE_URL = 'http://localhost:8000'` with `const BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000'` and document `.env` usage in README.
- Integrate AuthProvider: import and wrap in `src/index.js` so `useAuth` can be used across components.

---
If you'd like, I can create this file (`.github/copilot-instructions.md`) now (merge or replace) and then iterate based on your priorities (e.g., include additional TODOs, more precise request/response JSON examples, or add a short runbook to stand up a mock backend). Please tell me whether to add more detail on any area.