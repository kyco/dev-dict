# Update Entry Skill

Update existing terms, types, or tags in the dev-dict project.

## Skill Activation

This skill is automatically invoked when the user wants to update an existing term, type, or tag with new information or translations.

## Instructions

When this skill is activated:

1. **Identify the entry type** - Determine if updating a term, type, or tag
2. **Locate the file** - Find the appropriate file in:
   - Terms: `src/data/terms/{id}.ts`
   - Types: `src/data/types/{id}.ts`
   - Tags: `src/data/tags/{id}.ts`

3. **Read the existing entry** - Load the current data to understand the structure

4. **Apply updates** - Modify the entry based on user requirements:
   - Update translations for existing locales
   - Add new locale translations
   - Modify links, sources, or metadata
   - Update type/tag assignments (terms only)
   - Ensure all updates maintain the required structure

5. **Validate the update**:
   - Ensure required fields remain intact (id, name.en-US, etc.)
   - Verify locale records follow the `TLocaleRecord` structure
   - Check that IDs use lowercase with underscores only
   - Ensure filename matches the ID exactly
   - For terms: Validate type and tag references exist

6. **Run tests** - Execute `pnpm test` to ensure integrity:
   ```bash
   pnpm test
   ```

7. **Report changes** - Summarize what was updated for the user

## Examples

### Example 1: Update a term's definition

**User request**: "Update the React term definition to be more comprehensive"

**Actions**:
1. Read `/src/data/terms/react.ts`
2. Update the `definition` field with new content
3. Optionally add source attribution if content is from a specific source
4. Save the file
5. Run `pnpm test`
6. Report: "Updated React term definition in en-US locale"

### Example 2: Add German translation

**User request**: "Add German translation for the TypeScript term"

**Actions**:
1. Read `/src/data/terms/typescript.ts`
2. Add `de-DE` entries to `name`, `label`, and `definition` fields
3. Save the file
4. Run `pnpm test`
5. Report: "Added German (de-DE) translations for TypeScript term"

### Example 3: Update term links

**User request**: "Add npm link to the lodash term"

**Actions**:
1. Read `/src/data/terms/lodash.ts`
2. Add or update the `links` object with npm URL
3. Ensure `links.website` exists (required if links are provided)
4. Save the file
5. Run `pnpm test`
6. Report: "Added npm link to lodash term"

### Example 4: Update type name

**User request**: "Update the 'framework' type label in en-GB locale"

**Actions**:
1. Read `/src/data/types/framework.ts`
2. Update `name['en-GB']` field
3. Save the file
4. Run `pnpm test`
5. Report: "Updated framework type name in en-GB locale"

## Important Notes

- **Never modify the `id` field** - This would break references
- **Always preserve existing translations** - Only add or update, never remove without explicit user request
- **Run tests after every update** - This catches structural errors immediately
- **Maintain alphabetical order** - When updating entry files, keep exports sorted
- **Follow naming conventions** - IDs must be lowercase with underscores only

## Validation Checklist

Before completing the update:

- [ ] File structure is valid TypeScript
- [ ] All required fields are present (id, name.en-US, etc.)
- [ ] Locale records follow the correct structure
- [ ] References to types/tags/sources are valid
- [ ] Tests pass (`pnpm test`)
- [ ] No unnecessary comments were added
- [ ] Code follows the project's style guide

## Error Handling

If tests fail:
1. Read the test output carefully
2. Identify the specific validation error
3. Fix the issue in the entry file
4. Re-run tests
5. Report the issue and resolution to the user
