# Data Integrity Tests

This directory contains automated tests that validate the integrity of the dev-dict data structure.

## Purpose

These tests prevent common contributor mistakes by automatically validating:

### File and Export Consistency
- **Missing imports**: Detects when a new term/tag/type file exists but isn't imported in the index file
- **Missing exports**: Detects when a file is imported but not exported in the entry file (terms-entry.ts, tags-entry.ts, types-entry.ts)
- **Extra exports**: Detects when an export exists in the entry file but the corresponding file doesn't exist
- **Alphabetical order**: Ensures entry files maintain alphabetical order for consistency

### Data Validation
- **Required fields**: Ensures all terms have id, name, label, definition, type, and tags fields
- **Required translations**: Ensures all terms/tags/types have en-US name (label and definition can be empty for stub terms)
- **Valid locales**: Ensures only valid locale codes (en-US, en-GB, de-DE) are used
- **ID conventions**: Ensures IDs use lowercase with underscores only (no dashes)
- **ID matching**: Ensures the ID field matches the object key
- **Filename matching**: Ensures the filename matches the term/tag/type ID exactly
- **Link validation**: Ensures terms with links have a website URL

## Running Tests

```bash
# Run tests once
pnpm test

# Run tests in watch mode (during development)
pnpm test:watch

# Open interactive UI
pnpm test:ui
```

## What Gets Tested

### Terms (src/data/terms/)
- All `.ts` files are imported in `src/data/terms/index.ts`
- All terms are exported in `src/terms-entry.ts`
- All terms have required fields: id, name, label, definition, type, tags
- All terms have en-US name (label and definition can be empty for stub terms)
- Terms with links have a website URL
- Export names match file names

### Tags (src/data/tags/)
- All `.ts` files are imported in `src/data/tags/index.ts`
- All tags are exported in `src/tags-entry.ts`
- All tags have required fields: id, name
- All tags have en-US name
- Export names match file names

### Types (src/data/types/)
- All `.ts` files are imported in `src/data/types/index.ts`
- All types are exported in `src/types-entry.ts`
- All types have required fields: id, name
- All types have en-US name
- Export names match file names

## Common Test Failures

### "Missing in X-entry.ts"
You created a new file but forgot to add the export to the entry file.

**Fix**: Add the export in alphabetical order:
```typescript
export { default as your_term_name } from '@/data/terms/your_term_name'
```

### "Extra in X-entry.ts"
You have an export that doesn't match a file (often due to a typo or file rename).

**Fix**: Ensure the export name matches the filename exactly, or remove the extra export.

### "has empty en-US name"
The term has an empty name field.

**Fix**: Add a name for the term. Names are required and cannot be empty (but label and definition can be empty for stub terms).

### "File X.ts exists but term ID doesn't match"
The filename doesn't match the ID inside the file.

**Example**: File is `backbone.ts` but the term inside has `id: 'backbone_js'`

**Fix**: Rename the file to match the ID. In this example, rename `backbone.ts` to `backbone_js.ts`. Remember: the filename must exactly match the `id` field in the term/tag/type object.

### "is out of order"
The exports in the entry file are not in alphabetical order.

**Fix**: Reorder the exports alphabetically. The test will show you the correct order.

### "contains invalid characters" or "contains dashes"
The ID uses invalid characters or dashes instead of underscores.

**Fix**: Rename the file and update the ID to use lowercase letters, numbers, and underscores only.

## Benefits

These tests eliminate the need for manual code review of common mistakes, making it easier for contributors to add content without deep knowledge of the codebase structure. Run `pnpm test` before committing to catch issues early!
