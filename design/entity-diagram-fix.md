# Entity Relationship Diagram Fix

## Fix for lines 83-94 in admin-rest-api-design.md

Replace the unclear diagram with one of these options that render well in marked.js:

### Option 1: Relationship Matrix (Recommended)

Legend: 1 = one, * = many, 1..* = one-to-many, *..* = many-to-many, 1..1 = one-to-one

- Summary
  - A User has one Profile (1..1)
  - A User has many Projects (1..*) and many Activities (1..*)
  - A User has many Roles and Roles have many Users (*..*)
  - A Role has many Permissions and Menu Items (*..*)
  - A Role has one Template (1..1)

| From     | Relationship         | To           | Cardinality |
|----------|----------------------|--------------|-------------|
| User     | has                  | Profile      | 1..1        |
| User     | owns                 | Project      | 1..*        |
| User     | performs             | Activity     | 1..*        |
| User     | assigned to          | Role         | *..*        |
| Role     | grants               | Permission   | *..*        |
| Role     | shows                | Menu Item    | *..*        |
| Role     | uses                 | Template     | 1..1        |

### Option 2: Clean HTML Table

Use only if you need more layout control; otherwise, Option 1 is clearer, especially on mobile.

```html
<!-- Keep HTML minimal to avoid style conflicts across renderers -->
<table>
  <thead>
    <tr><th>From</th><th>Relationship</th><th>To</th><th>Cardinality</th></tr>
  </thead>
  <tbody>
    <tr><td>User</td><td>has</td><td>Profile</td><td>1..1</td></tr>
    <tr><td>User</td><td>owns</td><td>Project</td><td>1..*</td></tr>
    <tr><td>User</td><td>performs</td><td>Activity</td><td>1..*</td></tr>
    <tr><td>User</td><td>assigned to</td><td>Role</td><td>*..*</td></tr>
    <tr><td>Role</td><td>grants</td><td>Permission</td><td>*..*</td></tr>
    <tr><td>Role</td><td>shows</td><td>Menu Item</td><td>*..*</td></tr>
    <tr><td>Role</td><td>uses</td><td>Template</td><td>1..1</td></tr>
  </tbody>
</table>
```

### Option 3: Fixed ASCII with Code Block

```
User (1) ──────────────┬────── (*) Role
    │                  │
    │ (1:1)            │ (*:*)
    ├─── Profile       ├─── Permission
    │                  │
    │ (1:*)           │ (*:*)
    ├─── Project       ├─── Menu Item
    │                  │
    │ (1:*)           │ (1:1)
    └─── Activity      └─── Template
```

## Instructions for AI Coding Agents

### Problem:
The original diagram and the initial HTML layout were hard to read, especially on narrow screens.

### Solution Applied:
1. Prefer a Relationship Matrix (Markdown table) for clarity and responsiveness.
2. If HTML is required, keep it minimal (no inline styling) so index.html stylesheet formats it well.
3. Avoid complex ASCII art unless required; if used, keep it in a fenced code block.

### How to Apply Fix:
Replace lines 83-94 in `/Users/adrian/work/mmm/design/admin-rest-api-design.md` with Option 1 (preferred) or Option 2.

### Testing:
1. Open index.html in browser
2. Navigate to Admin REST API Design
3. Confirm the matrix reads clearly and does not overflow on mobile

### Key Points:
- index.html uses marked.js and has table styles already
- Markdown tables are the most robust choice across renderers
- Keep notation consistent: 1, *, 1..*, *..*, 1..1