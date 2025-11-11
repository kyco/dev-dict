# Term types

This directory contains all the types used to categorise terms in the developer dictionary.

## What are types?

Types classify what kind of thing a term represents. For example, "React" is a `library`, "TypeScript" is a `language`, and "Node.js" is a `runtime_environment`.

## File structure

- `0-SCHEMA.json` - JSON Schema definition for type files
- `1-TEMPLATE.json` - Template file showing the structure for new types
- `*.json` - Individual type definition files

## Adding a new type

1. Copy `1-TEMPLATE.json` and rename it to your type's ID (e.g., `framework.json`)
2. Update the `id` field to match the filename (without `.json`)
3. Add translations for the type name in as many locales as you can:
   - `en-GB` (required) - English name
   - `de-DE` (optional) - German name

### Example

```json
{
  "$schema": "./0-SCHEMA.json",
  "id": "framework",
  "name": {
    "en-GB": "Framework",
    "de-DE": "Framework"
  }
}
```

## Naming conventions

- **File names**: Use lowercase with underscores for multi-word types (e.g., `runtime_environment.json`)
- **IDs**: Must match the filename (without `.json` extension)
- **Type names**: Use proper capitalisation in the name translations

## Validation

Type files are validated in three ways:

### 1. Editor validation (VS Code)
All type files are automatically validated against `0-SCHEMA.json` in VS Code as you edit them.

### 2. Pre-commit validation
When you commit changes to type files, Lefthook automatically runs validation to prevent invalid types from being committed.

### 3. Build-time validation
Types are validated during the build process using `pnpm run validate:types`. This runs two types of validation:

1. **Schema validation** - Validates JSON structure against `0-SCHEMA.json`
2. **Cross-file validation** - Checks for:
   - ID matches filename (e.g., `framework.json` must have `"id": "framework"`)
   - No duplicate IDs across all type files
   - No duplicate type names within the same locale

If you see validation errors, ensure:
- The `$schema` reference is correct
- The `id` field is a string and matches the filename
- The `name` object contains at least `en-GB`
- No extra fields are added
- Type IDs and names are unique across all files

To manually validate types before committing, run:
```bash
pnpm run validate:types
```

## Available types

Current types in the dictionary:
- `cms` - Content Management System
- `language` - Programming language
- `library` - Software library
- `runtime_environment` - Runtime environment
