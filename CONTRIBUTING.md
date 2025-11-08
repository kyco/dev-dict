# Contributing to dev-dict

Thank you for contributing! This project is an open developer dictionary. Each term is a separate JSON file under `terms/`.

## Adding a New Term

1. Copy `template.json` to a new file in `terms/`, e.g.:

```bash
cp template.json terms/myterm.json
```

2. Fill in the fields:

- id → unique identifier (e.g., REACT)
- name → display name
- type → library, runtime, concept, methodology, etc.
- label → short human-readable description
- description → one-sentence definition
- Optional fields: tags, aka, examples, related, links, logo, color

3. Save and submit a Pull Request.

## Schema Versioning

Each term JSON includes a schemaVersion field. Do not change it unless updating the schema intentionally.

Current schema version: 1.0.0
