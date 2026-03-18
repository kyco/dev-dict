# CLAUDE.md

- **Use `pnpm`** (not npm/yarn). Key commands: `pnpm build`, `pnpm test`, `pnpm demo:dev`. Always run `pnpm test` before committing.
- **Adding terms/types/tags**: Create file in `src/data/{terms,types,tags}/{id}.ts` (lowercase + underscores, filename must match ID), add to the corresponding `index.ts`, and add an alphabetically ordered export in `src/{terms,types,tags}-entry.ts`. Look at existing files for the shape.
- **Path aliases**: Use `@/*` for `src/*` imports. Demo uses `~/` for `demo/src/`.
- **Conventional commits**: `fix:` (patch), `feat:` (minor), `BREAKING CHANGE:` (major).
- **Writing style**: British English in markdown, American English in code. No unnecessary comments.
