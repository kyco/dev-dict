# Add Entry Skill

Add new terms, types, or tags to the dev-dict project.

## Skill Activation

This skill is automatically invoked when the user wants to add a new term, type, or tag to the dev-dict library.

## Instructions

When this skill is activated:

1. **Gather requirements** - Ask the user for necessary information if not provided:
   - **For Terms**: name, type(s), label, definition, tags, optional links, optional altName
   - **For Types**: name (in at least en-US locale)
   - **For Tags**: name (in at least en-US locale)

2. **Generate ID** - Create a valid ID:
   - Convert to lowercase
   - Replace spaces with underscores
   - Replace hyphens with underscores
   - Remove special characters
   - Ensure uniqueness (check existing IDs)
   - Examples: "React Native" → `react_native`, "Node.js" → `node_js`

3. **Create the file** - Generate the appropriate file:
   - Terms: `src/data/terms/{id}.ts`
   - Types: `src/data/types/{id}.ts`
   - Tags: `src/data/tags/{id}.ts`

4. **Add to index** - Import and add to the appropriate index file:
   - Terms: `src/data/terms/index.ts` → `RAW_TERMS` object
   - Types: `src/data/types/index.ts` → `RAW_TYPES` object
   - Tags: `src/data/tags/index.ts` → `RAW_TAGS` object

5. **Add to entry file** - Add export in alphabetical order:
   - Terms: `src/terms-entry.ts`
   - Types: `src/types-entry.ts`
   - Tags: `src/tags-entry.ts`

6. **Run tests** - Validate the new entry:
   ```bash
   pnpm test
   ```

7. **Build** - Ensure the build succeeds:
   ```bash
   pnpm build
   ```

8. **Report** - Provide a summary of what was added with the ID and file locations

## Template Structures

### Term Template

```typescript
import type { TTerm } from '@/types'
import { TYPES } from '@/data/types'
import { TAGS } from '@/data/tags'

const {id}: TTerm = {
  id: '{id}',
  name: {
    'en-US': '{Name}',
  },
  label: {
    'en-US': '{Descriptive Label}',
  },
  definition: {
    'en-US': '{Comprehensive definition}',
  },
  type: [TYPES.{type}],
  tags: [TAGS.{tag1}, TAGS.{tag2}],
  links: {
    website: '{https://...}',
  },
}

export default {id}
```

### Type Template

```typescript
import type { TTermType } from '@/types'

const {id}: TTermType = {
  id: '{id}',
  name: {
    'en-US': '{Name}',
  },
}

export default {id}
```

### Tag Template

```typescript
import type { TTermTag } from '@/types'

const {id}: TTermTag = {
  id: '{id}',
  name: {
    'en-US': '{Name}',
  },
}

export default {id}
```

## Examples

### Example 1: Add a new term

**User request**: "Add a term for Svelte, a frontend framework"

**Actions**:
1. Generate ID: `svelte`
2. Create `src/data/terms/svelte.ts` with:
   - name: "Svelte"
   - label: "Frontend Framework"
   - definition: (comprehensive description)
   - type: [TYPES.framework]
   - tags: [TAGS.frontend, TAGS.javascript]
   - links: { website: "https://svelte.dev" }
3. Add import to `src/data/terms/index.ts`:
   ```typescript
   import svelte from './svelte'
   ```
4. Add to RAW_TERMS in alphabetical position:
   ```typescript
   svelte,
   ```
5. Add export to `src/terms-entry.ts` in alphabetical order:
   ```typescript
   export { default as svelte } from '@/data/terms/svelte'
   ```
6. Run `pnpm test`
7. Run `pnpm build`
8. Report: "Added new term 'Svelte' with ID `svelte`"

### Example 2: Add a new type

**User request**: "Add a type for 'design system'"

**Actions**:
1. Generate ID: `design_system`
2. Create `src/data/types/design_system.ts`
3. Add import to `src/data/types/index.ts`
4. Add to RAW_TYPES in alphabetical position
5. Add export to `src/types-entry.ts` in alphabetical order
6. Run `pnpm test`
7. Run `pnpm build`
8. Report: "Added new type 'design_system'"

### Example 3: Add a new tag

**User request**: "Add a tag for 'mobile development'"

**Actions**:
1. Generate ID: `mobile`
2. Create `src/data/tags/mobile.ts`
3. Add import to `src/data/tags/index.ts`
4. Add to RAW_TAGS in alphabetical position
5. Add export to `src/tags-entry.ts` in alphabetical order
6. Run `pnpm test`
7. Run `pnpm build`
8. Report: "Added new tag 'mobile'"

## ID Naming Convention Rules

**CRITICAL**: All IDs must follow these rules:

1. **Lowercase only** - No uppercase letters
2. **Underscores for spaces** - "React Native" → `react_native`
3. **No hyphens** - Convert hyphens to underscores: "D3.js" → `d3_js`
4. **No special characters** - Remove dots, slashes, etc.: "Node.js" → `node_js`
5. **Descriptive and clear** - Use full words when possible
6. **Filename matches ID** - If ID is `node_js`, file must be `node_js.ts`

**Examples**:
- "React" → `react` ✓
- "Node.js" → `node_js` ✓
- "D3.js" → `d3_js` ✓
- "Next.js" → `next_js` ✓
- "Open Source" → `open_source` ✓
- "node-js" → ❌ (should be `node_js`)
- "Node.JS" → ❌ (should be `node_js`)

## Required Fields

### For Terms
- `id` - Unique identifier (lowercase with underscores)
- `name['en-US']` - Display name
- `label['en-US']` - Descriptive classification
- `definition['en-US']` - Full description
- `type` - Array of at least one type
- `tags` - Array (can be empty)

### For Types and Tags
- `id` - Unique identifier (lowercase with underscores)
- `name['en-US']` - Display name

## Optional Fields

### For Terms
- `altName` - Short name or abbreviation
- `links` - External URLs (website required if links provided)
- `sources` - Source attribution for content
- Additional locales: `en-GB`, `de-DE`

## Validation Checklist

Before completing:

- [ ] ID follows naming convention (lowercase, underscores only)
- [ ] Filename matches ID exactly
- [ ] All required fields are present
- [ ] At least en-US locale is provided for all text fields
- [ ] Type/tag references are valid (for terms)
- [ ] File created in correct directory
- [ ] Import added to index file
- [ ] Export added to entry file in alphabetical order
- [ ] Tests pass (`pnpm test`)
- [ ] Build succeeds (`pnpm build`)

## Error Handling

If tests fail:
1. Review the test output
2. Common issues:
   - Missing export in entry file
   - ID doesn't match filename
   - ID uses invalid characters (hyphens, uppercase)
   - Missing required fields
   - Invalid locale structure
3. Fix the issue
4. Re-run tests
5. Report to user

## Best Practices

1. **Research first** - Check if similar entries exist for reference
2. **Use official sources** - Get definitions from official documentation when possible
3. **Add source attribution** - Use `sources` field when content is from a specific origin
4. **Provide context** - The `label` field should give clear context beyond just the type
5. **Include relevant links** - Always add the official website and relevant resources
6. **Follow existing patterns** - Look at similar entries for consistency
