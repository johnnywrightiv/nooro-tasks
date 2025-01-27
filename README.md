
# Next.js Task Management App
This is a Next.js app for managing tasks, connected to a backend server running on localhost:4000. You will need to run the backend server separately, requiring two separate terminals instances (one for the backend and one for the frontend).

## Getting Started

### Clone Repositories
**Frontend (this app):**
```bash
git clone https://github.com/johnnywrightiv/nooro-tasks
cd nooro-tasks
```

**Backend (API server):**
```bash
git clone https://github.com/johnnywrightiv/nooro-server
cd nooro-server
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
npx tsx src/app.ts
```

**Start Frontend (localhost:3000):**
```bash
npm run dev
```

### Configure Server and Database
Visit https://github.com/johnnywrightiv/nooro-server for more information on running the API server.

## Usage

1. Start both servers.
2. Open [http://localhost:3000](http://localhost:3000) in your browser.
3. Manage tasks and see updates connected to the backend.

## Troubleshooting

- **API issues?** Ensure both servers are running and `NEXT_PUBLIC_API_URL` is correct.
- **Port conflicts?** Change ports in the `.env` files or commands.

You're all set!
