# Context Efficiency and Token Saving

## 1. Repository Exploration

* Do not read, enumerate, or search inside `node_modules/` during routine exploration.
* Exclude generated files, build outputs, coverage reports, and dependency directories from broad searches whenever supported by the available tools.
* Inspect project configuration, source files, and relevant documentation before exploring dependency internals.
* Read only files relevant to the current task. Expand the investigation when evidence shows that more context is necessary.

## 2. Tool Usage

* Prefer targeted file searches over dumping entire directory trees or large files.
* Use focused commands and limit output to the information needed.
* Avoid repeating searches or rereading unchanged files when previous results remain available and reliable.
* Batch independent, related inspection operations when supported by the tool.

## 3. Context Management

* Do not load every rule, document, or source file for every task without a clear reason.
* Consult task-specific rules and Skills when relevant and supported by the active AI tool.
* Summarize large findings and retain important file paths, decisions, and unresolved issues instead of repeating raw output.

## 4. Quality and Safety

* Do not skip necessary investigation, tests, or verification solely to save tokens.
* Do not assume a file, dependency, or behavior without checking relevant evidence.
* Expand the investigation when the current evidence is insufficient to make a reliable change.

# Contact Manager Project Rules Index

Welcome to the **Contact Manager Frontend** project engineering standards and AI rules directory. This repository organizes governance, coding conventions, UI/UX guidelines, architectural standards, and workflow skills under `.rulesync/` and `docs/`.

## Rules and Architecture Overview

The engineering rules and workflow skills are designed to ensure consistency, clean component architecture, and high UI fidelity:

- **Global Guidelines**: High-level rules for project setup, tech stack, and core frontend principles applied across all tasks.
- **Path-Scoped Rules**: Dedicated conventions for UI components (`src/components/**`), feature services (`src/features/**`), and pages (`src/pages/**`).
- **Reusable Workflow Skills**: Standardized, executable workflows under `.rulesync/skills/` for API integration, state flow, testing, and feature delivery.

## Rules Directory Index

The engineering standards are organized into 13 focused rule documents:

### Core Architecture and Setup
- **Project Overview & Tech Stack** (`.rulesync/rules/overview-and-stack.md`): React 19, Vite, JavaScript (ES6+), Bootstrap 5, client-side state management, and local development environment (`http://localhost:5173`). Reference: `docs/00-overview.md`.
- **Project Structure & Directory Responsibilities** (`.rulesync/rules/project-structure.md`): 4-layer architecture (`Page -> Component -> Feature Service -> Mock Data / API`), folder layout, and module boundaries. Reference: `docs/01-architecture.md`.
- **Core Collaboration Principles** (`.rulesync/rules/collaboration-principles.md`): Human-in-the-loop guidelines, Plan Before Code workflow, DRY, thin presentational components, and senior engineer mindset.
- **Software Requirements Specification (SRS)**: Functional requirements for full Contact CRUD operations, search/filtering, pagination, form validation, and edge cases. Reference: `docs/02-srs.md`.

### UI, UX & Component Rules
- **UI & UX Design System Rules** (`.rulesync/rules/ui-ux-rules.md`): 2-column layout (Sidebar + Main Content), color palette, typography hierarchy, status badges (`Active`, `Inactive`, `Frequent user`, `New user`), and responsive table/card patterns. Reference: `docs/03-ui-rules.md`.
- **Component Architecture & Contracts** (`.rulesync/rules/component-rules.md`): Separation of concerns, pure presentational components, single responsibility, and prop defaults.

### Coding Standards, Performance & Quality
- **Coding Conventions & Best Practices** (`.rulesync/rules/coding-conventions.md`): Function components with React Hooks, component folder structure, prop handling, avoiding inline styles in favor of Bootstrap utility classes, and formatting standards. Reference: `docs/04-coding-convention.md`.
- **Code Quality & Clean Code** (`.rulesync/rules/code-quality.md`): Surgical edits, intent-revealing names, self-documenting code, DRY principles, and defensive safeguards.
- **Performance & Render Optimization** (`.rulesync/rules/performance.md`): `useMemo`/`useCallback` usage, stable key props, SVG sprites, and search input debouncing.
- **Context Efficiency & Token Saving** (`.rulesync/rules/efficiency-and-context.md`): Guidelines for targeted repository exploration, avoiding scans in `node_modules`, efficient tool usage, and context management without compromising quality or verification.

### Safety, Testing, Operations & Version Control
- **Testing & Verification Standards** (`.rulesync/rules/testing.md`): Service CRUD verification, form regex validation, interaction flows, and post-modification smoke tests.
- **Verification Gates & DoD** (`.rulesync/rules/verification.md`): Definition of Done, mandatory `npm run build` checks, runtime console auditing, and clear completion reporting.
- **Git & Commit Standards** (`.rulesync/rules/git-and-commits.md`): Conventional Commits specification, atomic commits, and forbidden destructive Git operations.
- **Security & Secrets Management** (`.rulesync/rules/security-and-secrets.md`): Zero leaks in client bundle, `.env` file safety, XSS protection, and data sanitization.

## Reusable Workflow Skills Index

Specialized, actionable workflows located in `.rulesync/skills/`:

- **API Integration** (`.rulesync/skills/frontend-api-integration/SKILL.md`): Service layer abstraction, async state lifecycles (`idle`, `loading`, `success`, `empty`, `error`), and payload sanitization.
- **State & Data Flow** (`.rulesync/skills/frontend-state-and-data-flow/SKILL.md`): React state ownership, immutable updates, derived state with `useMemo`, and mutation safety.
- **Component Architecture** (`.rulesync/skills/frontend-component-architecture/SKILL.md`): Decoupled UI components, props contracts with safe fallbacks, and Bootstrap 5 styling.
- **Feature Delivery** (`.rulesync/skills/frontend-feature-workflow/SKILL.md`): End-to-end delivery workflow from requirements tracing to surgical edits and build verification.
- **Frontend Testing** (`.rulesync/skills/frontend-testing/SKILL.md`): Comprehensive verification of validation rules, CRUD operations, modal lifecycles, and a11y auditing.
- **Project Context** (`.rulesync/skills/project-context/SKILL.md`): Quick summary of project goals, constraints, and architecture.
