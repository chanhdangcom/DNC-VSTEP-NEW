# Project Component, Styling & Presentation Rules

> **STRICT ENFORCEMENT:** Mandatory for AI agents and developers. Non-compliant code should be rejected in review.

## Tech Stack & Tooling

- **Framework:** Next.js (App Router), React, TypeScript
- **Styling:** Tailwind CSS + `tailwind-merge` via `cn` from `@/lib/utils`
- **Package manager:** `pnpm` only (never `npm` or `yarn`)
- **Formatter:** Prettier + `prettier-plugin-tailwindcss` (auto-sort Tailwind classes)

---

## 1. Directory Structure

Split components into two categories:

### Global / shared (`src/components/ui/` or `src/components/`)

- Atomic, highly reusable UI
- No business logic
- Examples: `button.tsx`, `input.tsx`, `page-breadcrumb.tsx`

### Feature-based (`src/features/{feature-name}/`)

```text
src/features/{feature-name}/
├── components/     # UI + feature logic
├── hooks/          # Feature-only hooks
├── utils/          # Feature-only helpers
└── {feature}-page.tsx
```

- Page entry: `src/features/{feature}/{feature}-page.tsx`
- Mock/static data: co-locate as `{feature}-data.ts` or `*-data.ts` in the feature folder
- File names: **kebab-case** (e.g. `login-form.tsx`, `documents-hub-panel.tsx`)

### Do not

- Put feature-specific components in `src/components/`
- Mix unrelated features in one folder
- Use PascalCase for file names in `src/features/`

---

## 2. Styling

- Use Tailwind utility classes; merge with `cn(...)` when conditional
- Prefer design tokens (`primary`, `red-600`, zinc scale) over arbitrary hex unless matching an existing pattern
- Run `pnpm format` before commit so class order stays consistent

```tsx
// Good
className={cn("rounded-lg border", isActive && "border-red-300")}

// Avoid
className={`rounded-lg border ${isActive ? "border-red-300" : ""}`}
```

---

## 3. Components & presentation

- Prefer Server Components unless `useState`, effects, or event handlers are required
- Mark client components with `"use client"` at top of file
- Keep components focused; extract subcomponents in the same feature folder
- Props: explicit TypeScript types, named exports for components

---

## 4. Spacing (vertical rhythm)

**Do not** put `mt-*`, `mb-*`, `pt-*`, or `pb-*` on leaf/feature components to separate sibling blocks.

- **Parents** own vertical rhythm with `space-y-*` (or `gap-*` in flex/grid).
- **Page / layout shells** (`*-page.tsx`, thin page composers) own section spacing and outer inset.
- **Allowed inside a component:** `space-y-*` between its own children; `px-*` for alignment; internal control padding (e.g. button `py-2`, table cell `py-3`).

```tsx
// Good — page shell
<main className="space-y-10">
  <PageBanner />
  <section className="container space-y-8 pb-16">...</section>
</main>

// Good — parent stacks children
<div className="space-y-5">
  <h2 />
  <p />
</div>

// Avoid — margin on leaf nodes
<p className="mt-5">...</p>
```

Apply this rule to **new and touched UI**; refactor adjacent code when you are already editing the file.

---

## 5. Linting & scripts

```bash
pnpm lint          # ESLint
pnpm typecheck     # TypeScript
pnpm format:check  # Prettier
pnpm build         # Production build
```

Fix lint/type errors before finishing a task.

---

## 6. Mock data

- Keep mock data in the owning feature (e.g. `documents-data.ts`, `news-data.ts`)
- Do not import feature data from unrelated features
- Types live in feature `types.ts` or next to data when small
