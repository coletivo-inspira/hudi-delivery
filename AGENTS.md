<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Cursor Cloud specific instructions

This is a static Next.js 16 marketing site (single package, no backend/database). The only service is the Next.js dev server. Standard commands live in `README.md` and `package.json` scripts (`dev`, `lint`, `typecheck`, `test`, `build`, `check`).

- **Node version / PATH gotcha**: The project targets Node.js 24. Node 24 is installed via nvm and is the default in login/interactive shells and in tmux (which starts a login shell), so run `npm run dev` and other commands there. The plain non-login shell resolves to a bundled Node 22 (`/exec-daemon/node`), which still satisfies Next's `>=20.9` engine, but to match the project's Node 24, prefix one-off commands with `bash -lc '...'`.
- **Dev server**: `npm run dev` serves on a hardcoded port **9009** (`http://localhost:9009`). Static export output goes to `out/`.
- **Blocked install scripts are fine**: npm 11 does not run the `sharp` and `unrs-resolver` install scripts by default. This does not break lint, typecheck, tests, or the static-export build (image optimization is disabled under `output: "export"`), so no action is needed.
