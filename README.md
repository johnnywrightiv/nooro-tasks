
# Next.js Task Management App
This is a Next.js app for managing tasks, connected to a backend server running on localhost:4000. You will need to run the backend server separately, requiring two separate terminals instances (one for the backend and one for the frontend).

## Getting Started

### Clone Repositories
**Frontend (this app):**
```bash
git clone <frontend-repo-url>
cd <frontend-repo-folder>
```

**Backend (API server):**
```bash
git clone <backend-repo-url>
cd <backend-repo-folder>
```

### Install Dependencies
**Frontend:**
```bash
npm install
```

**Backend:**
```bash
npm install
```

### Run the Servers
**Start Backend (localhost:4000):**
```bash
npm start
```

**Start Frontend (localhost:3000):**
```bash
npm run dev
```

### Configure Frontend
Add a `.env.local` file in the frontend folder with:
```env
NEXT_PUBLIC_API_URL=http://localhost:4000
```

## Usage

1. Start both servers.
2. Open [http://localhost:3000](http://localhost:3000) in your browser.
3. Manage tasks and see updates connected to the backend.

## Troubleshooting

- **API issues?** Ensure both servers are running and `NEXT_PUBLIC_API_URL` is correct.
- **Port conflicts?** Change ports in the `.env` files or commands.

You're all set!
