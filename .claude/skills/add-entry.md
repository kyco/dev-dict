# Add Entry Skill

Add new terms, types, or tags to the dev-dict project.

1. Create file in `src/data/{terms,types,tags}/{id}.ts` with a default export. Use an existing file as a template.
2. Import and add to the `RAW_*` object in the corresponding `index.ts`.
3. Add an alphabetically ordered export in `src/{terms,types,tags}-entry.ts`.
4. Run `pnpm test` then `pnpm build`.
