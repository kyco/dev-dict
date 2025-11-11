# Term tags

This directory contains all the tags used to categorise terms in the developer dictionary.

## What are tags?

Tags are labels used to categorise and group related terms. For example, a term like "React" might have tags like `frontend`, `backend` and `open_source`.

## File structure

- `0-SCHEMA.json` - JSON schema definition for tag files
- `1-TEMPLATE.json` - Template file showing the structure for new tags
- `*.json` - Individual tag definition files

## Adding a new tag

1. Copy `1-TEMPLATE.json` and rename it to your tag's ID (e.g., `database.json`)
2. Update the `id` field to match the filename (without `.json`)
3. Add translations for the tag name in as many locales as you can:
   - `en-GB` (required) - English name
   - `de-DE` (optional) - German name

### Example

```json
{
  "$schema": "./0-SCHEMA.json",
  "id": "database",
  "name": {
    "en-GB": "Database",
    "de-DE": "Datenbank"
  }
}
```

## Naming conventions

- **File names**: Use lowercase with underscores for multi-word tags (e.g., `open_source.json`)
- **IDs**: Must match the filename (without `.json` extension)
- **Tag names**: Use proper capitalisation in the name translations

## Validation

Tag files are validated in two ways:

### Editor validation (VS Code)
All tag files are automatically validated against `0-SCHEMA.json` in VS Code as you edit them.

### Build-time validation
Tags are validated during the build process using `pnpm run validate:tags`. This runs two types of validation:

1. **Schema validation** - Validates JSON structure against `0-SCHEMA.json`
2. **Cross-file validation** - Checks for:
   - ID matches filename (e.g., `database.json` must have `"id": "database"`)
   - No duplicate IDs across all tag files
   - No duplicate tag names within the same locale

If you see validation errors, ensure:
- The `$schema` reference is correct
- The `id` field is a string and matches the filename
- The `name` object contains at least `en-GB`
- No extra fields are added
- Tag IDs and names are unique across all files

To manually validate tags before committing, run:
```bash
pnpm run validate:tags
```
